import "./App.css";
// import About from "./About";
// import Home from "./Home";
import Register from "./pages/user/register";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login";
import Home from "./pages/home/home";
import Shoppingcart from "./pages/shoppingcart/shoppingcart";
import Test from "./pages/shoppingcart/test";
// import data from "./Data";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shoppingcart" element={<Shoppingcart />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
