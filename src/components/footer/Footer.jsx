import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Img_chefHat from "../../assets/images/chef_hat.png";

const footerDeliveryTime = ["Monday - Saturday", "11:00am - 09:00pm", "Sunday - Off Day"];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="6">
              <div className="logo">
                <h2 className=" d-flex align-items-center gap-1 mb-4">
                  <span>
                    <img src={Img_chefHat} alt="logo" className="logo_img_footer" />
                  </span>
                  MasterChef
                </h2>
                <p>
                  MasterChef is based on the principle "Indian food, infused with spices and delicate flavours made from the right ingredients, delights not
                  just the taste buds but that something more".
                </p>
              </div>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__link-title">Delivery Time</h5>

              <ListGroup>
                {footerDeliveryTime.map((item, index) => (
                  <ListGroupItem key={index} className="link__item">
                    {item}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="2" md="4" sm="6">
              <h5 className="footer__link-title">Follow us</h5>

              <ListGroup>
                <ListGroupItem className="link__item">
                  <a href="#" target="_blank" className=" link_hover d-flex align-items-center gap-3">
                    <i className="ri-facebook-circle-line link_hover"></i> Facebook
                  </a>
                </ListGroupItem>
                <ListGroupItem className="link__item">
                  <a href="#" target="_blank" className="link_hover d-flex align-items-center gap-3">
                    <i className="ri-instagram-line link_hover"></i> Instagram
                  </a>
                </ListGroupItem>
                <ListGroupItem className="link__item">
                  <a href="#" target="_blank" className="link_hover d-flex align-items-center gap-3">
                    <i className="ri-youtube-line link_hover"></i> Youtube
                  </a>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__link-title">Contact</h5>

              <ListGroup>
                <ListGroupItem className="link__item">
                  <a className="d-flex align-items-center gap-3 link_hover" target="_blank" href="https://maps.app.goo.gl/2GxjA7c2SHFhGGow9">
                    <i className="ri-map-pin-line"></i> Hotel MasterChef, Tigiria
                  </a>
                </ListGroupItem>

                <ListGroupItem className="link__item d-flex align-items-center gap-3">
                  <a className="d-flex align-items-center gap-3 link_hover" href="mailto:hotelmasterchef1@gmail.com">
                    <i className="ri-mail-line"></i> hotelmasterchef1@gmail.com
                  </a>
                </ListGroupItem>

                <ListGroupItem className="link__item  gap-3">
                  <a className="d-flex align-items-center gap-3 link_hover" href="tel:+918378938837">
                    <i className="ri-phone-line"></i> +91 8378938837
                  </a>
                  <a className="d-flex align-items-center gap-4 link_hover" href="tel:+919130328398">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 9130328398
                  </a>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer__bottom">
        <Container>
          <Row>
            <Col lg="12">
              <p>
                copyright 2022, developed by
                <a style={{ textDecoration: "underline" }} href="https://www.instagram.com/_sahoochinmay/" target="_blank">
                  Sahoochinmay
                </a>
                . All rights reserved
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
