const express = require("express")
const router = express.Router()
const checkAuth = require("../middleware/checkAuth")
const {getWishListItem, createWishListItem, deleteWishListItem, updateWishListItem} = require("../controller/wishListController")


router.use(checkAuth)

router.get("/", getWishListItem)

router.post("/", createWishListItem)

router.delete("/:id", deleteWishListItem)

router.patch("/:id", updateWishListItem)


module.exports = router