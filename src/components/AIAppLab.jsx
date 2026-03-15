import React, { useState } from 'react';
import { ArrowLeft, MoreHorizontal, RefreshCw, Copy, Send, ChevronRight, Home, Sparkles, Clock, User } from 'lucide-react';

export default function AIAppLab({ onNavigate, lead }) {
  const [tone, setTone] = useState('Professional');
  const [context, setContext] = useState('');
  const [generating, setGenerating] = useState(false);
  const [message, setMessage] = useState("Hi [Name], I'm reaching out regarding your business. I noticed you're doing great work in your industry and wanted to discuss a potential collaboration.");

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const res = await fetch('http://localhost:5000/api/generate-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadDetails: lead || { name: '[Name]', type: 'Business' },
          tone: tone,
          context: context
        })
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      console.error(err);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F9F9FA' }}>
      <div className="top-bar flex items-center justify-between" style={{ background: '#F9F9FA', zIndex: 10 }}>
        <ArrowLeft size={24} color="#121212" onClick={() => onNavigate('dashboard')} style={{ cursor: 'pointer' }} />
        <h1 className="top-bar-title" style={{ fontSize: '18px', fontWeight: 900 }}>AI Message Lab</h1>
        <MoreHorizontal size={24} color="#121212" />
      </div>

      <div className="scroll-area flex col" style={{ padding: '0 20px 200px 20px' }}>
        <div style={{ marginTop: '20px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#4B5563', marginBottom: '12px' }}>What's the context?</h2>
          <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E5E7EB', padding: '16px' }}>
            <textarea 
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="e.g., Asking for a meeting to discuss marketing automation..."
              style={{ width: '100%', height: '80px', border: 'none', outline: 'none', resize: 'none', fontSize: '15px', color: '#121212', fontFamily: 'inherit', fontWeight: 500 }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#4B5563', marginBottom: '12px' }}>Select Tone</h2>
          <div className="flex" style={{ gap: '10px', flexWrap: 'wrap' }}>
            {['Professional', 'Friendly', 'Witty', 'Urgent', 'Empathetic'].map((t) => (
              <div key={t} 
                onClick={() => setTone(t)}
                style={{
                  background: t === tone ? '#FFFF00' : '#FFFFFF',
                  color: '#121212',
                  border: t === tone ? 'none' : '1px solid #E5E7EB',
                  padding: '10px 18px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}>
                {t}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center" style={{ marginBottom: '12px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#4B5563' }}>Preview Draft</h2>
            <div onClick={handleGenerate} className="flex items-center gap-1" style={{ color: '#6B7280', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
              <RefreshCw size={14} className={generating ? 'animate-spin' : ''} /> {generating ? 'Generating...' : 'Regenerate'}
            </div>
          </div>
          <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E5E7EB', padding: '24px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 16, right: 16, background: '#F3F4F6', padding: '6px', borderRadius: '8px', color: '#9CA3AF', cursor: 'pointer' }}>
              <Copy size={16} />
            </div>
            <p style={{ fontSize: '15px', color: '#1F2937', lineHeight: 1.6, fontWeight: 500 }}>
              {message}
            </p>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 84, left: 20, right: 20, zIndex: 200 }}>
        <button className="flex justify-between items-center" style={{ background: '#FFFF00', padding: '18px 24px', borderRadius: '24px', border: 'none', boxShadow: '0 8px 30px rgba(255,255,0,0.3)', width: '100%', cursor: 'pointer' }}>
          <div className="flex items-center gap-3">
             <div style={{ background: '#121212', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Send size={14} color="#FFFF00" />
             </div>
             <span style={{ fontSize: '16px', fontWeight: 900, color: '#121212' }}>Send to WhatsApp</span>
          </div>
          <ChevronRight size={20} color="#121212" />
        </button>
      </div>
    </div>
  );
}
