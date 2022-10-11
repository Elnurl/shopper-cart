// function CreateCart(items) {
//   // const [cart, setCart] = useState([]);
//   return (
//     <Cart
//       key={items.id}
//       id={items.id}
//       name={items.name}
//       price={items.price}
//       image={items.image}
//     />
//   );
// }
// export default function main(props) {
//   // const { name, id, mail } = props;
//   return (
//     <div>
//       {data.map(CreateCart)}
//       {/* <div>
//         <Cart />
//       </div> */}
//     </div>
//   );
// }
import React, { useState } from "react";
import data from "../Data";
// import Shoppingcart from "./cartcompanents/shoppingcart";
import "./main.css";
// import Shoppingcart from "./cartcompanents/shoppingcart";
import selectedProduct from "../companent/cartcompanents/shop_data";

function Cart(product) {
  const [cart, setCart] = useState([]);
  // const [page, setPage] = useState(["products"]);
  const [products] = useState(data);
  // const state = useState(data);
  function addBtn(product) {
    selectedProduct.push(data[`${product.id}`]);
    console.log(selectedProduct);
    // console.log(cart);
    setCart([...cart, product]);
  }
  // function removeBtn() {
  //   selectedProduct = selectedProduct.filter(function (value, index, arr) {
  //     return data[0].id !== props.id;
  //   });
  //   // setArr(selectedProduct);
  // }
  // const renderProducts = () => {};
  return (
    <div className="cart">
      <header>
        <button>Go to Crt({cart.length})</button>
      </header>{" "}
      {/* {page === "products" && renderProducts()} */}
      {products.map((product, indx) => {
        const { name, image, price } = product;
        return (
          <div className="cart_element" key={indx}>
            <div className="img">
              {" "}
              <img src={image} alt=".png" />{" "}
            </div>
            <div>
              {" "}
              <h4>{name}</h4>
              <h2>{price}</h2>
            </div>
            <button onClick={() => addBtn(product)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
