import React from "react";
import NavTabs from "../../components/NavTabs";
import { Col, Row, Form, Button } from "react-bootstrap";


function Contact() {

  return (
    <div className="contact-container">

        
        <Row className="about-Nav" >

          <Col className="justify-content-center">
            <NavTabs />
          </Col>

        </Row>



         <Row>

             

           <Row className="contact-titlejustify-content-center">
          <Col></Col>
           <Col xs={6} className = "title-wrapper">
            <Row className="justify-content-center">
            <h3 className="display-4">Contact</h3>
             </Row>
          </Col>
           <Col></Col>
           </Row>


        </Row>

        <Col md={{ span: 5, offset: 2 }}>
        <Form>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>

            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

            </Form.Row>
            
        <div class="form-group">
        <label for="FormControlMessage">Message</label>
        <textarea class="form-control" id="ControlMessage" rows="3" placeholder="Message"></textarea>
        </div>



           <Button variant="primary" type="submit">
                Submit
            </Button>
            
        </Form>

        </Col>



      </div>

  );
}

export default Contact;