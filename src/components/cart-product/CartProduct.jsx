import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../contextApi/Context";

const CartProduct = ({ data, d_idex }) => {
  const [productCount, setProductCount] = useState(data?.quantity);
  const { removeFromCart, cartProduct, setCartProduct } = useGlobalContext();
  useEffect(() => {
    let nowCartg = cartProduct;
    nowCartg[d_idex] = {
      ...nowCartg[d_idex],
      quantity: productCount,
    };
    setCartProduct([...nowCartg]);
  }, [productCount]);

  return (
    <div className="cp_p">
      <img src={data?.image} className="p_img" alt="food_image" />
      <div className="detail_cp">
        <h6>{data?.name}</h6>
        <h3>₹{data?.price * productCount}</h3>
        <div className="quant_btn">
          <button
            onClick={() => {
              if (productCount > 1) {
                setProductCount(productCount - 1);
              }
            }}
          >
            -
          </button>
          <span>{productCount}</span>
          <button
            onClick={() => {
              if (productCount <= 9) {
                setProductCount(productCount + 1);
              }
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="delte_bt_p">
        <i className="ri-delete-bin-5-line" onClick={() => removeFromCart(data?._id)} style={{ color: "red" }}></i>
      </div>
    </div>
  );
};

export default CartProduct;
