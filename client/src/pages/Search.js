import React from 'react'
import searchIcon from "../Images/search.svg"
import Layout from './Layout'

export default function Search() {
  return (
    <Layout>
        <div className='absolute top-24'>
            <h1>Search</h1>    
            <div className='flex'>
                <img src={searchIcon} alt="" />
                <input type="text" placeholder='Search' />
            </div>
            <ul className='flex justify-evenly'>
                <li>For Her</li>
                <li>For Him</li>
                <li>Jewelery</li>
                <li>Electronics</li>
            </ul>
        </div>
    </Layout>
  )
}
