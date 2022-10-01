import React from "react";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  return (
    <section
      style={{
        marginTop: "80px",
      }}
    >
      <Container>
        <Row>
          <Col lg="6" sm="12">
            <h2>Contact Us</h2>
            <div className="mt-md-5 mt-3">
              <p className="contact_info">
                <i className="ri-map-pin-line"></i>&nbsp;&nbsp;&nbsp;Hotel MasterChef, Tigiria
              </p>
              <p className="contact_info">
                <i className="ri-mail-line"></i>&nbsp;&nbsp;&nbsp;hotelmasterchef1@gmail.com
              </p>
              <p className="contact_info">
                <i className="ri-phone-line"></i>&nbsp;&nbsp;&nbsp;+91 8378938837
              </p>
            </div>
          </Col>
          <Col lg="6" sm="12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.0474208982555!2d85.5164868!3d20.463245399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18fb4208c5fda9%3A0xe79d145fcadc654b!2sHotel%20Master%20chef!5e0!3m2!1sen!2sin!4v1663646945327!5m2!1sen!2sin"
              className="map_embed"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
        <form action="" style={{ marginTop: "100px" }}>
          <h2 className="text-center mt-5 mb-sm-5 mb-3">Contact Form</h2>
          <Row>
            <Col lg="6" sm="12">
              <input type="text" placeholder="Name" className="contact_form_input" />
            </Col>
            <Col lg="6" sm="12">
              <input type="text" placeholder="Mobile" className="contact_form_input" />
            </Col>
            <Col>
              <textarea rows={7} placeholder="Message..." className="contact_form_input" />
            </Col>
          </Row>
          <button type="button" className="button_p">
            Submit
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
