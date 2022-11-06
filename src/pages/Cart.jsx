import React, { useRef, useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useGlobalContext } from "../contextApi/Context";
import CartProduct from "../components/cart-product/CartProduct";
import { useNavigate } from "react-router-dom";
import map from "../assets/images/map.png";
import { useToasts } from "react-toast-notifications";
import { v4 } from "uuid";
import { activeOrdersRef, settings2 } from "../config/firebase";

const Cart = () => {
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const bottomRef = useRef();
  const { cartProduct, setCartProduct, setAlert, setLoading, locaitonList, setLocationList } = useGlobalContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const [gstPrice, setGstPrice] = useState(0);
  const [delivery, setDelivery] = useState(20);
  const [itemsDrop, setItemsDrop] = useState(true);
  const [addressDrop, setAddressDrop] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const [locationName, setLocationName] = useState("");
  const [locationMobile, setLocationMobile] = useState("");
  const [locationAddress, setLocationAddress] = useState("");
  const [addressSelected, setAddressSelected] = useState(null);

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
  const handleAddLocation = () => {
    if (locationName === "" || locationMobile === "" || locationAddress === "") {
      addToast("Please enter all fields.", { appearance: "error" });
      return;
    }
    setLocationList([
      ...locaitonList,
      {
        name: locationName,
        mobile: locationMobile,
        address: locationAddress,
      },
    ]);
    localStorage.setItem(
      "addressList",
      JSON.stringify([
        ...locaitonList,
        {
          name: locationName,
          mobile: locationMobile,
          address: locationAddress,
        },
      ])
    );
    setLocationName("");
    setLocationMobile("");
    setLocationAddress("");
    setAddNew(false);
  };
  const removeAddress = (l, idx) => {
    let nowadrs = locaitonList?.filter((l, lid) => lid !== idx);
    setLocationList([...nowadrs]);
    localStorage.setItem("addressList", JSON.stringify([...nowadrs]));
    if (l?.name === addressSelected?.name) setAddressSelected(null);
  };
  const executeScroll = () => bottomRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const handlePlaceOrder = async () => {
    if (cartProduct?.length === 0) {
      addToast("Your cart is empty.", { appearance: "error" });
      return;
    }
    if (addressSelected === null) {
      addToast("Please select delivery address.", { appearance: "error" });
      return;
    }
    let nowCartProduc = cartProduct;
    nowCartProduc.forEach(function (v) {
      delete v?.image;
    });
    nowCartProduc.forEach(function (v) {
      delete v?.menu;
    });
    let obj = {
      items: cartProduct,
      address: addressSelected,
      totalPrice: totalPrice,
      delivery_charge: delivery,
    };
    let id = v4();
    setLoading(true);
    let acceptOrder = false;
    let arr4 = [];
    settings2
      .get()
      .then((docs4) => {
        docs4.forEach((doc4) => {
          arr4.push(doc4.data());
        });
        console.log(arr4);
        acceptOrder = arr4[0]?.state;
        if (arr4[0]?.state === false) {
          addToast("We are currently not accepting any order! Please try after sometime.", { appearance: "error" });
          setLoading(false);
        } else {
          activeOrdersRef
            .doc(id)
            .set({
              _id: id,
              ...obj,
            })
            .then((docs) => {
              setLoading(false);
              navigate("/menu");
              addToast("Order placed successfully.", { appearance: "success" });
              setTimeout(() => {
                addToast("Please wait! you will get a confirmation call.", { appearance: "success" });
              }, 1000);
              setCartProduct([]);
              setAddressSelected(null);
            })
            .catch((err) => {
              setAlert({
                flag: true,
                type: "error",
                msg: err.message,
              });
              setLoading(false);
            });
        }
      })
      .catch((err) => {
        setAlert({
          flag: true,
          type: "error",
          msg: err.message,
        });
        setLoading(false);
      });
  };
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
          <div ref={bottomRef} className="clickable_label" onClick={() => setItemsDrop(!itemsDrop)}>
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
                      setTimeout(() => {
                        executeScroll();
                      }, 200);
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
              {locaitonList?.map((l, l_idx) => {
                return (
                  <div className="address_options">
                    <div>
                      <input type="radio" id={l_idx} name="age" value={l_idx} onClick={() => setAddressSelected(l)} />
                      <label for={l_idx} style={{ textAlign: "left" }}>
                        {l?.name}, {l?.mobile}
                        <br />
                        {l?.address}
                        <br />
                      </label>
                    </div>
                    <i className="ri-delete-bin-5-line cp" onClick={() => removeAddress(l, l_idx)} style={{ color: "red" }}></i>
                  </div>
                );
              })}
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
                        <input
                          value={locationName}
                          onChange={(e) => setLocationName(e.target.value)}
                          type="text"
                          placeholder="Enter your name"
                          className="address_input"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="" style={{ color: "white" }}>
                          Mobile Number
                        </label>
                        <input
                          type="number"
                          value={locationMobile}
                          onChange={(e) => setLocationMobile(e.target.value)}
                          placeholder="Enter your Mobile Number"
                          className="address_input"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="" style={{ color: "white" }}>
                          Address
                        </label>
                        <textarea
                          value={locationAddress}
                          onChange={(e) => setLocationAddress(e.target.value)}
                          placeholder="Enter your full address"
                          className="address_input"
                        />
                      </FormGroup>
                      <Button type="button" onClick={(e) => handleAddLocation()}>
                        Submit
                      </Button>
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
            <button type="button" onClick={() => handlePlaceOrder()}>
              PLACE ORDER
            </button>
            <p style={{ marginTop: "20px" }}>Want to order manually ? Please call to bellow mention number.</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
