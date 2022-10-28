import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";

import "./slider.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contextApi/Context";

const HeroSlider = () => {
  const navigate = useNavigate();
  const {banners  } = useGlobalContext()
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section
      style={{
        marginTop: "80px",
      }}
    >
      <Container>
        <Slider {...settings}>
          {banners.map((item) => (
            <div key={item.id}>
              <div className=" heroSlider_wrap slider__wrapper d-flex align-items-center justify-content-between pt-2">
                <div className="slider__content w-50 ps-2">
                  <h2 className="mb-3 ">{item.title}</h2>
                  <p>{item.desc}</p>
                  <button className="btn" onClick={() => navigate("/menu")}>
                    Order Now
                  </button>
                </div>

                <div className="slider__img w-50">
                  <img src={item.image} alt="" className="w-100" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default HeroSlider;
