import { useEffect, useState } from "react";

const About = () => {
  const [fontSize, setFontSize] = useState(18);
  const [height, setHeight] = useState(100);
  const [qualityHeight, setQualityHeight] = useState(30);
  const [rowMt, setRowMt] = useState(40);
  const [pMt, setPMt] = useState(15);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 760) {
        setFontSize(14);
        setHeight(125);
        setQualityHeight(45);
        setRowMt(10);
        setPMt(5);
      } else {
        setFontSize(18);
        setHeight(100);
        setQualityHeight(30);
        setRowMt(40);
        setPMt(15);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => 
    window.removeEventListener("resize", handleResize);
  }, []);

  const aboutStyle = {
    height:`${height}vh`,
    width:"100%",
    backgroundColor:"#ff004f",
    color:"#fff",
    display:"flex", 
    flexDirection:"column", 
    alignItems:"center", 
    textAlign:"center",
    marginTop:"30px",
    paddingTop:"30px"
  };
  
  const quality = {
    width:"100%",
    height:`${qualityHeight}vh`,
    backgroundColor:"#eee",
    marginRight:"10px",
    marginLeft:"10px",
    border:"1px solid #111",
    borderRadius:"30px",
    color:"#000",
    padding:"20px 20px"
  };

  return (
    <div id='about' style={aboutStyle}>
      <h1 style={{fontWeight:"600"}}>About Us</h1>
      <p style={{fontWeight:"500", color:"#eee", fontSize: `${fontSize}px`}}>
        As MashambaPoa, we have been offering our services for a long time, hence our top notch customer services, quality services, reliability and many more. We hope that you enjoy our services.
      </p>

      <div className="row1" style={{display:"flex", marginTop:`${rowMt}px`}}>
        <div style={quality}>
          <h3>Trustworthy</h3>
          <p style={{marginTop:`${pMt}px`}}>We keep our trust to our clients to make them feel free dealing with us.</p>
        </div>

        <div style={quality}>
          <h3>Reliability</h3>
          <p style={{marginTop:`${pMt}px`}}>We are a reliable company that is appreciated by clients of any caliber.</p>
        </div>

        <div style={quality}>
          <h3>Authenticity</h3>
          <p style={{marginTop:`${pMt}px`}}>We work with our lawyers to make sure we offer authentic plots.</p>
        </div>
      </div><br/>
      <div className="row2" style={{display:"flex"}}>
        <div style={quality}>
          <h3>Honesty</h3>
          <p style={{marginTop:`${pMt}px`}}>We are honest with our clients and give clear answers to their enquiries.</p>
        </div>
        
        <div style={quality}>
          <h3>Efficiency</h3>
          <p style={{marginTop:`${pMt}px`}}>Our great systems and customer care services are good to ensure proper services to our clients.</p>
        </div>
        
        <div style={quality}>
          <h3>Timeliness</h3>
          <p style={{marginTop:`${pMt}px`}}>We are alays on the line to make sure our clients are served on time.</p>
        </div>
      </div>
    </div>
  );
}

export default About;