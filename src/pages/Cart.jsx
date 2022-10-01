import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { useGlobalContext } from "../contextApi/Context";
import CartProduct from "../components/cart-product/CartProduct";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartProduct, setCartProduct } = useGlobalContext();
  return (
    <Container
      style={{
        marginTop: "80px",
      }}
    >
      <Row>
        <Col sm="7" xs="12">
          <section className="cart_top">
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "500",
              }}
            >
              My Cart({cartProduct.length})
            </h1>
            {/* <section className="right_section">
                <img src={map} alt="" className="map" />
                <p>Deliver to</p>
                <select name="location" id="location_box">
                  <option value="New Delhi - 110054">New Delhi - 110054</option>
                  <option value="Cuttack">Cuttack - 754030</option>
                </select>
              </section> */}
          </section>
          {cartProduct.map((data) => {
            return <CartProduct data={data} />;
          })}
          {cartProduct.length === 0 ? (
            <section className="empty_section">
              <i className="ri-shopping-basket-line" style={{ fontSize: "50px" }}></i>
              <h3>Your Cart is Empty</h3>
              <Button className="shop_button" onClick={() => navigate("/menu")}>
                Check Menu
              </Button>
            </section>
          ) : (
            <Button className="place_order_button">Place Order</Button>
          )}
        </Col>
        <Col sm="4" xs="12">
          <p>details</p>
          {/* <Paper>
              <h1 className="title">PRICE DETAILS</h1>
              <hr />
              <p>
                Price ({cartProduct.length} item)
                <span>₹{totalPrice}</span>
              </p>
              <p>
                Discount
                <span>− ₹{discountPrice}</span>
              </p>
              <p>
                Delivery Charges
                <span>FREE</span>
              </p>
              <hr />
              <p className="total_amount">
                Total Amount
                <span>₹{totalPrice - discountPrice}</span>
              </p>
              <hr />
              <p className="saving">You will save ₹{discountPrice} on this order</p>
            </Paper>
            <section className="security">
              <VerifiedUser className="icon" />
              <p className="secure_text">&nbsp;&nbsp;&nbsp;Safe and Secure Payments.Easy conversion.100% Authentic products.</p>
            </section> */}

          {/* <section className="cart_bottom">
        <p>
          Policies:&nbsp;&nbsp;Returns&nbsp;Policy&nbsp;|&nbsp;Terms&nbsp;of&nbsp;use&nbsp;|&nbsp;Security&nbsp;|&nbsp;Privacy&nbsp;|&nbsp;Infringement
        </p>
        <p>© 20021 QFill.com</p>
        <p>
          Need help? Visit the <span>Help Center</span> or
          <span>Contact Us</span>
        </p>
      </section> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
