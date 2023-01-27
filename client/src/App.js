import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login"
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import MyWishList from "./pages/MyWishList";

function App() {
  return (
    <div className="App font-montserrat">
      <Routes>
        <Route path="/login" element= {<Login />} />
        <Route path="/signup" element= {<Signup />}/>
        <Route path="/homepage" element= {<HomePage />} />
        <Route path="/products/:category" element= {<Products />} />
        <Route path="/product" element= {<Product />} />
        <Route path="/wishlist" element= {<MyWishList />} />
      </Routes>
    </div>
  );
}

export default App;
