import { WishListContext } from '../Context/WishListContext'
import { useContext } from 'react'

export const useWishListContext = () => {
  const context = useContext(WishListContext)

  if (!context) {
    throw Error('useWishListContext must be used inside an WishListContextProvider')
  }

  return context
}