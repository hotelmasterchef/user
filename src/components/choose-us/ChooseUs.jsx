import React from "react";

import { Container, Row, Col } from "reactstrap";
import "./choose-us.css";
import pastaImg from "../../assets/images/pasta.png";

const ChooseUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <img src={pastaImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6">
            <div className="choose__content">
              <h4>Who we are?</h4>
              <h2>Take a look at the benefits we offer you</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis impedit rem neque minus adipisci.</p>
            </div>

            <div className="features mt-4">
              <div className="feature1 d-flex align-items-center gap-5">
                <div className="single__feature">
                  <span>
                    <i className="ri-truck-line"></i>
                  </span>
                  <h6>Free Home Delivery</h6>
                  <p>On order above ₹500.</p>
                </div>

                <div className="single__feature">
                  <span className="feature__icon-two">
                    <i className="ri-money-dollar-circle-line"></i>
                  </span>
                  <h6>Return & Refund</h6>
                  <p>We don't give return or refund.</p>
                </div>
              </div>

              <div className="feature1 mt-3 d-flex align-items-center gap-5">
                <div className="single__feature">
                  <span className="feature__icon-3">
                    <i className="ri-secure-payment-line"></i>
                  </span>
                  <h6>Cash On Delivery</h6>
                  <p>Pay after you get your order.</p>
                </div>

                <div className="single__feature">
                  <span className="feature__icon-4">
                    <i className="ri-24-hours-line"></i>
                  </span>
                  <h6>10 Hours Delivery Support</h6>
                  <p>11 AM to 10 PM delivery support.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
