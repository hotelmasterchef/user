import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

import ProductCard from "../product-card/ProductCard";
import { vegFoodProducts, fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts } from "../../assets/fake-data/products";
import "./menu-pack.css";
import { useGlobalContext } from "../../contextApi/Context";

const MenuPack = () => {
  const [filter, setFilter] = useState({
    name: "Veg",
    idx: 0,
  });
  const [products, setProducts] = useState(riceMenuProducts);
  const { menus } = useGlobalContext();
  useEffect(() => {
    if (menus?.length > 0)
      setFilter({
        name: menus[0]?.name,
        idx: 0,
      });
  }, [menus]);

  useEffect(() => {
    if (menus[filter?.idx] !== undefined) setProducts([...menus[filter?.idx]?.food]);
  }, [filter]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h3 className="menu__title">Our Menu Pack</h3>
          </Col>
          <Col lg="12" className="text-center mb-5">
            {menus?.map((m, m_idx) => (
              <button
                className={`filter-btn ${filter?.name === m?.name ? "active__btn" : ""}`}
                onClick={() =>
                  setFilter({
                    name: m?.name,
                    idx: m_idx,
                  })
                }
              >
                {m?.name}
              </button>
            ))}
          </Col>

          {products.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuPack;
