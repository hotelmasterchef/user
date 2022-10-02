import React from "react";
import { Button, Card, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useGlobalContext } from "../contextApi/Context";
import CartProduct from "../components/cart-product/CartProduct";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import map from "../assets/images/map.png";

const Cart = () => {
  const navigate = useNavigate();
  const { cartProduct, setCartProduct, locaitonList, setLocationList } = useGlobalContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const [gstPrice, setGstPrice] = useState(0);
  const [delivery, setDelivery] = useState(20);
  const [itemsDrop, setItemsDrop] = useState(true);
  const [addressDrop, setAddressDrop] = useState(false);
  const [addNew, setAddNew] = useState(false);
  useEffect(() => {
    setTotalPrice(0);
    setDelivery(20);
    let tPN = 0;
    cartProduct?.map((cp) => {
      let c = cp?.quantity * parseInt(cp?.price);
      console.log(c);
      tPN = tPN + c;
    });
    setTotalPrice(tPN);
    if (tPN > 499) setDelivery(0);
  }, [cartProduct]);

  return (
    <Container
      style={{
        marginTop: "80px",
        paddingTop: "0px",
      }}
    >
      <div className="cart_top">
        <h2>My Cart</h2>
      </div>
      <Row>
        <Col sm="8" xs="12">
          <div className="clickable_label" onClick={() => setItemsDrop(!itemsDrop)}>
            <h3>Items({cartProduct.length})</h3>
            <span style={{ transform: itemsDrop ? "rotate(90deg)" : "rotate(-90deg)" }}>
              <i class="ri-play-mini-fill"></i>
            </span>
          </div>
          {itemsDrop ? (
            <>
              {cartProduct.map((data, d_idex) => {
                return <CartProduct data={data} d_idex={d_idex} />;
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
                <>
                  <button
                    className="conntinue_btn"
                    onClick={() => {
                      setItemsDrop(false);
                      setAddressDrop(true);
                    }}
                  >
                    Continue
                  </button>
                </>
              )}
            </>
          ) : null}
          <div className="clickable_label" style={{ marginTop: itemsDrop ? "70px" : "30px" }} onClick={() => setAddressDrop(!addressDrop)}>
            <h3>
              <img src={map} alt="address" style={{ height: "30px" }} />
              &nbsp;Deliver to
            </h3>
            <span style={{ transform: addressDrop ? "rotate(90deg)" : "rotate(-90deg)" }}>
              <i class="ri-play-mini-fill"></i>
            </span>
          </div>
          {addressDrop ? (
            <>
              {locaitonList?.map((l,l_idx) => {
                return (
                  <div className="address_options">
                    <input type="radio" id={l_idx} name="age" value="30" />
                    <label for={l_idx} >{l?.address}</label>
                  </div>
                );
              })}
              <div className="address_options">
                <input type="radio" id="age1" name="age" value="30" />
                <label for="age1">0 - 30</label>
              </div>
              <div className="address_options">
                <input type="radio" id="age2" name="age" value="60" />
                <label for="age2">31 - 60</label>
              </div>
              <div style={{ padding: "0px 20px " }}>
                {addNew ? (
                  <>
                    <span className="cp" onClick={() => setAddNew(false)} style={{ color: "white", float: "right", marginTop: "20px" }}>
                      X
                    </span>
                    <Form style={{ padding: "20px" }}>
                      <FormGroup>
                        <label htmlFor="" style={{ color: "white" }}>
                          Name
                        </label>
                        <input type="text" placeholder="Enter your name" className="address_input" />
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="" style={{ color: "white" }}>
                          Mobile Number
                        </label>
                        <input type="text" placeholder="Enter your Mobile Number" className="address_input" />
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="" style={{ color: "white" }}>
                          Address
                        </label>
                        <textarea placeholder="Enter your full address" className="address_input" />
                      </FormGroup>
                      <Button type="button">Submit</Button>
                    </Form>
                  </>
                ) : (
                  <button
                    style={{
                      padding: "5px",
                      border: "1px solid white",
                      borderRadius: "6px",
                      background: "none",
                      color: "white",
                      margin: "10px 0px 0px 20px",
                    }}
                    type="button"
                    onClick={() => setAddNew(true)}
                  >
                    + Add New
                  </button>
                )}
              </div>
            </>
          ) : null}
        </Col>
        <Col sm="4" xs="12">
          <Card className="p_detail_c">
            <h3 className="title">PRICE DETAILS</h3>
            <hr />
            <table>
              <tr>
                <td> Price ({cartProduct.length} item)</td>
                <td align="right">₹{totalPrice}</td>
              </tr>
              <tr>
                <td>GST</td>
                <td align="right">₹{gstPrice}</td>
              </tr>
              <tr>
                <td>Delivery Charges</td>
                <td align="right">{totalPrice > 499 ? "FREE" : `₹${delivery}`}</td>
              </tr>
            </table>
            <hr />
            <table>
              <tr>
                <td>Total Amount</td>
                <td align="right">₹{totalPrice + delivery}</td>
              </tr>
            </table>
            <hr />
            {totalPrice < 500 && <p className="saving">You will get free delivery if you order above ₹500</p>}
            <button>PLACE ORDER</button>
            <p style={{ marginTop: "20px" }}>Want to order manually ? Please call to bellow mention number.</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
