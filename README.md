#  AI Chat Presentation Generator

An AI-powered chat application that generates and edits **PowerPoint presentations** and allows users to download them as **PPTX** or **PDF** — built using **React** and **Node.js**.

---

##  Project Overview
This project lets users type a topic or question, and the app automatically creates structured presentation slides with titles and bullet points.  
It mimics an AI-powered generator (like Gemini or ChatGPT) using a **mock backend** for demonstration.

> **Note:** The AI logic is simulated in Node.js (no real API key needed).

---

##  Features
1. Chat-style input for topics  
2. Auto-generated slide content  
3. Preview generated slides instantly  
4. Download slides as **PowerPoint (PPTX)** or **PDF**  
5. Simple editing by entering a new prompt  
6. Full-stack connection (React + Node.js)

---

##  Tech Stack

### Frontend
- React (Create React App)
- Axios (for API calls)
- pptxgenjs (for PowerPoint generation)
- jsPDF (for PDF export)

### Backend
- Node.js
- Express.js
- CORS (to connect frontend + backend)
- dotenv (for environment management)

---

##  Folder Structure
AI Chat/
│
├── Backend/
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js          ✅ (Your backend API)
│
├── Frontend/
│   └── client/
│       ├── node_modules/
│       ├── public/
│       ├── src/
│       │   ├── App.jsx    ✅ (Your main React app)
│       │   ├── App.css    ✅ (App styling)
│       │   ├── index.js   ✅ (React entry point — perfect)
│       │   └── others (default files)
│       ├── package.json
│       └── README.md
│
└── README.md              ✅ (Top-level project README)


---

##  Setup Instructions

### 1️ Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/ai-chat.git
cd ai-chat

2. Setup Backend
cd backend
npm install
npm start

✅ Output should say:

Server running on port 5000

3️. Setup Frontend

Open a new terminal:

cd ../frontend/client
npm install
npm start


* Opens at: http://localhost:3000

How It Works

The user enters a topic (e.g., “AI in Education”).
React sends the input to the backend via Axios.
The backend (Node.js) generates mock slide content in JSON.
React displays the slides dynamically.
Users can download the slides as PPT or PDF.

** Example Output

Prompt:

AI in Education

Slides Generated:

Introduction
Core Concepts
Benefits
Challenges
Conclusion

Each slide includes structured bullet points.

Download Options

PowerPoint (PPTX):
Generated using pptxgenjs.
Each slide is created dynamically with a title and bullet points.

PDF:
Generated using jsPDF.
Each slide appears on its own page with bold titles and proper spacing.

1. Deployment Guide
2. Backend (Render)

Push your code to GitHub.

Go to https://render.com

Create a New Web Service → Select your repo.

Set:
Root Directory: backend
Build Command: npm install
Start Command: npm start

Deploy and note your Render URL (e.g. https://ai-chat-backend.onrender.com)

 Frontend (Netlify)

Go to https://app.netlify.com

Import your GitHub repo.

Set:
Base Directory: frontend/client
Build Command: npm run build
Publish Directory: build

Deploy and note your Netlify URL (e.g. https://ai-chat-faa.netlify.app)

 Connect Frontend and Backend

In frontend/client/src/App.jsx, replace this:

const res = await axios.post("http://localhost:5000/api/generate", { prompt });

with your Render URL:

const res = await axios.post("https://ai-chat-backend.onrender.com/api/generate", { prompt });

Then rebuild and redeploy your frontend.

--Editing Slides

Users can edit or update slides by typing a new topic in the input field and clicking Generate Slides again.
The app regenerates and replaces old slides instantly.

 --Challenges & Learnings

CORS Issue: Solved by adding app.use(cors()) in Express.
PDF Layout: Fixed by using addPage() in jsPDF for slide separation.
Learned to integrate frontend + backend and manage state updates in React.

 --Future Enhancements

~ Add real AI API integration (Gemini / OpenAI)
~ Include slide design themes
~ Add user authentication & history

Author

Farija (Fresher Developer)
Developed as an interview project to demonstrate full-stack React + Node.js skills.

License

MIT License © 2025 Faa
---

