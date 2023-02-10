import { useState } from "react"

const useEcommerce = () => {
    const [favorites, setFavorites] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [filter, setFilter] = useState(null)

    const onFilterChange = (item) => {
        setFilter(item)
    }

    const handleToggle = (item) =>{
        if(favorites.includes(item)){
            setFavorites(favorites.filter(i => i !== item))
        }else{
            setFavorites(prev => [...prev, item])
        }
    }

    
    const addToCart = (item) =>{
        setCartItems(prev => [...prev, {item: item, count: 1}])
    }

    const removeFromCart = (item) =>{
        setCartItems(cartItems.filter(i=> i.item !== item ))
    }

    const buySameItem = (item) =>{
        setCartItems(prevCartItemObject =>{
        return prevCartItemObject.map(i =>{
            if(i.item === item){
            return {item: item, count: i.count + 1}
            }  
            return i
        })
        })
    }

    const removeSameItem = (item) =>{
        setCartItems(prevCartItemObject =>{
        return prevCartItemObject.map(i =>{
            if(i.item === item){
            if(i.count > 1){
                return {item: item, count: i.count - 1}
            }else{
                removeFromCart(item)
            }
            }  
            return i
        })
        })
    }
    
    return {favorites, cartItems, handleToggle, addToCart, removeFromCart, buySameItem, removeSameItem, filter, onFilterChange}
}
 
export default useEcommerce;