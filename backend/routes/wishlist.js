const express = require("express")
const router = express.Router()
const checkAuth = require("../middleware/checkAuth")
const {getWishList, createWishListItem, deleteWishListItem, updateWishListItem} = require("../controller/wishListController")


router.use(checkAuth)

router.get("/", getWishList)

router.post("/", createWishListItem)

router.delete("/:id", deleteWishListItem)

router.patch("/:id", updateWishListItem)


module.exports = router