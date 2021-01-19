import React from "react";
import NavTabs from "../NavTabs";
import { Col, Row, Container, Image } from "react-bootstrap";
import photo from "../images/MyPicture.jfif";

function Home() {
  return (




      
    <div className="about-container">

      <Row className="about-Nav" >
        <Col className ="justify-content-center">
          <NavTabs />
        </Col>
      </Row>



      <div id="aboutme">
        

      <Row className="contact-title justify-content-center">
          <Col></Col>
           <Col xs={6} className = "title-wrapper">
            <Row className="justify-content-center">
            <h3 className="display-4">About me</h3>
             </Row>
          </Col>
           <Col></Col>
           </Row>

        <Row>

        <Col md={{ span: 6, offset: 3 }}>
          <Row className="justify-content-center">
          <Col xs={1}>
            <Image className="img" src={photo} alt="Telicia Watson" width="100" height="100" roundedCircle />
            </Col>
          </Row>


          <Row className="about-text">
            <Col></Col>
            <Col xs={9}>
              <p>Hello, my name is Telicia Watson and I have taken on the challenge of coding here UTA Bootcamp.
            I am currently working as a bank teller and have worked in management of customer service for the past 18 plus years.
            I am presuing a career change and hopefully with this certificate it will give me a foot in the door. I'm married with
            3 beautiful daughters. I'm a highly motivated and creative individual with solid multi-tasking skills. Great communicator with
            solid background in customer service ranging from basic cashier to upper management. I am detail oriented and a great problem solver. 
            I will be attending ACC in the Spring of 2021.</p>
            </Col>
            <Col></Col>
          </Row>

          </Col>
                            

        </Row>
    </div>
    </div >

  );
}

export default Home;