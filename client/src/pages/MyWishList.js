import hamburgermenu from "../Images/hamburgermenu.svg"
import logo from "../Images/logo.png"
import cart from "../Images/cart.svg"
import home from "../Images/Home.svg"
import search from "../Images/search.svg"
import User from "../Images/User.svg"
import favorite from "../Images/favorite.svg"
import {Link} from "react-router-dom"
import WishListItem from "./wishListItem"

const MyWishList = ({favorites, handleToggle, addToCart}) => {
    console.log(favorites)
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
                <h1 className="text-2xl text-center mb-6">My Wishlist</h1>    
                <span className="text-sm ">
                    {`${dateToday.toLocaleString('default', { month: 'long' })} ${dateToday.getFullYear()}`}
                </span>
            </div>
            <div className="flex flex-col mb-20">
                {
                    favorites.map((item,index) =>{
                        return <WishListItem key={index} item={item} addToCart={addToCart} handleToggle={handleToggle}/>
                    })
                }
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