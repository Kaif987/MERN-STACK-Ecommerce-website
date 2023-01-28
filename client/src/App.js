import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login"
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import MyWishList from "./pages/MyWishList";
import { useState } from "react";
import Cart from "./pages/Cart";

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

  // type {
  //   item: Object,
  //   count: Number;
  // }[] 

// + === {item: Object count: Number++}[]

  const addToCart = (item) =>{
    setCartItems(prev => [...prev, {item: item, count: 1}])
  }

  const removeFromCart = (item) =>{
    setCartItems(cartItems.filter(i=> i.item !== item ))
  }

  const buySameItem = (item) =>{
    setCartItems(prevCartItemObject =>{
      return prevCartItemObject.map(i =>{
        if(i.item === item){
          return {item: item, count: i.count + 1}
        }  
        return i
      })
    })
  }

  const removeSameItem = (item) =>{
    setCartItems(prevCartItemObject =>{
      return prevCartItemObject.map(i =>{
        if(i.item === item){
          if(i.count > 1){
            return {item: item, count: i.count - 1}
          }else{
            removeFromCart(item)
          }
        }  
        return i
      })
    })
  }

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
