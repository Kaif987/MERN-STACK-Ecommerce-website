import { useWishListContext } from "./useWishListContext";
import { useUserContext } from "./useUserContext";

export default function useWishListAction() {
    const {user} = useUserContext()
    const { wishlist, dispatch } = useWishListContext();
    
    const addToWishList = async (title, image, price) => {
        const response = await fetch(`http://localhost:5000/api/wishlist/`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${user.token}`
            },
            body: JSON.stringify({title, image, price})
        })
        console.log("addToWishList: ", title, image, price)
        console.log(response)
        const json = await response.json()

        if(response.ok){
            dispatch({ type: "ADD_TO_WISHLIST", payload: json });
        }
    };
    
    const deleteFromWishList = async (id) => {
        console.log("deleteFromWishList: ", id)
        const response = await fetch(`/api/wishlist/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })

        if(response.ok){
            dispatch({ type: "DELETE_FROM_WISHLIST", payload: id });
        }
    };
    
    return { wishlist, addToWishList, deleteFromWishList };
}
