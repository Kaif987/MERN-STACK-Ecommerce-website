const WishListItem = ({item, handleToggle, addToCart}) => {
    return ( 
        <div className="bg-grayish px-3 pt-5 mt-4">
            <div className="relative flex gap-2 border-b pb-2">
                <div className="w-24 h-24 overflow-hidden p-2">
                    <img src={item.image}  alt={item.image}
                    className=""
                    />
                </div>
                <div>
                    <span className="text-title text-xs">Aldo</span>
                    <p className="text-sm text-wishlist-title">{item.title}</p>
                    <span className="absolute bottom-3 right-3 font-bold text-red-400">US ${item.price}</span>
                </div>
            </div>
            <div className="flex justify-between py-4">
                <button className="capitalize text-sm hover:text-red-400"
                onClick={() => handleToggle(item)}
                >remove</button>
                <button 
                onClick={() => addToCart(item)}
                className="uppercase border-2 border-black px-6 py-3 text-sm hover:bg-black hover:text-white">Add to Cart</button>
            </div>
        </div>
    );
}
 
export default WishListItem;