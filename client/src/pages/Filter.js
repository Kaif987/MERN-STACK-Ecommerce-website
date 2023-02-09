import Close from "../Images/Close.svg"
import {useState} from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Filter = () => {

    const [filter ,setFilter] = useState()
    const navigate = useNavigate()
    const onRadioChange = (e) =>{
        setFilter(e.target.value)
    }

    return (
        <div className="relative">
            <div className="flex justify-between">
                <h1 className="font-medium text-2xl">Filter</h1>
                <button onClick={() =>{navigate(-1)}}><img src={Close} alt="minimize button" /></button>
            </div>
            <div className="mt-7 border-b border-b-filter-gray pb-4">
                <h3 className="text-base font-medium">Sort By</h3>
                <form className="mt-4">
                    <div className="flex gap-5">
                        <input type="radio" id="HighToLow" value="HighToLow" className="accent-black" checked= {filter === "HighToLow"} onChange={onRadioChange} />
                        <label htmlFor="HighToLow" >Price: High to Low</label>
                    </div>
                    <div className="flex gap-5">
                        <input type="radio" id="LowToHigh" value="LowToHigh" className="accent-black" checked= {filter === "LowToHigh"} onChange={onRadioChange} />
                        <label htmlFor="LowToHigh">Price: Low To High</label>
                    </div>
                </form>
            </div>
            <div className="mt-16 flex justify-between font-medium">
                <button className="text-btn-black" onClick={() => setFilter(null)} >Clear All</button>
                <button className="border border-black px-5 py-1">Apply</button>
            </div>
        </div>
    )
}

export default Filter