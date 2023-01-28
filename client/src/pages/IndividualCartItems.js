import { useState } from "react";
const IndividualCartItems = ({item, count, buySameItem, removeSameItem}) => {

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
                onClick={() => buySameItem(item)}
                className="bg-white px-3 py-1 rounded-lg border-2">+</button>
                <span className="text-wishlist-title text-sm">{count}</span>
                <button
                onClick={() => removeSameItem(item)}
                className="bg-white px-3 py-1 rounded-lg border-2">-</button>
            </div>
        </div>
     );
}
 
export default IndividualCartItems;