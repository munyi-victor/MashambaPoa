import logo from "../images/favi.png";
import { useState, useRef, useEffect } from "react";
import {FaTimes, FaBars} from "react-icons/fa";

const Topnav = () => {

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }  

  const menuRef = useRef(null);

  const openMenu = () => {
    menuRef.current.style.left = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.left = "-200px";
  };

  const [displayBar, setDisplayBar] = useState("none");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 760) {
        setDisplayBar("block");
      } else {
        setDisplayBar("none");
      }
    };

    window.addEventListener("resize", handleResize);
    return () =>
    window.removeEventListener("resize", handleResize);
  }, []);

  const topnavStyle = {
      with:"100%",
      height:"20vh",
      backgroundColor:"#111",
      display: "flex",
      justifyContent: "space-evenly"
    };

    const logoStyle = {
      height:"100px",
      width:"200px",
      marginTop:"10px"
    };

    const menuStyle = {
      color: "#fff",
      textDecoration:"none",
      fontSize:"20px"
    };

    const times = {
      display:`${displayBar}`,
      fontSize:"28px",
      borderRadius:"10px",
      border: hover? "1px solid #fff" : "none",
      position:"absolute",
      marginLeft:"120px",
      marginTop:"10px",
      color: hover? "#fff" : "#ccc",
      cursor:"pointer"
    };

  return (
    <div className="top-nav" style={topnavStyle}>
      <FaBars style={{marginTop:"45px", fontSize:"24px", color: "#fff", display:`${displayBar}`, cursor:"pointer"}} className="open-menu" onClick={openMenu}/>

      <div className="our-logo">
        <img src={logo} alt="Our official logo" style={logoStyle}/>
      </div>

      <div className="menu-links" ref={menuRef}>
        <FaTimes  style={times} className="close-menu" onClick={closeMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>

        <ul style={{display:"flex", listStyle:"none", marginTop:"45px", gap:"30px"}}>
          <li><a href="/" style={menuStyle}>Home</a></li>
          <li><a href="#plots" style={menuStyle}>Plots</a></li>
          <li><a href="#about" style={menuStyle}>About Us</a></li>
          <li><a href="#contact" style={menuStyle}>Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Topnav;