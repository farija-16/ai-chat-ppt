import React, {useState} from 'react'
import axios from 'axios'
import PptxGenJS from 'pptxgenjs'
import jsPDF from 'jspdf'


function App() {
    const [prompt , setPrompt] = useState("");
    const [slides , setSlides] = useState([]);
    const [loading ,setLoading] = useState(false);

    const handleSend = async () =>{
        if (!prompt.trim()) return;
        setLoading(true);

        try {
            //send a topic to backend
            const res = await axios.post("http://localhost:5000/api/generate",{prompt});
            //update state with slides data(mock AI Output)
            setSlides(res.data.slides);
        }catch(error){
            console.error("Error:",error);
            alert("Something went wrong. Please Check your backend is running");
        }
        setLoading(false);
    };

    // ----- Function : Download as PDF -----
    const handleDownloadPPT = () => {
        if(!slides.length){
            alert("No Slides to export!");
            return;
        }
        const pptx = new PptxGenJS();
        slides.forEach((slidesData) => {
            const slide = pptx.addSlide();
            slide.addText(slidesData.title, { x : 1, y: 0.5, fontSize:24,bold:true});
            slidesData.bullets.forEach((b, i) => {
                slide.addText(`• ${b}`, { x: 1, y:1.2 + i * 0.5,fontSize:18});
            });
        });
        pptx.writeFile("AI_Presentation.pptx");
    };
    //------- Function : Download as PDF -------
    const handleDownloadPDF = () => {
        if (!slides.length){
            alert("No Slides to Export!");
            return;
        }
        const pdf = new jsPDF();
        

        slides.forEach((slide, index) => {
            if (index !==0) pdf.addPage(); //New Page for each slide after the first 
            //title
            pdf.setFont("helvetica","bold");
            pdf.setFontSize(20);
            pdf.text(slide.title, 20 , 30);
            //Bullets Points
            pdf.setFont("helvetica","normal");
            pdf.setFontSize(14);
            let yPosition = 50;
            slide.bullets.forEach((point) => {
                pdf.text(`• ${point}`,30,yPosition);
                yPosition += 10;
            });
        });
        pdf.save("AI_Presentation.pdf");
    };
    //------- JSX UI Section -------

  return (
    <div style={ {textAlign:'center',padding:'20px',fontFamily:'Arial,sans-serif', marginTop:"180px"}}>
        <h1 style={{fontSize:'28px',fontWeight:'bold',marginBottom:'10px'}}>AI -- PowerPoint Generator </h1>
        {/* Prompt Textarea */}
        <textarea 
        rows="3" 
        cols="50" 
        placeholder='Enter a topic(e.g. The Future of AI)' 
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{
            padding:"10px",
            borderRadius:"6px",
            border:"1px solid #ccc",
            width:"60%",
            resize: 'none',
        }}

        ></textarea>

    <br />
    {/* Geneate Slides Button */}
    <button 
    onClick={handleSend}
    disabled={loading}
    style={{
        marginTop:"12px",
        padding:"10px 20px",
        backgroundColor:"#007bff",
        color:"white",
        border:"none",
        borderRadius:"6px",
        cursor:"pointer",
    }}> 
    {loading ? "Generating..":"Generate Slides"}
    </button>
    {/* Slides Preview Section */}
    {slides.length > 0 && (
        <div 
        style={{ 
            marginTop:"30px",
            textAlign:"left",
            display:"inline-block",
            width:"60%",
            background:"#f9f9f9",
            padding:"15px",
            borderRadius:"8px",
            boxShadow:"0 2px 6px rgba(0,0,0,0.1)",
        }}>
            <h2 style={{textAlign:"center",marginBottom:"10px"}}> Generate Slides Preview</h2>
            {/* Loop Through Slides */}
            {slides.map((slides, i) => (
                <div 
                key={i}
                style={{ 
                    border:"1px solid #ddd",
                    borderRadius:"6px",
                    padding:"10px",
                    marginBottom:"10px",
                    backgroundColor:"white"
                }}>
                    <h3 style={{margin:"0 0 8px 0",color:"#333"}}>{slides.title}</h3>
                    <ul style={{margin:"0",paddingLeft:"20px"}}>
                        {slides.bullets.map((b,idx) => (
                            <li key={idx}> {b} </li>
                        ))}
                    </ul>
                    </div>
            ))}
            {/* Download Button */}
            <div style={{textAlign:"center"}}>
                <button onClick={handleDownloadPPT} 
                style={{ 
                    marginTop:"10px",padding:"10px 20px",
                    backgroundColor:"#28a745",color:"white",
                    border:"none",borderRadius:"6px",
                    cursor:"pointer",marginRight:"10px",
                }}> Download PPT  </button>
                <button 
                onClick={handleDownloadPDF}
                style={{
                    marginTop:"10px",padding:"10px 20px",
                    backgroundColor:"#d9534f",color:"white",
                    border:"none",borderRadius:"6px",
                    cursor:"pointer",
                }}> Download PDF </button>
            </div>
            </div>
    )}
    </div>
  );
}

export default App