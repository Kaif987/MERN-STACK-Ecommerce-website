import hamburgermenu from "../Images/hamburgermenu.svg"
import logo from "../Images/logo.png"
import cart from "../Images/cart.svg"
import him from "../Images/him.png"
import her from "../Images/her.png"
import jewelery from "../Images/jewelery.jpg"
import electronics from "../Images/electronics.jpg"
import home from "../Images/Home.svg"
import search from "../Images/search.svg"
import User from "../Images/User.svg"
import favorite from "../Images/favorite.svg"
import {Link} from "react-router-dom"


const HomePage = () => {
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
            <div className="mt-28 flex gap-4 mb-6">
                <div className="w-full relative">
                    <img src={her} className="w-full bg-cover" alt="female clothing" />
                    <div className="absolute flex justify-center items-center  left-1/2 bottom-2 -translate-x-1/2 -translate-y-1/2 ">
                        <Link to="/products/women's clothing" className="bg-transparent-img text-center py-2 w-40 font-semibold uppercase border border-black">for her</Link>
                    </div>
                </div>
                <div className="w-full relative">
                    <img src={him} className="w-full bg-cover"  alt="male clothing" />
                    <div className="absolute flex justify-center items-center  left-1/2 bottom-2 -translate-x-1/2 -translate-y-1/2 ">
                        <Link to="/products/men's clothing" className="bg-transparent-img text-center py-2 w-40 font-semibold uppercase border border-black">for him</Link>
                    </div>
                </div>
            </div>
            <div className="w-full relative">
                <img src={jewelery} alt="jewelery" />
                <div className="absolute flex justify-center items-center  left-1/2 bottom-1 -translate-x-1/2 -translate-y-1/2 ">
                    <Link to="/products/jewelery" className="text-center py-2 text-2xl font-bold capitalize">Jewellery</Link>
                </div>
            </div>
            <div className="mt-6 relative">
                <img src={electronics} className="" alt="electronics" />
                <div className="absolute flex justify-center items-center  left-1/2 bottom-7 -translate-x-1/2 -translate-y-1/2 ">
                    <Link to="/products/electronics" className="text-center py-2 text-2xl font-bold capitalize ">Electronics</Link>
                </div>
            </div>
            <footer className="fixed left-0 bottom-0 py-6 flex justify-around w-full bg-white">
                <Link to= "/homepage" ><img src={home} alt="home" /></Link >
                <Link to= "/search" ><img src={search} alt="search" /></Link >
                <Link to= "/wishlist" ><img src={favorite} alt="wishlist" /></Link >
                <Link to= "/profile" ><img src={User} alt="User" /></Link >
            </footer>
        </div>
    );
}
 
export default HomePage;