import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login"
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import Search from './pages/Search'
import MyWishList from "./pages/MyWishList";
import Cart from "./pages/Cart";
import useEcommerce from "./Hooks/useEcommerce";
import { createContext } from "react";
import { useUserContext } from "./Hooks/useUserContext";

export const cartItemContext = createContext()


function App() {
  const {favorites, cartItems, handleToggle, addToCart, removeFromCart, buySameItem, removeSameItem} = useEcommerce()
  const itemsCount = cartItems.reduce((acc, item) => acc + item.count, 0)
  const {user} = useUserContext()


  return (
    <div className="App font-montserrat">
      <cartItemContext.Provider value={itemsCount}>
        <Routes>
          <Route path="/login" element= {user ? <Navigate to="/homepage" /> : <Login />} />
          <Route path="/signup" element= {user ? <Navigate to="/homepage" /> : <Signup />}/>
          <Route path="/homepage" element= {user ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/products/:category" element= {user ? <Products handleToggle={handleToggle} favorites={favorites} /> : <Navigate to="/login" /> } /> 
          <Route path="/product" element= {user ? <Product /> : <Navigate to="/login" />} />
          <Route path="/cart" element= {user ? <Cart cartItems={cartItems} buySameItem={buySameItem} removeSameItem={removeSameItem} /> : <Navigate to="/login" />} />
          <Route path="/wishlist" element= {user ? <MyWishList favorites={favorites} handleToggle={handleToggle} addToCart={addToCart} /> : <Navigate to="/login" />} />
          <Route path="/search" element= {user ? <Search /> : <Navigate to="/login" />} />
        </Routes>
      </cartItemContext.Provider>
    </div>
  );
}

export default App;
