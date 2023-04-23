import WishListItem from "./wishListItem"
import Layout from "./Layout"
import {useWishListContext} from "../Hooks/useWishListContext"

const MyWishList = () => {
    const dateToday = new Date()
    const {wishlist} = useWishListContext()

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
                    wishlist.map((item,index) =>{
                        return <WishListItem key={index} item={item} />
                    })
                }
            </div>            
        </div>
    </Layout>
    );
}
 
export default MyWishList;