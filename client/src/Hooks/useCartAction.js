import { useCartContext } from './useCartContext'
import { useUserContext } from './useUserContext'
import { BASE_URL } from '../Service/helper'

export default function useCartAction() {
    const { dispatch } = useCartContext()
    const {user} = useUserContext()   

    const addToCart = async (item) => {
        const response = await fetch(`${BASE_URL}/api/cart/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${user.token}`
                },
                body: JSON.stringify({...item, count: 1})
            })
        const json = await response.json()
        if(response.ok){
            dispatch({ type: 'ADD_TO_CART', payload: json })
        }
    }
    
    const removeFromCart = (id) => {
        fetch(`${BASE_URL}/api/cart/${id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${user.token}`
                }
            })

        dispatch({ type: 'DELETE_FROM_CART', payload: id })
    }
    
    const increaseQuantity = (item) => {
        fetch(`${BASE_URL}/api/cart/${item._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
                },
                body: JSON.stringify( {...item, count: item.count + 1})
            })

        dispatch({ type: 'INCREASE_QUANTITY', payload: item._id })
    }
    
    const decreaseQuantity = (item) => {
        fetch(`${BASE_URL}/api/cart/${item._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
                },
                
                body: JSON.stringify( {...item, count: item.count - 1})
            })

        dispatch({ type: 'DECREASE_QUANTITY', payload: item._id })
    }
    
    // const clearCart = () => {
    //     dispatch({ type: 'CLEAR_CART' })
    // }
    
    return {
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        // clearCart,
    }
}
