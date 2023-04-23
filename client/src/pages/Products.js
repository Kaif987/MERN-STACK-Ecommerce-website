import filterSvg from '../Images/filter.svg'
import Product from "./Product"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Layout from "./Layout"
import Filter from './Filter';
import { useWishListContext } from '../Hooks/useWishListContext';
import useWishListAction from '../Hooks/useWishListAction';

const Products = () => {
    const { wishlist } = useWishListContext()
    const {addToWishList, removeFromWishList} = useWishListAction()
    const [productsState, setProductsState] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const { category } = useParams()

    const [filterValue, setFilterValue] = useState("")

    const applyFilter = (value) => {
        setFilterValue(value)
    }

    const turnOffFilter = () => {
        setIsVisible(false)
    }

    useEffect(() => {
        if (filterValue) {
            const productStateCopy = [...productsState]
            switch (filterValue) {
                case "LowToHigh":
                    productStateCopy.sort((a, b) => a.price - b.price)
                    break
                case "HighToLow":
                    productStateCopy.sort((a, b) => b.price - a.price)
                    break
                default:
                    break
            }
            setProductsState(productStateCopy)
        }
    }, [filterValue])



    useEffect(() => {

        fetch("https://fakestoreapi.com/products/category/" + category)
            .then(res => res.json())
            .then(data => setProductsState(data))
            .catch(err => {
                console.log(err)
            })
    }, [])

    const toggleWishList = (item) => {
        if(wishlist.some(i => i.id === item.id)){
            removeFromWishList(item.id)
        }else{
            addToWishList(item)
        }
    }

    return (
        <>
            <Filter isVisible={isVisible} turnOffFilter={turnOffFilter} applyFilter={applyFilter} />
            <div className={`${!isVisible ? "block" : "hidden"}`}>
                <Layout>
                    <div>
                        <div className="mt-28 flex flex-col gap-2">
                            <span className="capitalize text-sm">all products</span>
                            <div className="border-2 border-black w-fit py-1 pl-2 pr-3">
                                <button onClick={() => setIsVisible(true)} className="flex items-center gap-2"><img src={filterSvg} alt="filter" />
                                    <span className="font-medium">Filter</span>
                                </button>
                            </div>
                        </div>

                        <div className="mt-3 mb-32 grid grid-cols-2 auto-rows-fr">
                            {
                                productsState && productsState.map(product => {
                                    return <Product key={product.id}
                                        isWishListed={wishlist.some(item => item.id === product.id)}
                                        toggleWishList={toggleWishList}
                                        product={product}
                                    />
                                })
                            }
                        </div>
                    </div>
                </Layout>
            </div>
        </>
    );
}

export default Products;