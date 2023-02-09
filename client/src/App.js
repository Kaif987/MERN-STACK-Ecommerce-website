import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login"
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import MyWishList from "./pages/MyWishList";
import { useState } from "react";
import Cart from "./pages/Cart";
import useEcommerce from "./Hooks/useEcommerce";

function App() {
  const {favorites, cartItems, handleToggle, addToCart, removeFromCart, buySameItem, removeSameItem} = useEcommerce()
  
  return (
    <div className="App font-montserrat">
      <Routes>
        <Route path="/login" element= {<Login />} />
        <Route path="/signup" element= {<Signup />}/>
        <Route path="/homepage" element= {<HomePage />} />
        <Route path="/products/:category" element= {<Products handleToggle={handleToggle} favorites={favorites} />} />
        <Route path="/product" element= {<Product />} />
        <Route path="/cart" element= {<Cart cartItems={cartItems} buySameItem={buySameItem} removeSameItem={removeSameItem} />} />
        <Route path="/wishlist" element= {<MyWishList favorites={favorites} handleToggle={handleToggle} addToCart={addToCart} />} />
      </Routes>
    </div>
  );
}

export default App;
