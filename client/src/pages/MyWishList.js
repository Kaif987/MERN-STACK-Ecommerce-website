import hamburgermenu from "../Images/hamburgermenu.svg"
import logo from "../Images/logo.png"
import cart from "../Images/cart.svg"
import home from "../Images/Home.svg"
import search from "../Images/search.svg"
import User from "../Images/User.svg"
import favorite from "../Images/favorite.svg"
import {Link} from "react-router-dom"
import WishListItem from "./wishListItem"
import Layout from "./Layout"

const MyWishList = ({favorites, handleToggle, addToCart}) => {
    console.log(favorites)
    const dateToday = new Date()
    return ( 
    <Layout>
        <div>
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
        </div>
    </Layout>
    );
}
 
export default MyWishList;