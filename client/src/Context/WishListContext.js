import {createContext, useReducer, useEffect} from "react"
import { useUserContext } from "../Hooks/useUserContext"

export const WishListContext = createContext()

const wishListReducer = (state, action) =>{
    switch(action.type){
        case "SET_WISHLIST": 
            return {wishlist: action.payload}

        case "ADD_TO_WISHLIST":
            return {wishlist: [action.payload, ...state.wishlist]}

        case "DELETE_FROM_WISHLIST":
            return {wishlist: state.wishlist.filter((item) => item._id !== action.payload)}
            
        default :
            return state
    }
}

export const WishListContextProvider = ({children}) =>{
    const [state , dispatch] = useReducer(wishListReducer, {wishlist: null})

    console.log("WishListContext State: ", state)

    const {user} = useUserContext()

    useEffect(() =>{
        if(!user) return

        const fetchWishList = async () =>{
            const res = await fetch("http://localhost:5000/api/wishlist/", {
                headers:{
                    "Authorization": `Bearer ${user.token}` 
                }
                })
                
            const json = await res.json()
            if(res.ok){
                dispatch({type: "SET_WISHLIST", payload: json})
            }
        }
        
        fetchWishList()

    },[user, dispatch])

    return (
        <WishListContext.Provider value = {{...state, dispatch}} >
            {children}
        </WishListContext.Provider>
    )
}

