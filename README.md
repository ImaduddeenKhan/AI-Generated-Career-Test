# AI-Generated Career Test

**AI-powered, chat-first career discovery that turns psychometric insights into a personalized PDF report.**

[![Build](https://img.shields.io/badge/build-not_configured-lightgrey?style=flat)](./)
[![License](https://img.shields.io/github/license/ImaduddeenKhan/AI-Generated-Career-Test?style=flat)](LICENSE)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A recruiter should understand this in under a minute: **this project is an AI-driven career assessment that adapts questions in real time, analyzes responses with Gemini, and delivers a polished PDF career report—built with a modern React + Vite stack.**

---

## 🚀 Project Overview
This web app guides users through a conversational, 50-question career assessment. It alternates between MCQ and open-ended prompts, generates tailored questions with Gemini, and produces a personalized career report with actionable insights.

## ✨ Features
- **Adaptive AI questioning** (Gemini 1.5 Flash) for richer, more relevant answers
- **Psychometric-style insights**: personality type, traits, and career matches
- **PDF report export** for shareable results
- **Progress tracking** across the full assessment
- **Persistent storage** to Firebase for analytics and follow-up
- **Modern UI** with Tailwind + shadcn/ui components

## 🧠 Problem & Solution
**Problem:** Traditional career tests are static, generic, and rarely feel personalized—leading to shallow guidance.

**Solution:** A conversational, AI-led test that adapts to user responses in real time, then delivers a tailored career report with insights, recommendations, and next steps.

## 🛠 Tech Stack
- **Frontend:** React, TypeScript, Vite
- **UI:** Tailwind CSS, shadcn/ui, Radix UI
- **Animation:** Framer Motion
- **AI:** Google Gemini (Generative AI SDK)
- **Data & Auth:** Firebase (Firestore + Auth)
- **PDF Export:** jsPDF + html2canvas

## 📸 Screenshots / Demo
> _Add a screenshot or short GIF here for instant visual impact._

![App Screenshot](./public/placeholder.svg)

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js 18+**
- **npm**

### 1) Install dependencies
```bash
npm install
```

### 2) Configure environment variables
Create a `.env` file in the project root:
```bash
VITE_GEMINI_API_KEY=your_gemini_key
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 3) Run the app
```bash
npm run dev
```

### Useful scripts
```bash
npm run lint
npm run build
npm run preview
```

## 📂 Project Structure
```
src/
  components/      # UI and chat components
  lib/             # Gemini, Firebase, PDF generation
  pages/           # Route-level pages
  hooks/           # Reusable hooks
public/            # Static assets
```

## 🔮 Future Improvements
- Live demo deployment with shareable report links
- More granular career tracks and regional salary insights
- Multi-language support
- Enhanced analytics dashboard for admins
- Full test suite and CI pipeline

## 🤝 Contribution Guidelines
Contributions are welcome.
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m "Add: your feature"`)
4. Push to your branch and open a PR

## 📜 License
MIT License © 2025 Imad Khan — see [LICENSE](LICENSE).
