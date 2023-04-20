import { useState } from "react"

const useEcommerce = () => {
    const [favorites, setFavorites] = useState([])

    const handleToggle = (item) =>{
        if(favorites.includes(item)){
            setFavorites(favorites.filter(i => i !== item))
        }else{
            setFavorites(prev => [...prev, item])
        }
    }
    
    return {favorites, handleToggle}
}
 
export default useEcommerce;