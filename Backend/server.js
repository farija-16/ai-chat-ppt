import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/generate",(req,res) =>{
    const{ prompt } = req.body;
    console.log(" Prompt Received:",prompt);
    const slides = [
        {
            title: "Introduction",
            bullets : [ 
                `Topic Overview : ${prompt}`,
                "Why this topic matters",
                "What  the presentation will cover"
            ],
        },
        {
            title:"Benefits",
            bullets : [
                "Efficiency or innovation gains",
                "Real-World impact",
                "Long-term value",
            ],
        },
        {
            title:"Challenges",
            bullets : [
                "Current Limitations",
                "Implementation Hurdles",
                "Future improvements needed",
            ],
        },
        {
            title:"Conclusion",
            bullets : [
                "Summary of key takeways",
                "Future possibilities",
                "Final thoughts on the topic",
            ],
        },
    ];

    res.json({ slides });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Backend Running on port ${PORT}`));