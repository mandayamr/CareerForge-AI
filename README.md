# 🔥 CareerForge AI — Intelligent Job Hunting Platform

> **Hackathon Submission** | AI + Cybersecurity Track

CareerForge AI is an end-to-end intelligent career acceleration platform that uses AI to analyze resumes, map personalized learning paths, match jobs, craft cold emails, and surface critical signals like H1B sponsorship history and recent layoffs — all in one place.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🛤️ **Career Path Builder** | Choose your domain + experience level → get a curated roadmap with timings and URLs |
| 📄 **AI Resume Analyzer** | Upload your resume → get strengths, gaps, role matches, and improvement suggestions |
| 💼 **Job Portal Aggregator** | Pulls from LinkedIn, Indeed, Glassdoor — shows % match score per listing |
| 📧 **Cold Email Generator** | Finds hiring manager emails and crafts personalized outreach using your strengths |
| ✏️ **Resume Tailoring Engine** | Auto-edits your resume for a specific role in one click |
| 🌐 **H1B Sponsor Checker** | Flags whether employers have H1B sponsorship history |
| ⚡ **Layoff Risk Signals** | Surfaces recent layoff news and financial risk signals for each company |

---

## 🏗️ Architecture

```
careerforge-ai/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── PathSelector.jsx
│   │   ├── ResumeUploader.jsx
│   │   ├── JobBoard.jsx
│   │   ├── ColdEmailDraft.jsx
│   │   ├── ResumeEditor.jsx
│   │   └── RiskBadges.jsx
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── PathExplorer.jsx
│   │   ├── ResumeAnalysis.jsx
│   │   └── JobSearch.jsx
│   ├── utils/
│   │   ├── resumeParser.js     # PDF/DOCX extraction
│   │   ├── matchScorer.js      # TF-IDF job match scoring
│   │   ├── h1bChecker.js       # H1B sponsor lookup
│   │   └── layoffDetector.js   # Layoff signal aggregator
│   ├── hooks/
│   │   └── useClaudeAI.js      # Anthropic API integration
│   └── data/
│       ├── careerPaths.js      # Curated path data with URLs
│       └── jobPortals.js       # Portal configs
├── public/
├── package.json
└── README.md
```

---

## 🚀 Tech Stack

- **Frontend**: React 18 + Tailwind CSS
- **AI Engine**: Claude claude-sonnet-4-20250514 (Anthropic API)
- **Resume Parsing**: PDF.js + Mammoth.js
- **Job Data**: LinkedIn/Indeed/Glassdoor APIs
- **H1B Data**: USCIS public dataset
- **Layoff Signals**: Layoffs.fyi API + web scraping

---

## 🔧 Setup

```bash
git clone https://github.com/yourusername/careerforge-ai
cd careerforge-ai
npm install
cp .env.example .env
# Add your ANTHROPIC_API_KEY
npm run dev
```

---

## 🔐 Security & Privacy

- Resumes are processed client-side and never stored
- API calls are proxied through a secure backend
- H1B lookups use only public USCIS data
- All user data is ephemeral per session

---

## 📄 License

MIT
