import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Main from "../../companent/main";
// import data from "../Data";

export default function home() {
  return (
    <div>
      <div className="homemain">
        <div className="normal">
          <header>
            <ul>
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link to="/register">register</Link>
              </li>
              <li>
                <Link to="/shoppingcart">shopping cart</Link>
              </li>
              <li>
                <Link to="/test">test cart</Link>
              </li>
            </ul>
          </header>
          <main>
            <Main />
          </main>
        </div>
      </div>

      <footer className="footer">
        <div className="container_footer">
          <div className="containet">
            <h2>Want style Ideas and Treats? </h2>
            <div className="mail">
              <input type="mail" placeholder="Enter Email*" />
              <button> sbuscribe</button>
            </div>
            <div className="rows">
              <div className="row_1"></div>
              <h2>Shopper.</h2>
              <ul>
                <li>facebook</li>
                <li>yutube</li>
                <li>twitter</li>
                <li>instagrem</li>
                <li>vk</li>
              </ul>

              <div className="row_2">
                {" "}
                <div>
                  <h4>SUPPORT</h4>
                  <ul>
                    <li>contactus</li>
                    <li>faqs</li>
                    <li>sizeguide</li>
                    <li>shipping</li>
                    <li>returns</li>
                  </ul>
                </div>
                <div>
                  <h4>SHOP</h4>
                  <ul>
                    <li>men</li>
                    <li>women</li>
                    <li>kid</li>
                    <li>shopping</li>
                    <li>discount</li>
                  </ul>
                </div>
                <div>
                  <h4>COMPANY</h4>
                  <ul>
                    <li>our story</li>
                    <li>carrer</li>
                    <li>terms</li>
                    <li>privacy</li>
                    <li>cookies</li>
                  </ul>
                </div>
                <div>
                  <h4>CONTACT</h4>
                  <ul>
                    <li>55454</li>
                    <li>*54545</li>
                    <li>sssgv@sdscsgds.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
