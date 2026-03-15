# SmartLead AI 🚀

> AI-powered Cold Outreach Automation Platform — Mobile Web (React PWA) + Native Flutter App + Node.js/Express Backend + MongoDB

---

## ✨ Features

- **Lead Scraping** — search by niche, auto-save to MongoDB
- **AI Message Generator** — DeepSeek API with smart offline fallback
- **WhatsApp / Call / Email** deep links — one tap outreach
- **Pipeline Control** — visual 4-step automation workflow
- **Billing History** — subscription management UI
- **Analytics Dashboard** — real-time stats from MongoDB

---

## 🗂️ Project Structure

```
smartlead-ai/
├── src/              ← React PWA (works on any phone browser)
├── backend/          ← Node.js + Express + MongoDB API
└── flutter_code/     ← Flutter native Android/iOS app
```

---

## ⚡ Quick Start

### 1. Backend
```bash
cd backend
cp .env.example .env   # fill in your keys
npm install
node server.js
```

### 2. React App
```bash
npm install
npm run dev
# → http://localhost:5173
```

### 3. Flutter
```bash
cd flutter_code
flutter pub get
flutter run
```

---

## 🔑 Environment Variables (`backend/.env`)

| Key | Description |
|-----|-------------|
| `MONGO_URI` | MongoDB Atlas connection string |
| `DEEPSEEK_API_KEY` | [platform.deepseek.com](https://platform.deepseek.com) |
| `PORT` | Server port (default 5000) |

---

## 🌐 Deployment

| Part | Platform | Command |
|------|----------|---------|
| Backend | [Render.com](https://render.com) | Auto via `render.yaml` |
| React PWA | [Vercel](https://vercel.com) | `npx vercel --prod` |
| Flutter | Android | `flutter build apk --release` |

---

## 📱 Install as Phone App (No Play Store)

1. Deploy React to Vercel → open URL in Chrome on phone  
2. Tap **⋮ → Add to Home Screen**  
3. Done — app icon appears, runs full screen like a native app!

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite + Vanilla CSS (PWA)
- **Mobile:** Flutter (Dart)
- **Backend:** Node.js + Express
- **Database:** MongoDB Atlas
- **AI:** DeepSeek API (`deepseek-chat`)
