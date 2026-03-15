require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { OpenAI } = require('openai'); // DeepSeek uses the OpenAI-compatible SDK

const app = express();
app.use(express.json());
app.use(cors());

// ─── MongoDB Connection ────────────────────────────────────────────────────
const connectDB = async () => {
  try {
    const connStr = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/smartlead';
    await mongoose.connect(connStr);
    console.log(`✅  MongoDB Connected to: ${connStr}`);
  } catch (err) {
    console.error(`❌  MongoDB Connection Failed: ${err.message}`);
    console.log('💡 Tip: Make sure MongoDB is running locally or provide a valid MONGO_URI in .env');
  }
};
connectDB();

// ─── Schemas ──────────────────────────────────────────────────────────────
const leadSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  type:      String,
  location:  String,
  distance:  String,
  website:   Boolean,
  phone:     String,
  email:     String,
  score:     Number,
  verified:  Boolean,
  img:       String,
  addedAt:   { type: Date, default: Date.now },
});
const Lead = mongoose.model('Lead', leadSchema);

const messageLogSchema = new mongoose.Schema({
  leadId:    String,
  leadName:  String,
  message:   String,
  tone:      String,
  sentAt:    { type: Date, default: Date.now },
});
const MessageLog = mongoose.model('MessageLog', messageLogSchema);

// ─── DeepSeek (OpenAI-compatible) ────────────────────────────────────────
const openai = process.env.DEEPSEEK_API_KEY
  ? new OpenAI({
      apiKey: process.env.DEEPSEEK_API_KEY,
      baseURL: 'https://api.deepseek.com',
    })
  : null;

// ─── Routes ───────────────────────────────────────────────────────────────

/** GET /api/leads – all leads */
app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ addedAt: -1 }).limit(50);
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/** POST /api/scrape – simulate scraping + save to DB */
app.post('/api/scrape', async (req, res) => {
  const { query = 'Restaurants' } = req.body;

  const mockLeads = [
    { name: `${query} Hub`, type: 'Restaurant', location: 'Bengaluru', distance: '1.2km', website: true, phone: '+91 9000000001', email: 'info@hub.in', score: 91, verified: true, img: 'RH' },
    { name: 'Apex Digital Agency', type: 'B2B Services', location: 'Mumbai', distance: '12km', website: true, phone: '+91 8000000002', email: 'hello@apex.in', score: 88, verified: false, img: 'AD' },
    { name: 'Kochi Tech Solutions', type: 'IT Consulting', location: 'Kochi', distance: '850km', website: true, phone: '+91 7000000003', email: 'sales@kochi.com', score: 95, verified: true, img: 'KT' },
    { name: 'Fresh Mart Supermarket', type: 'Retail & FMCG', location: 'Bengaluru', distance: '2.4km', website: true, phone: '+91 9876543210', email: 'contact@freshmart.in', score: 92, verified: true, img: 'FM' },
  ];

  try {
    const saved = await Lead.insertMany(mockLeads, { ordered: false });
    res.json({ message: 'Scraping complete', count: saved.length, leads: saved });
  } catch (err) {
    // might fail on duplicates – that's OK
    res.json({ message: 'Scraping done (some duplicates skipped)', count: 0 });
  }
});

/** POST /api/generate-message – DeepSeek with graceful fallback */
app.post('/api/generate-message', async (req, res) => {
  const { leadDetails, context = '', tone = 'Professional', creativity = 75 } = req.body;

  // If DeepSeek key is available, use it
  if (openai) {
    try {
      const response = await openai.chat.completions.create({
        model: 'deepseek-chat',          // DeepSeek model (V3)
        temperature: creativity / 100,
        messages: [
          { role: 'system', content: `You are an expert sales representative. Write a short, personalized cold outreach message. Tone: ${tone}. Max 4 sentences.` },
          { role: 'user', content: `Lead: ${leadDetails.name}, business type: ${leadDetails.type || 'Business'}, location: ${leadDetails.location || ''}. Context: ${context}` },
        ],
      });
      const msg = response.choices[0].message.content;

      // Log to MongoDB
      await MessageLog.create({ leadId: leadDetails._id, leadName: leadDetails.name, message: msg, tone });
      return res.json({ message: msg });
    } catch (err) {
      console.error('DeepSeek error:', err.message);
      // Fall through to fallback
    }
  }

  // Offline / no key fallback
  const name = (leadDetails.name || '').split(' ')[0];
  const msg = `Hi ${name},\n\nI noticed you're doing great with ${leadDetails.type || 'your business'} in ${leadDetails.location || 'your area'}. As your business scales, managing leads efficiently becomes critical.\n\nWe provide an AI automation tool that can skyrocket your conversions. Would you be open to a 5-minute chat?\n\nBest,\nAgent`;
  res.json({ message: msg });
});

/** GET /api/stats – dashboard stats */
app.get('/api/stats', async (req, res) => {
  try {
    const totalLeads  = await Lead.countDocuments();
    const aiMessages  = await MessageLog.countDocuments();
    res.json({
      totalLeads,
      aiMessages,
      outreachSent:    432,
      replies:          98,
      conversionRate:  12.5,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/** Health check */
app.get('/', (_, res) => res.json({ status: 'ok', service: 'SmartLead AI API' }));

// ─── Start ────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀  Server running on port ${PORT}`));
