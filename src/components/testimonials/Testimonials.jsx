import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./testimonial.css";

import testimonialImg from "../../assets/images/review1.svg";

import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" sm="12" md="12" className="m-auto">
            <div className="slider__wrapper d-flex align-items-center gap-5  ">
              <div className="slider__content w-50">
                <h2 className="mb-4 ps-3">What our customers are saying</h2>
                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        "We really enjoyed the evening at MasterChef. The food was delicious and beautifully presented. The service was excellent.The atmosphere
                        and lighting was exactly what we would expect from a great restaurant."
                      </p>

                      <h6>Partha Priyaranjan Panda</h6>
                      <p>Biriput, Tigiria</p>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        "We had the most perfect dinner last night! Everything was magical, the food, service and overall ambience. Also the manager of the
                        hotel was very friendly and polite."
                      </p>

                      <h6>Bibhuprasad Mohapatra</h6>
                      <p>Nuapatana, Tigiria</p>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        "My wife and I had a most enjoyable experience last night,the food was as usual excellent and the service was exemplary. I was
                        particularly impressed that after I had made a stain on my shirt, one of your staff appeared with a glass of soda water and a napkin to
                        help me clean the shirt."
                      </p>

                      <h6>Sabyasachi Panda</h6>
                      <p>Abhimanpur, Badamba</p>
                    </div>
                  </div>
                </Slider>
              </div>

              <div className="slider__img w-50">
                <img src={testimonialImg} alt="" className="w-100" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
