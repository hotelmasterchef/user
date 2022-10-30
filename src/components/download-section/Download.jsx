import React from "react";
import "./download.css";

import appImg from "../../assets/images/app.svg";

import { Container, Row, Col } from "reactstrap";
import androidapk from "../../assets/apk/app-debug.apk";

const Download = () => {
  return (
    <section>
      <Container className="app__container">
        <Row>
          <Col lg="6" md="6">
            <div className="app__img">
              <img src={appImg} alt="" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="app__content">
              <h5>Download our app</h5>
              <h2 className="mb-4">Never Feel Hungry! Download Our Mobile App Order Delicious Food</h2>
              <p>If food is your question, our answer is yes! Choose your favorite dishes from our menu at great prices.</p>

              <div className="app__btns d-flex align-items-center gap-5 mt-4">
                <button className="btn__apple d-flex align-items-center gap-3" onClick={() => alert("We are working on it.")}>
                  <i className="ri-apple-line"></i> Apple Store
                </button>

                <a
                  href={androidapk}
                  className="btn__google d-flex align-items-center gap-3"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <i className="ri-google-play-line"></i>
                  Google Play
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Download;
