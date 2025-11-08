#  AI-Powered Chat Application for PowerPoint Generation

A full-stack web application that allows users to generate, preview, and download AI-generated PowerPoint presentations from text prompts.

##  Live Demo

- Frontend (Netlify): [https://mellow-melomakarona-c3783a.netlify.app/](https://mellow-melomakarona-c3783a.netlify.app/)
- Backend (Render): [https://ai-chat-backend-cdzh.onrender.com](https://ai-chat-backend-cdzh.onrender.com)
- GitHub Repository: [https://github.com/farija-16/ai-chat-ppt](https://github.com/farija-16/ai-chat-ppt)

---

##  Features

1. Chat-based prompt interface  
2. AI-powered slide content generation (mock logic from Node backend)  
3. Real-time slide preview  
4. Export slides as PowerPoint (.pptx) or PDF (.pdf)  
5. Backend hosted on **Render**, frontend on **Netlify**  
6. Clean, minimal React UI  

---

##  Tech Stack

| Layer          | Technology                           |
|--------------- |--------------------------------------| 
| **Frontend**   | React.js, Axios, jsPDF, pptxgenjs    |
| **Backend**    | Node.js, Express.js                  |
| **Deployment** | Netlify (Frontend), Render (Backend) |
| **Language**   | JavaScript (ES6)                     |

---

##  Installation and Setup (For Local Testing)

###  Frontend
```bash
cd Frontend/client
npm install
npm start

###  Backend
cd Backend
npm install
node server.js

### API Endpoint (Mock AI Response)

POST /api/generate
Request Body:
{
  "prompt": "AI in Education"
}

Response Example:
{
  "slides": [
    {
      "title": "Introduction to AI in Education",
      "bullets": [
        "AI enhances personalized learning.",
        "Helps teachers analyze student performance."
      ]
    }
  ]
}

Folder Structure
AI Chat/
│
├── Backend/
│   ├── server.js
│   ├── package.json
│
├── Frontend/
│   └── client/
│       ├── src/
│       │   ├── App.jsx
│       │   ├── index.js
│       │   └── App.css
│       ├── public/
│       └── package.json
│
└── README.md

---

##  Assumptions
- The AI content in this project is **mock-generated** in the backend (`server.js`) for demonstration purposes.  
- No external AI API (like Gemini or OpenAI) is used — this ensures the app runs completely free and offline.  
- The backend hosted on Render (`https://ai-chat-backend-cdzh.onrender.com`) provides pre-defined slide content based on the user's topic.  
- This design choice keeps the project lightweight and suitable for interview evaluation without API dependency.

Credits
Developed by Farija (farija-16)
For interview assignment — AI Chat App with PowerPoint Generation