import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login"
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import Search from './pages/Search'
import MyWishList from "./pages/MyWishList";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile"
import useEcommerce from "./Hooks/useEcommerce";
import { useUserContext } from "./Hooks/useUserContext";

function App() {
  const {favorites, handleToggle } = useEcommerce()
  const {user} = useUserContext()


  return (
    <div className="App font-montserrat">
        <Routes>
          <Route path="/login" element= {user ? <Navigate to="/homepage" /> : <Login />} />
          <Route path="/signup" element= {user ? <Navigate to="/homepage" /> : <Signup />}/>
          <Route path="/homepage" element= {user ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/products/:category" element= {user ? <Products handleToggle={handleToggle} favorites={favorites} /> : <Navigate to="/login" /> } /> 
          <Route path="/product" element= {user ? <Product /> : <Navigate to="/login" />} />
          <Route path="/cart" element= {user ? <Cart /> : <Navigate to="/login" />} />
          <Route path="/wishlist" element= {user ? <MyWishList favorites={favorites} handleToggle={handleToggle} /> : <Navigate to="/login" />} />
          <Route path="/search" element= {user ? <Search /> : <Navigate to="/login" />} />
          <Route path="/profile" element= {user ? <Profile /> : <Navigate to="/login" />} />
          <Route path="*" element={user ? <Navigate to="/homepage" /> : <Navigate to="/login" /> } />
        </Routes>
    </div>
  );
}

export default App;
