import useCartAction from "../Hooks/useCartAction";

const   IndividualCartItems = ({item}) => {

    const {increaseQuantity, decreaseQuantity, removeFromCart} = useCartAction()

    return ( 
        <div className="h-32 flex bg-grayish p-3 gap-3 ">
            <div className="h-full flex-[2_0_0]  border">
                <img src={item.image} className="border w-full h-full bg-cover" alt="" />
            </div>
            <div className="flex flex-col flex-[6_0_0] justify-between">
                <span className="text-title text-xs">Aldo</span>
                <p className="text-sm font-medium text-wishlist-title">{item.title}</p>
                <span className="font-semibold">US ${item.price}</span>
            </div>
            <div className="flex flex-col flex-[1_0_0] justify-between items-center">
                <button
                onClick={() => increaseQuantity(item)}
                className="bg-white px-3 py-1 rounded-lg border-2">+</button>
                <span className="text-wishlist-title text-sm">{item.count}</span>
                <button
                onClick={() => (item.count > 1) ? decreaseQuantity(item) : removeFromCart(item._id)}
                className="bg-white px-3 py-1 rounded-lg border-2">-</button>
            </div>
        </div>
     );
}
 
export default IndividualCartItems;