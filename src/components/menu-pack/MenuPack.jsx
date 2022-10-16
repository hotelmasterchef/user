import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

import ProductCard from "../product-card/ProductCard";
import "./menu-pack.css";
import { useGlobalContext } from "../../contextApi/Context";

const MenuPack = () => {
  const [filter, setFilter] = useState({
    name: "Veg",
    idx: 1,
  });
  const [products, setProducts] = useState([]);
  const { menus, foods } = useGlobalContext();
  useEffect(() => {
    if (menus?.length > 0)
      setFilter({
        name: menus[1]?.name,
        idx: 1,
      });
  }, [menus]);

  useEffect(() => {
    if (menus[filter?.idx] !== undefined) {
      let filterFoods = foods?.filter((f) => menus[filter?.idx]?._id === f?.menu);
      setProducts([...filterFoods]);
    }
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

          {products.map((item, itme_idx) => {
            if ([0, 1, 2, 3, 4, 5, 6, 7]?.includes(itme_idx)) {
              return (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                  <ProductCard item={item} />
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    </section>
  );
};

export default MenuPack;
