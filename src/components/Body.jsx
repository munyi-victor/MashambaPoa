import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const Body = () => {
  const [hover, setHover] = useState(false);
  const [btnSize, setBtnSize] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 760) {
        setBtnSize(15);
      } else {
        setBtnSize(20);
      }
    };

    window.addEventListener("resize", handleResize);
    return () =>
    window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const exploreBtn = {
    textDecoration:"none",
    color:"#fff",
    fontSize:`${btnSize}px`,
    border: hover? "none" : "1px solid #fff",
    backgroundColor: hover? "#ff004f" : "transparent",
    padding:"10px 25px",
    borderRadius:"30px",
    marginTop:"40px"
  };

  return (
    <div className="body">
      <main>
        <div
          className="tittle"
          style={{ marginBottom: "30px", paddingTop:"60px", color:"black" }}
        >
          <h1>
            Welcome to MashambaPoa
          </h1>
          <p style={{color:"#ccc"}}>
            Your favourite land broker.
          </p>

          <p style={{marginTop:"100px", marginBottom:"30px"}}>
            At MashambaPoa, we have got plots in every part of the country and we are trusted my thousands of clients.<br/>
            We help you meet your land ownership dream!
          </p>
          
          <a href="#plots" style={exploreBtn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>View Plots</a>
        </div>

        <Container className="container" id="plots">
          <h1 style={{color:"#ff004f", borderBottom:"1px solid gray"}}>Plots on Sale</h1>
          <Row className="row">
            <Col className="col1">
              <h1>Muraru</h1>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/prop11.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/prop12.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/prop13.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col className="col1">
              <h1>Meka</h1>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/prop21.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/prop22.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/prop23.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col className="col1">
              <h1>Minuri</h1>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/prop31.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/prop32.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/prop33.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>

        <Button variant="outline-primary" className="mt-4">
          Explore More
        </Button>
      </main>
    </div>
  );
};

export default Body;
