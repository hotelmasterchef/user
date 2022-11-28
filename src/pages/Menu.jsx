import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import ProductCard from "../components/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import { useGlobalContext } from "../contextApi/Context";
const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const { foods, menus } = useGlobalContext();
  const [nowFoods, setNowFoods] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("null");
  useEffect(() => {
    setNowFoods([...foods]);
  }, [foods]);
  useEffect(() => {
    if (selectedMenu === "null") setNowFoods([...foods]);
    else setNowFoods([...foods?.filter((f) => f?.menu === selectedMenu)]);
  }, [selectedMenu]);

  const searchedProduct = nowFoods.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <section
      style={{
        marginTop: "80px",
      }}
    >
      <Container>
        <Row>
          <Col lg="6" md="6" sm="6" xs="12">
            <div className="search__widget d-flex align-items-center justify-content-between ">
              <input autoFocus type="text" placeholder="I'm looking for...." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </Col>
          <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
            <div className="sorting__widget text-end">
              <select className="w-50  text-white" onChange={(e) => setSelectedMenu(e.target.value)}>
                <option value="null">All Foods</option>
                {menus?.map((m) => {
                  return <option value={m?._id}>{m?.name}</option>;
                })}
              </select>
            </div>
          </Col>

          {displayPage.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item._id} className="mb-4">
              <ProductCard item={item} />
            </Col>
          ))}

          <div>
            <ReactPaginate pageCount={pageCount} onPageChange={changePage} previousLabel={"Prev"} nextLabel={"Next"} containerClassName=" paginationBttns " />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
