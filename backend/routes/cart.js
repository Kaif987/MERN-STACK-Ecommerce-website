const express = require("express")
const router = express.Router()
const checkAuth = require("../middleware/checkAuth")
const {getCartItems, createCartItem, deleteCartItem, updateCartItem} = require("../controller/cartController")


router.use(checkAuth)

router.get("/", getCartItems)

router.post("/", createCartItem)

router.delete("/:id", deleteCartItem)

router.patch("/:id", updateCartItem)


module.exports = router