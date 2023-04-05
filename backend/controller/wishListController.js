const WishList = require('../models/wishListItemModel')
const mongoose = require('mongoose')


// get all wishListItems
const getWishList = async (req, res) => {
  const user_id = req.user._id
  const wishList = await WishList.find({user_id}).sort({createdAt: -1})
  res.status(200).json(wishList)
}


const createWishListItem = async (req, res) => {
  const {title, image, price} = req.body

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!image) {
    emptyFields.push('image')
  }
  if(!price) {
    emptyFields.push('price')
  }
  
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const user_id = req.user._id 
    const wishListItem = await WishList.create({title, image, price, user_id})
    res.status(200).json(wishListItem)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a WishList Item
const deleteWishListItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such WishListItem'})
  }

  const wishListItem = await WishList.findOneAndDelete({_id: id})

  if (!wishListItem) {
    return res.status(400).json({error: 'No such WishListItem'})
  }

  res.status(200).json(wishListItem)
}

// update a wishListItem
const updateWishListItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such WishListItem'})
  }

  const wishListItem = await WishList.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!wishListItem) {
    return res.status(400).json({error: 'No such WishListItem'})
  }

  res.status(200).json(wishListItem)
}


module.exports = {
  getWishList,
  createWishListItem,
  deleteWishListItem,
  updateWishListItem
}