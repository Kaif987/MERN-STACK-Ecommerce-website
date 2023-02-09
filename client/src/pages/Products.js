import filter from '../Images/filter.svg'
import Product from "./Product" 
import { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom"
import Layout from "./Layout"


const Products = ({favorites, handleToggle}) => {
    const [productsState, setProductsState] = useState([])
    const {category}= useParams()
    
    useEffect(() =>{
        fetch("https://fakestoreapi.com/products/category/" + category)
            .then(res => res.json())
            .then(data => setProductsState(data))
            .catch(err => {
                console.log(err)
            })
    },[])


    return ( 
        <Layout>
            <div>
                <div className="mt-28 flex flex-col gap-2">
                    <span className="capitalize text-sm">all products</span>
                    <div className="border-2 border-black w-fit py-1 pl-2 pr-3">
                        <Link to={"/filter"} className="flex items-center gap-2"><img src={filter} alt="filter" />
                        <span className="font-medium">Filter</span>
                        </Link>
                    </div>    
                </div>

                <div className="mt-3 mb-32 grid grid-cols-2 auto-rows-fr">
                {
                    productsState && productsState.map(product =>{
                        return <Product key={product.id }
                        product = {product}
                        handleToggle = {handleToggle}
                        isFavorite={favorites.includes(product)}
                        />
                    })
                }
                </div>
            </div>
        </Layout>
    );
}
 
export default Products;