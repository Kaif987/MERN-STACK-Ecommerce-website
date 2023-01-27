import hamburgermenu from "../Images/hamburgermenu.svg"
import logo from "../Images/logo.png"
import cart from "../Images/cart.svg"
import home from "../Images/Home.svg"
import search from "../Images/search.svg"
import User from "../Images/User.svg"
import favorite from "../Images/favorite.svg"
import {Link} from "react-router-dom"

const MyWishList = () => {
    const dateToday = new Date()
    return ( 
        <div>
            <nav className="absolute left-0 top-0 pt-11 bg-white w-full p-4 flex justify-between shadow-md">
                <button>
                    <img src={hamburgermenu} alt="menu" />
                </button>
                <img src={logo} alt="logo" className="h-5"/>
                <button>
                    <img src={cart} alt="cart" />
                </button>
            </nav>

            <div className="mt-28 ">
                <h1 className="text-2xl text-center">My Wishlist</h1>    
                {`${dateToday.toLocaleString('default', { month: 'long' })} ${dateToday.getFullYear()}`}
            </div>            

            <footer className="fixed left-0 bottom-0 py-6 flex justify-around w-full bg-white">
                <Link to= "/homepage" ><img src={home} alt="home" /></Link >
                <Link to= "/search" ><img src={search} alt="search" /></Link >
                <Link to= "/favorite" ><img src={favorite} alt="favorite" /></Link >
                <Link to= "/profile" ><img src={User} alt="User" /></Link >
            </footer>
        </div>
    );
}
 
export default MyWishList;