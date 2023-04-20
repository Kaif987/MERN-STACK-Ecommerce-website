import React from 'react'
import useLogout from '../Hooks/useLogout'

export default function Popup({toggle}) {
    const {logout} = useLogout()
  return (
    <>
        <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={toggle}
        ></div>
        <div className='absolute text-center top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 border-2 border-black bg-gray-200 p-4 rounded-sm '>
            <h3>Are you sure you want to Logout?</h3>
            <div className='flex justify-between mt-6'>
                <button onClick={logout} className="border border-black rounded-sm px-2 py-1 text-gray-600 bg-gray-100 hover:border-2 hover:text-black" >Yes</button>
                <button onClick={toggle} className="border border-black rounded-sm px-2 py-1 text-gray-600 bg-gray-100 hover:border-2 hover:text-black" >No</button>
            </div>
        </div>
    </>
  )
}
