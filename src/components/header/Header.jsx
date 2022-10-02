import React, { useRef } from "react";
import "./header.css";
import Img_chefHat from "../../assets/images/chef_hat.png";
import { Container } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contextApi/Context";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "Menu",
    url: "/menu",
  },
  {
    display: "About",
    url: "/about",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef();
  const navigate = useNavigate();
  const { cartProduct } = useGlobalContext();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <span>
                <img src={Img_chefHat} alt="logo" className="logo_img" />
              </span>
              MasterChef
            </h2>
          </div>

          <div className="nav__menu " ref={menuRef}>
            <div className="nav__list__wrapper d-flex align-items-center gap-5">
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index} onClick={menuToggle}>
                    <Link to={item.url}>{item.display}</Link>
                  </li>
                ))}
              </ul>
              <div className="menu__right">
                <div className="custom__search ">
                  <input type="text" placeholder="search item...." />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="cart__icon cp" onClick={() => navigate("/cart")}>
              <i className="ri-shopping-basket-line" style={{color: "#dcd9d9"}}></i>

              <span className="badge" style={{ color: "#fff" }}>
                {cartProduct?.length}
              </span>
            </span>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
