import {createContext, useReducer, useEffect} from "react"
import { useUserContext } from "../Hooks/useUserContext"

export const WishListContext = createContext()

const wishListReducer = (state, action) =>{
    switch(action.type){
        case "SET_WISHLIST": 
            return {wishlist: action.payload}

        case "ADD_TO_WISHLIST":
            localStorage.setItem("wishlist", JSON.stringify([...state.wishlist, action.payload]))
            return {wishlist: [action.payload, ...state.wishlist]}

        case "DELETE_FROM_WISHLIST":
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist.filter((item) => {
                return item.id != action.payload
            })))
            
            return {wishlist: state.wishlist.filter((item) => {
                return item.id != action.payload
            })}
            
        default :
            return state
    }
}

export const WishListContextProvider = ({children}) =>{
    const [state , dispatch] = useReducer(wishListReducer, {wishlist: []})

    console.log("WishListContext State: ", state)

    const {user} = useUserContext()

    useEffect(() =>{
        if(!user) return

        const fetchWishList = () =>{    
            const wishlist = JSON.parse(localStorage.getItem("wishlist"))

            if(wishlist){
                dispatch({type: "SET_WISHLIST", payload: wishlist})
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

