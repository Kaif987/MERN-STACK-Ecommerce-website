import IndividualCartItems from "./IndividualCartItems";
import Layout from "./Layout";

const Cart = ({cartItems, buySameItem, removeSameItem}) => {

    const calculateSubTotal = () =>{
        return cartItems.reduce((accumulator, item) => accumulator + item.item.price * item.count, 0)
    }

    const calculateDiscount = () =>{
        return cartItems.reduce((accumulator, item) => accumulator + (item.item.price * item.count) * 0.15 , 0)
    }

    
    const calculateVAT = () =>{
        return cartItems.reduce((accumulator, item) => accumulator + (item.item.price * item.count) * 0.13 , 0)
    }

    const calculateTotal = () =>{
        return calculateSubTotal() - calculateDiscount() + calculateVAT() 
    }

    return ( 
        <Layout className="relative">
            <header className=" absolute top-20 left-0 px-2 py-2 bg-btn-black w-full text-center text-xs text-white ">
                <p>Shop for <span className="font-bold"> AED 75 more </span>for free <span className="font-bold"> shipping </span></p>
            </header>
            <div className="mt-32 text-2xl text-center ">
                <h1>My Cart</h1>
            </div>
            <div className="mt-4 flex flex-col gap-3">
                {cartItems.map((item, index) =>{
                    return (
                        <IndividualCartItems key={index} item={item.item} count={item.count} buySameItem= {buySameItem} removeSameItem={removeSameItem} />
                    )
                })}
                <div className="mb-20 bg-grayish p-2 text-sm">
                    <div className="flex justify-between">
                        <span className="after:content-[':'] text-wishlist-title" >Subtotal</span>
                        <span className="font-semibold">{calculateSubTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="after:content-[':'] text-wishlist-title" >Discount</span>
                        <span className="before:content-['-'] font-semibold">{calculateDiscount().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="after:content-[':'] text-wishlist-title" >Vat</span>
                        <span className="font-semibold">{calculateVAT().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="after:content-[':'] text-wishlist-title" >Total</span>
                        <span className="font-semibold">{calculateTotal().toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
 
export default Cart;