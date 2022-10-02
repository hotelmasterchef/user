import React from "react";
import { useGlobalContext } from "../../contextApi/Context";
import "./product-card.css";

const ProductCard = (props) => {
  const { name, image, price, _id } = props.item;
  const { cartProduct, setCartProduct } = useGlobalContext();
  return (
    <div className="single__product">
      <div className="product__img">
        <img src={image} alt="" className="w-100 card_food_img" />
      </div>
      <div className="product__content">
        <div className="rating text-center">
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
        </div>

        <h6>{name}</h6>

        <div className=" d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            Price: ₹<span>{price}</span>
          </span>
          <span
            className="shopping__icon"
            onClick={() => {
              let findD = cartProduct?.filter((c) => c?._id === _id);
              if (findD?.length === 0) {
                setCartProduct([...cartProduct, { ...props.item, quantity: 1 }]);
                alert("Item successfully added to cart.");
              } else alert("Item already added to cart.");
            }}
          >
            +<i className="ri-shopping-cart-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
