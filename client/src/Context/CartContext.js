import {createContext, useReducer, useEffect} from "react"
import { useCartContext } from "../Hooks/useCartContext"
import { useUserContext } from "../Hooks/useUserContext"

export const CartContext = createContext()

const cartReducer = (state, action) =>{
    switch(action.type){
        case "SET_CART": 
            return {cart: action.payload}

        case "ADD_TO_CART":
            return {cart: [action.payload, ...state.cart]}

        case "DELETE_FROM_CART":
            return {cart: state.cart.filter((item) => item._id !== action.payload)}

        case "INCREASE_QUANTITY":
            return {cart: state.cart.map((item) => item._id === action.payload ? {...item, count: item.count + 1} : item)}

        case "DECREASE_QUANTITY":
            return {cart: state.cart.map((item) => item._id === action.payload ? {...item, count: item.count - 1} : item)}
            
        default :
            return state
    }
}

export const CartContextProvider = ({children}) =>{
    const [state , dispatch] = useReducer(cartReducer, {cart: null})

    console.log("CartContext State: ", state)

    const {user} = useUserContext()

    useEffect(() =>{
        if(!user) return

        const fetchCart = async () =>{
            const res = await fetch("http://localhost:5000/api/cart/", {
                headers:{
                    "Authorization": `Bearer ${user.token}` 
                }
                })
                
            const json = await res.json()
            if(res.ok){
                dispatch({type: "SET_CART", payload: json})
            }
        }
        fetchCart()

    },[user, dispatch])

    // useEffect(() =>{
    //     const cart = localStorage.getItem("cart")
    //     if(cart) {
    //         dispatch({type: "LOGIN", payload: JSON.parse(cart)})
    //     }

    // }, [])

    return (
        <CartContext.Provider value = {{...state, dispatch}} >
            {children}
        </CartContext.Provider>
    )
}

