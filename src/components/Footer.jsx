import logo from "../images/favi.png";
import {FaWhatsapp, FaInstagram, FaFacebook} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import { useState } from "react";

const Footer = () => {
  const footerStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#111",
    color: "#fff",
    marginTop: "0",
    display: "flex",
    justifyContent: "space-evenly"
  };

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }

  return (
    <div style={footerStyle} className="footer">
      <div className="logo">
        <img src={logo} alt='logo' style={{marginTop:"30px"}}/>
      </div>
      <div className="quick-links" style={{marginTop:"10px"}}>
        <h3>Quick Links</h3>
        <ul style={{listStyle:"none"}}>
          <li><a href="#plots" style={{color:hover?"#fff" : "#eee", textDecoration:"none"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Plots on Sale</a></li>
          <li><a href="/" style={{color:hover?"#fff" : "#eee", textDecoration:"none"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Fencing Poles</a></li>
          <li><a href="/" style={{color:hover?"#fff" : "#eee", textDecoration:"none"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Land Scaping</a></li>
          <li><a href="#contact" style={{color:hover?"#fff" : "#eee", textDecoration:"none"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Consultany</a></li>
          <li><a href="/" style={{color:hover?"#fff" : "#eee", textDecoration:"none"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Site Visit</a></li>
        </ul>
      </div>
      <div className="contacts" style={{marginTop:"10px"}}>
        <h3>Contact Us Now</h3>
        <div style={{display: "flex", flexDirection:"column", gap:"10px"}}>
          <a href="/" style={{fontWeight:"500", textDecoration:"none", color: hover? "#fff" : "#eee"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><i style={{marginRight:"10px"}}><FaWhatsapp/></i>+254708905136</a>
          <a href="/" style={{fontWeight:"500", textDecoration:"none", color: hover? "#fff" : "#eee"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><i style={{marginRight:"10px"}}><FaFacebook/></i>Mashamba Poa</a>
          <a href="/" style={{fontWeight:"500", textDecoration:"none", color: hover? "#fff" : "#eee"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><i style={{marginRight:"10px"}}><FaInstagram/></i>mashamba_poa</a>
          <a href="/" style={{fontWeight:"500", textDecoration:"none", color: hover? "#fff" : "#eee"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><i style={{marginRight:"10px"}}><MdEmail/></i>business@mashambapoa.co.ke</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;