import React, { useState, useEffect } from "react";

const CartProduct = ({ data }) => {
  const [productCount, setProductCount] = useState(1);
  const handleRemoveProduct = () => {};
  return <section id="cart_product">
          PRODUCT
        </section>;
};

export default CartProduct;

//   <Grid container>
//     <Grid item xs={3}>
//       <section className="image_section">
//         <img src={data?.img[0]} className="product_img" alt="" />
//         <section className="quantity_section">
//           <button
//             onClick={() => {
//               if (productCount > 1) {
//                 setProductCount(productCount - 1);
//               }
//             }}
//           >
//             -
//           </button>
//           <input type="number" value={productCount} min="1" max="9" />
//           <button
//             onClick={() => {
//               if (productCount <= 9) {
//                 setProductCount(productCount + 1);
//               }
//             }}
//           >
//             +
//           </button>
//         </section>
//       </section>
//     </Grid>
//     <Grid item xs={9}>
//       <p className="title">{data?.title}</p>
//       <p className="seller">Seller:{data?.seller}</p>
//       <p className="detail_price">
//         ₹ {data?.discount}&nbsp;&nbsp;&nbsp;&nbsp;
//         <strike>₹ {data?.price}</strike>
//       </p>
//       <p className="stock">Only {data?.stock} left in stock.</p>
//       <Button className="remove_button" onClick={handleRemoveProduct}>
//         Remove
//       </Button>
//     </Grid>
//   </Grid>
