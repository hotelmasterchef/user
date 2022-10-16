import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img_restaurant from "../assets/images/hotel.png";
import Img_owner from "../assets/images/owner.jpeg";

const About = () => {
  return (
    <section
      style={{
        marginTop: "80px",
      }}
    >
      <Container>
        <Row>
          <Col lg="6" sm="12">
            <h1>About Us...</h1>
            <p className="mt-5">
              Since our modest beginnings in 2021 with a little space in TIgiria location, ‘{" "}
              <a
                href="www.hotelmasterchef.in"
                target="_blank"
                style={{
                  fontSize: "20px",
                  color: "#f5b70a",
                }}
              >
                Hotel MasterChef
              </a>
              ’ ‘s development has been enlivened with the energy to cook and serve solid, Indian-roused takeout food. &nbsp;&nbsp;We are hear to provide you
              better restaurant service with online food delivery in your locality. We serve more than 60 types of cuisine with delicacy. We Wel-Come you to our
              restaurant and experience world class services.
            </p>
          </Col>
          <Col lg="6" sm="12" className="d-flex justify-content-center justify-center align-center ">
            <img
              src={Img_restaurant}
              alt="Restaurant"
              className="about_restaurant_img"
              style={{
                width: "90%",
              }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col lg="6" sm="12" className="d-flex justify-content-center justify-center align-center ">
            <img src={Img_owner} alt="Restaurant" className="about_restaurant_img" />
          </Col>
          <Col lg="6" sm="12">
            <p className="mt-5">
              <h1>Hi...</h1>
              My self Bikram Chandara Sahoo,Owner/Manager of Hotel MasterChef. Our vision is to serve you testy and hygienic food with dignity with an
              affordable price. Personally I used to work in many restaurants in various location across the country for 7 conjugative years. With that
              experience I want to provide better restaurant service in our locality.So we are here to provide online food services with an affordable delivery
              price.
            </p>
            <p>With Regards</p>
            <p
              style={{
                fontSize: "20px",
                color: "#f5b70a",
              }}
            >
              Bikram Chandara Sahoo
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
