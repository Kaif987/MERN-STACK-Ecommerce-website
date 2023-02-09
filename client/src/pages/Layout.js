import hamburgermenu from "../Images/hamburgermenu.svg"
import logo from "../Images/logo.png"
import cart from "../Images/cart.svg"
import home from "../Images/Home.svg"
import search from "../Images/search.svg"
import User from "../Images/User.svg"
import favorite from "../Images/favorite.svg"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { cartItemContext } from "../App"

const Layout = ({children}) => {

    const cartItems = useContext(cartItemContext)

    return ( 
        <div>
            <nav className="absolute left-0 top-0 pt-11 bg-white w-full p-4 flex justify-between shadow-md">
                <button>
                    <img src={hamburgermenu} alt="menu" />
                </button>
                <img src={logo} alt="logo" className="h-5"/>
                <Link to={"/cart"}>
                    <img src={cart} alt="cart" className="relative"/>
                    <span className="absolute top-8 right-6 bg-red-500 rounded-3xl text-xs text-white w-4 text-center ">{cartItems}</span>
                </Link>
            </nav>
            {children}
            <footer className="fixed left-0 bottom-0 py-6 flex justify-around w-full bg-white">
                <Link to= "/homepage" ><img src={home} alt="home" /></Link >
                <Link to= "/search" ><img src={search} alt="search" /></Link >
                <Link to= "/wishlist" ><img src={favorite} alt="favorite" /></Link >
                <Link to= "/profile" ><img src={User} alt="User" /></Link >
            </footer>
        </div>
    );
}
 
export default Layout;