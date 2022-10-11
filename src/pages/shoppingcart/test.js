import React, { useState, setState } from "react";
import selectedProduct from "../../companent/cartcompanents/shop_data";
import data from "../../Data";
// import SelectedCart from "./selectedCart";
import "./shoppingcart.css";
// import main, { cart } from "../main";
// import data from "../../Data";
// import Cart from "../main";
// import { useState } from "react";
// function createShopCart(kart) {
//   return (
//     <SelectedCart
//       key={kart.id}
//       id={kart.id}
//       name={kart.name}
//       price={kart.price}
//       image={kart.image}
//     />
//   );
// }

export default function Shoppingcart() {
  // const [arr, setArr] = useState([]);
  const [selproducts, setSelproducts] = useState(selectedProduct);
  const unique = [...new Set(selproducts)];

  const lookup = selproducts.reduce((a, e) => {
    a[e.id] = (a[e.id] || 0) + 1;
    return a;
  }, {});
  const [count, setCount] = useState(lookup);
  const [price, setPrice] = useState(
    selproducts.reduce((sum, object) => {
      return sum + object.price;
    }, 0)
  );

  function Incraese(items) {
    let c = count;
    c[items.id] += 1;

    setCount(c);
    setPrice(price + items.price);
    console.log(items.price);
    // setSelproducts(selproducts.push(data[`${product.id}`]));
  }
  function Decrease(items, e) {
    let c = count;
    c[items.id] -= 1;
    console.log(e.target.disabled);

    setCount(c);

    setPrice(price - items.price);
  }

  // function remvBtn(items) {
  //   setSelproducts(selproducts.filter((itemss) => itemss !== items));
  function remvBtn(items) {
    setSelproducts(selproducts.filter((itemss) => itemss !== items));

    // const lookup = selproducts.reduce((a, e) => {
    //   a[e.id] = (a[e.id] || 0) + 1;
    //   return a;
    // }, {});
    setPrice(price - items.price * lookup[`${items.id}`]);
    // console.log(selproducts.filter((e) => lookup[e.id]));
    //console.log(lookup[`${items.id}`]);
    //setCount(lookup[`${items.id}`]);
    // console.log(selproducts.length);
    // console.log(selproducts.indexOf(items));

    // console.log(arr);
  }

  // const [items, setItems] = useState(selectedProduct);
  // const removeItem = (index) => {
  //   console.log(index);
  //   return (index) => {
  //     console.log(items);
  //     selectedProduct = items.filter(function (value, index, arr) {
  //       return data[` ${value}`].id !== props.id;
  //     });
  //     setItems(selectedProduct);
  //     console.log(items);
  //   };
  //   // setItems();
  // };
  // function removeBtn() {
  //   selectedProduct = selectedProduct.filter(function (value, index, arr) {
  //     return data[` ${value}`].id !== props.id;
  //   });
  //   // setArr(selectedProduct);

  // }
  if (!(selectedProduct == 0)) {
    return (
      <div className="shopcart">
        <div>
          <h1 className="h1">Shopping Cart {}</h1>
          <div className="selected">
            {/* {items.map(createShopCart)} */}
            {/* {selproducts.map((items, inx) => {
              const { id, image, name, price } = items; */}
            {unique.map((items, inx, arr) => {
              let c = { 0: 1 };
              console.log(c[0]);

              const { id, image, name, price } = items;
              let a = price;
              return (
                <div key={inx} className="kart">
                  {" "}
                  <div className="img">
                    {" "}
                    <img src={image} alt=".png" />
                    <div>
                      <h4>{name}</h4>
                      <div className="numItem">
                        {" "}
                        <button
                          disabled={count[id] == 0 ? true : false}
                          onClick={(e) => Decrease(items, e)}
                        >
                          {"<"}
                        </button>
                        {count[id]}
                        <button onClick={() => Incraese(items)}>{">"}</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4>{price}</h4>{" "}
                    <button
                      className="bttn"
                      onClick={() => {
                        remvBtn(items);
                      }}
                    >
                      {"X  "}Remove
                    </button>
                  </div>
                </div>
              );
            })}
            {/* <button onClick={removeItem}>remove</button>{" "} */}
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="cupon">
            <div className="cupon1">
              {" "}
              <h4>Coupon code:</h4>
              <input type="text" placeholder="  Enter cupon code*"></input>
              <button>Apply</button>
            </div>
            <div className="btn">
              <button type="button"> Update Cart</button>
            </div>
          </div>
        </div>

        <div className="costrow">
          {" "}
          <div className="Total">
            <div className="subtotal">
              Subtotal
              <p>
                {/* {selproducts.reduce((sum, object) => {
                  return sum + object.price;
                }, 0)} */}
                {price}$
              </p>
            </div>
            <div className="tax">
              Tax
              <p>00.00$</p>
            </div>
            <div className="total">
              <h3>Total</h3>
              <p>{price}$</p>
            </div>
            <p className="p">Shipping cost calculated at Checkout *</p>
          </div>
          <button>Proceed to Checkout</button>
          <div className="coun">
            {" "}
            <a href="/"> {`< `}Continue Shopping</a>
          </div>
        </div>
      </div>
    );
  } else if (selectedProduct == 0) {
    return (
      <div className="empty">
        <img
          className="emping"
          src="https://www.svgrepo.com/show/17356/empty-cart.svg"
          alt="Cart Empty Image "
        />
        <div className="coment">
          {" "}
          <h4>Your cart is empty! </h4>
          <a href="/">Go to Shopping</a>
        </div>
      </div>
    );
  }
}
