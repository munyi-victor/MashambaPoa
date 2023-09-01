import {MdEmail} from "react-icons/md";
import {FaFacebook, FaInstagram, FaTwitter, FaTiktok} from "react-icons/fa";
import { useEffect, useState } from "react";

const Contact = () => {
  const [flexDirection, setFlexDirection] = useState("row");
  const [formWidth, setFormWidth] = useState(100);
  const [marginBottom, setMarginBottom] = useState(0);
  const [formMargin, setFormMargin] = useState("0");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 760) {
        setFlexDirection("column");
        setFormWidth(80);
        setMarginBottom(20);
        setFormMargin("0 10%");
      } else {
        setFlexDirection("row");
        setFormWidth(100);
        setMarginBottom(0);
        setFormMargin("0");
      }
    };

    window.addEventListener("resize", handleResize);
    return () =>
    window.removeEventListener("resize", handleResize);
  }, []);

  const formStyle = {
    width:"100%",
    padding:"15px",
    margin:"5px 0",
    color:"#fff",
    backgroundColor:"#262626",
    border:"0",
    outline:"none",
    fontSize:"18px",
    borderRadius:"6px"
  };

  const submitBtn = {
    backgroundColor:"#f4004f",
    color:"#fff",
    border:"none",
    outline:"none",
    borderRadius:"20px",
    padding:"8px 25px",
    fontWeight:"600",
    cursor:"pointer"
  };

  return (
    <div id="contact" style={{textAlign:"center", paddingBottom:"20px", backgroundColor:"#eee", paddingTop:"20px"}}>
      <h1>Contact Us</h1>

      <div style={{textAlign:"center", display:"flex", flexDirection:`${flexDirection}`, justifyContent:"space-around"}}>
        <div className="left" style={{marginTop:"30px", marginBottom:`${marginBottom}px`}}>
          <h5>Call, Text or Whatsapp our official number</h5>
          <p>+254708905136</p>
          <p><i style={{marginRight:"10px"}}><MdEmail/></i>business@mashambapoa.co.ke</p>
          <p style={{marginTop:"40px"}}>Follow us on social media</p>

          <div className="social">
            <a href="/" style={{textDecoration:"none", marginRight:"15px"}} title="Facebook"><i style={{fontSize:"24px"}}><FaFacebook/></i></a>
            <a href="/" style={{textDecoration:"none", marginRight:"15px"}} title="Instagram"><i style={{fontSize:"24px"}}><FaInstagram style={{color:"#f4004f"}}/></i></a>
            <a href="/" style={{textDecoration:"none", marginRight:"15px"}} title="Twitter"><i style={{fontSize:"24px"}}><FaTwitter/></i></a>
            <a href="/" style={{textDecoration:"none", marginRight:"15px"}} title="Tiktok"><i style={{fontSize:"24px"}}><FaTiktok style={{color:"black"}}/></i></a>
          </div>
        </div>

        <div className="right">
          <form action="" style={{width:`${formWidth}%`, margin:`${formMargin}`}}>
            <input type="text" name="Name" placeholder="Enter your name" required style={formStyle}/>
            <input type="email" name="Email" placeholder="Enter you email" required style={formStyle}/>
            <textarea name="Message" rows={4} placeholder="Your message here" required style={formStyle}></textarea>
            <button type="submit" style={submitBtn}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;