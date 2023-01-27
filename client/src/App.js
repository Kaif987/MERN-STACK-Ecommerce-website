import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login"
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import MyWishList from "./pages/MyWishList";
import { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([])
  const [cartItems, setCartItems] = useState([])

  const handleToggle = (item) =>{
    if(favorites.includes(item)){
        setFavorites(favorites.filter(i => i !== item))
    }else{
        setFavorites(prev => [...prev, item])
    }
  }

  const addToCart = (item) =>{
    setCartItems(prev => [...prev, item])
  }

  const removeFromCart = (item) =>{
    cartItems.filter(i => i !== item )
  }

  return (
    <div className="App font-montserrat">
      <Routes>
        <Route path="/login" element= {<Login />} />
        <Route path="/signup" element= {<Signup />}/>
        <Route path="/homepage" element= {<HomePage />} />
        <Route path="/products/:category" element= {<Products handleToggle={handleToggle} favorites={favorites} />} />
        <Route path="/product" element= {<Product />} />
        <Route path="/wishlist" element= {<MyWishList favorites={favorites} handleToggle={handleToggle} addToCart={addToCart} />} />
      </Routes>
    </div>
  );
}

export default App;
