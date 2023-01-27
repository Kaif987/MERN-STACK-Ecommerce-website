import hamburgermenu from "../Images/hamburgermenu.svg"
import logo from "../Images/logo.png"
import cart from "../Images/cart.svg"
import filter from '../Images/filter.svg'
import Product from "./Product" 
import { useState, useEffect, createContext } from "react";
import home from "../Images/Home.svg"
import search from "../Images/search.svg"
import User from "../Images/User.svg"
import favorite from "../Images/favorite.svg"
import { Link, useParams } from "react-router-dom"


const Products = ({favorites, handleToggle}) => {
    const [productsState, setProductsState] = useState([])
    const {category}= useParams()

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products/category/" + category)
            .then(res => res.json())
            .then(data => setProductsState(data))
            .catch(err => {
                console.log(err)
            })
    },[])


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
            <div className="mt-28 flex flex-col gap-2">
                <span className="capitalize text-sm">all products</span>
                <div className="border-2 border-black w-fit py-1 pl-2 pr-3">
                    <button className="flex items-center gap-2"><img src={filter} alt="filter" />
                    <span className="font-medium">Filter</span>
                    </button>
                </div>    
            </div>

            <div className="mt-3 mb-32 grid grid-cols-2 auto-rows-fr">
            {
                productsState && productsState.map(product =>{
                    return <Product key={product.id }
                    product = {product}
                    handleToggle = {handleToggle}
                    isFavorite={favorites.includes(product)}
                    />
                })
            }
            </div>
            <footer className="fixed left-0 bottom-0 py-6 flex justify-around w-full bg-white">
                <Link to= "/homepage" ><img src={home} alt="home" /></Link >
                <Link to= "/search" ><img src={search} alt="search" /></Link >
                <Link to= "/wishlist" ><img src={favorite} alt="favorite" /></Link >
                <Link to= "/profile" ><img src={User} alt="User" /></Link >
            </footer>
        </div>
    );
}
 
export default Products;