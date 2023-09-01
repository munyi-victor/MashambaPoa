import pic from "../images/me-suit.jpg";

const Team = () => {
  const teamStyle = {
    width:"80%",
    height:"85vh",
    color:"#000",
    textAlign:"center",
    alignItems:"center",
    paddingTop:"20px",
   // backgroundColor:"#eee",
    margin:"0 10%"
  };

  const members = {
    width:"100%",
    margin:"0 10px",
  };

  const memImg = {
    width:"140px",
    height:"140px",
    borderRadius:"50%"
  };

  return (
    <div id="team" style={teamStyle}>
      <h2>Meet Our Amazing Crew</h2>
      <p style={{marginTop:"-10px"}}>Without teamwork, we are nothing!</p>

     <div className="row1" style={{display:"flex", justifyContent:"space-evenly", marginTop:"30px"}}>
       <div className="members" style={members}>
        <img src={pic} alt="" style={memImg}/>
        <p><b>Victor Munyi,</b></p>
        <p style={{marginTop:"-20px"}}>Managing Director.</p>
      </div>

      <div className="members" style={members}>
        <img src={pic} alt="" style={memImg}/>
        <p><b>Victor Munyi,</b></p>
        <p style={{marginTop:"-20px"}}>Managing Director.</p>
      </div>

      <div className="members" style={members}>
        <img src={pic} alt="" style={memImg}/>
        <p><b>Victor Munyi,</b></p>
        <p style={{marginTop:"-20px"}}>Managing Director.</p>
      </div>
    </div>  
  
      <div className="row2" style={{display:"flex", marginTop:"-10px"}}>
        <div className="members" style={members}>
          <img src={pic} alt="" style={memImg}/>
          <p><b>Victor Munyi,</b></p>
          <p style={{marginTop:"-20px"}}>Managing Director.</p>
        </div>

        <div className="members" style={members}>
          <img src={pic} alt="" style={memImg}/>
          <p><b>Victor Munyi,</b></p>
          <p style={{marginTop:"-20px"}}>Managing Director.</p>
        </div>

        <div className="members" style={members}>
          <img src={pic} alt="" style={memImg}/>
          <p><b>Victor Munyi,</b></p>
          <p style={{marginTop:"-20px"}}>Managing Director.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;