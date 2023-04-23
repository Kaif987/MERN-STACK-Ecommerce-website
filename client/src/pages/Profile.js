import React,{useEffect, useState} from 'react'
import Layout from './Layout'
import { useUserContext } from '../Hooks/useUserContext'
import { Link } from 'react-router-dom'
import useLogout from '../Hooks/useLogout'
import "../Style/profile.css"
import Popup from '../Components/Popup'
import { BASE_URL } from '../Service/helper'

export default function Profile() {
    const {user} = useUserContext()
    const {logout} = useLogout()
    const [open, setOpen] = useState(false)
    const [openPopup, setOpenPopup] = useState(false) 
    const [profileData, setProfileData] = useState(null)    

    useEffect(() =>{
        async function fetchProfile(){
            const response = await fetch(`${BASE_URL}/api/profile`, {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email: user.email}),
            })
            

            const {user:User} = await response.json()
            if(response.ok){
                const {username, email} = User
                setProfileData({username, email})
            }
        }
        fetchProfile()
    },[])

  return (
    <Layout>
      <div className="mt-28">
        <div className=" flex flex-col gap-2 pb-3 mb-6 justify-center items-center border-b ">
          <div className="border-4 rounded-full overflow-hidden h-20 w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="32"
              viewBox="0 0 36 32"
              className='w-full h-full fill-current text-gray-500'
            >
              <path
                fill="currentColor"
                d="M.5 31.983a.503.503 0 0 0 .612-.354c1.03-3.843 5.216-4.839 7.718-5.435c.627-.149 1.122-.267 1.444-.406c2.85-1.237 3.779-3.227 4.057-4.679a.5.5 0 0 0-.165-.473c-1.484-1.281-2.736-3.204-3.526-5.416a.492.492 0 0 0-.103-.171c-1.045-1.136-1.645-2.337-1.645-3.294c0-.559.211-.934.686-1.217a.5.5 0 0 0 .243-.408C10.042 5.036 13.67 1.026 18.12 1l.107.007c4.472.062 8.077 4.158 8.206 9.324a.498.498 0 0 0 .178.369c.313.265.459.601.459 1.057c0 .801-.427 1.786-1.201 2.772a.522.522 0 0 0-.084.158c-.8 2.536-2.236 4.775-3.938 6.145a.502.502 0 0 0-.178.483c.278 1.451 1.207 3.44 4.057 4.679c.337.146.86.26 1.523.403c2.477.536 6.622 1.435 7.639 5.232a.5.5 0 0 0 .966-.26c-1.175-4.387-5.871-5.404-8.393-5.95c-.585-.127-1.09-.236-1.336-.344c-1.86-.808-3.006-2.039-3.411-3.665c1.727-1.483 3.172-3.771 3.998-6.337c.877-1.14 1.359-2.314 1.359-3.317c0-.669-.216-1.227-.644-1.663C27.189 4.489 23.19.076 18.227.005l-.149-.002c-4.873.026-8.889 4.323-9.24 9.83c-.626.46-.944 1.105-.944 1.924c0 1.183.669 2.598 1.84 3.896c.809 2.223 2.063 4.176 3.556 5.543c-.403 1.632-1.55 2.867-3.414 3.676c-.241.105-.721.22-1.277.352c-2.541.604-7.269 1.729-8.453 6.147a.5.5 0 0 0 .354.612z"
              />
            </svg>
          </div>
          <span className="text-sm">{user.email}</span>
        </div>
        <div className=''>
            <ul className=''>
                <li className='profile flex px-2 justify-between items-center text-sm  border-b hover:cursor-pointer hover:bg-btn-black hover:text-white focus-within:bg-btn-black focus-within:text-white' onClick={() => setOpen(prev => !prev)}>
                    <div>Profile</div>    
                    <button className='font-medium text-profile-btn text-3xl mr-2 hover:cursor-pointer hover:text-white focus-within:text-white focus:outline-none'>{open ? "-" : "+"}</button>
                </li>                
                <li className={`${open ? "block" : "hidden "} pl-7 text-sm py-3 capitalize`}>Username : {profileData && profileData.username}</li>
                <li className={`${open ? "block" : "hidden "} pl-7 text-sm pb-3 border-b`}>Email : {profileData && profileData.email}</li>
                <li className='text-sm py-3 px-2 border-b hover:bg-btn-black hover:text-white focus-within:bg-btn-black focus-within:text-white'><Link to="/wishlist" className='focus:outline-none'>My Wishlist</Link></li>
                <li className='text-sm py-3 px-2 border-b hover:bg-btn-black hover:text-white focus-within:bg-btn-black focus-within:text-white'><Link to="/cart" className='focus:outline-none'>My Cart</Link></li>
                <li className='text-sm py-3 px-2 border-b hover:bg-btn-black hover:text-white focus-within:bg-btn-black focus-within:text-white' onClick={() => setOpenPopup(true)}><button className='focus:outline-none'>Logout</button></li>
            </ul>
            {openPopup && <Popup toggle={() => setOpenPopup(prev => !prev)} />}
        </div>
      </div>
    </Layout>
  );
}
