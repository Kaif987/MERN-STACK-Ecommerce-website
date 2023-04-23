import { useWishListContext } from "./useWishListContext";

export default function useWishListAction() {
    const { wishlist, dispatch } = useWishListContext();
    
    const addToWishList = (wishlistItem) => {
        dispatch({ type: "ADD_TO_WISHLIST", payload: wishlistItem });
    };
    
    const removeFromWishList = async (id) => {
        dispatch({ type: "DELETE_FROM_WISHLIST", payload: id });
    };
    
    return { wishlist, addToWishList, removeFromWishList };
}
