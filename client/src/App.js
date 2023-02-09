import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login"
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import MyWishList from "./pages/MyWishList";
import { useState } from "react";
import Cart from "./pages/Cart";
import Filter from "./pages/Filter"
import useEcommerce from "./Hooks/useEcommerce";
import { createContext } from "react";
export const cartItemContext = createContext()

function App() {
  const {favorites, cartItems, handleToggle, addToCart, removeFromCart, buySameItem, removeSameItem} = useEcommerce()
  const itemsCount = cartItems.reduce((acc, item) => acc + item.count, 0)

  return (
    <div className="App font-montserrat">
      <cartItemContext.Provider value={itemsCount}>
        <Routes>
          <Route path="/login" element= {<Login />} />
          <Route path="/signup" element= {<Signup />}/>
          <Route path="/homepage" element= {<HomePage />} />
          <Route path="/products/:category" element= {<Products handleToggle={handleToggle} favorites={favorites} />} />
          <Route path="/product" element= {<Product />} />
          <Route path="/cart" element= {<Cart cartItems={cartItems} buySameItem={buySameItem} removeSameItem={removeSameItem} />} />
          <Route path="/wishlist" element= {<MyWishList favorites={favorites} handleToggle={handleToggle} addToCart={addToCart} />} />
          <Route path="/filter" element= {<Filter />} />
        </Routes>
      </cartItemContext.Provider>
    </div>
  );
}

export default App;
