const Cart = require('../models/cartModel')
const mongoose = require('mongoose')


// get all cartItems
const getCartItems = async (req, res) => {
  const user_id = req.user._id
  const cartItems = await Cart.find({user_id}).sort({createdAt: -1})

  res.status(200).json(cartItems)
}

// // get a single workout
// const getWorkout = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'No such workout'})
//   }

//   const workout = await Workout.findById(id)

//   if (!workout) {
//     return res.status(404).json({error: 'No such workout'})
//   }
  
//   res.status(200).json(workout)
// }


// create new CartItem
const createCartItem = async (req, res) => {
  const {title, image, price, count} = req.body

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
  if(!count) {
    emptyFields.push('count')
  }

  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const user_id = req.user._id 
    const cartItem = await Cart.create({title, image, price, count, user_id})
    res.status(200).json(cartItem)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a cart Item
const deleteCartItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such cartItem'})
  }

  const cartItem = await Cart.findOneAndDelete({_id: id})

  if (!cartItem) {
    return res.status(400).json({error: 'No such cartItem'})
  }

  res.status(200).json(cartItem)
}

// update a cartItem
const updateCartItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such cartItem'})
  }

  const cartItem = await Cart.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!cartItem) {
    return res.status(400).json({error: 'No such cartItem'})
  }

  res.status(200).json(cartItem)
}


module.exports = {
  getCartItems,
  createCartItem,
  deleteCartItem,
  updateCartItem
}