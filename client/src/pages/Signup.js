import logo from "../Images/logo.png"
import lock from "../Images/lock.svg"
import User from "../Images/User.svg"
import back_icon from "../Images/back-icon.svg"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const navigate = useNavigate()

    const axiosInstance = axios.create({
        baseURL: "http://localhost:5000"
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(passwordError.length) return
        axiosInstance.post("/api/register", {username, email, password})
            .then(res => {
                console.log(res)
                navigate("/login")
            })
            .catch(error => alert("Error" + error))
    }

    const handlePasswordChange = (event) => {
        const inputPassword = event.target.value;
        setPassword(inputPassword);

        if (inputPassword.length < 8) {
          setPasswordError('Password must be at least 8 characters long');
          return;
        }
    
        if (!/[A-Z]/.test(inputPassword)) {
          setPasswordError('Password must contain at least one uppercase letter');
          return;
        }
    
        if (!/[a-z]/.test(inputPassword)) {
          setPasswordError('Password must contain at least one lowercase letter');
          return;
        }
        setPasswordError('');
    };

    return ( 
        <div>
            <div>
                <button>
                    <img src= {back_icon} alt="logo" />
                </button>
                <img src= {logo}  className="mx-auto my-24" alt="logo" />
            </div>
            <form action="post" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-4 border bg-grayish focus-within:border-black focus-within:border-2">
                        <img src= {User} alt="logo" 
                        className="ml-6"
                        />
                        <input type="username" value={username}
                        className="py-4 px-6  text-xs bg-transparent w-full border-none focus:outline-none"
                        placeholder= "Username" required={true} onChange = {e => setUsername(e.target.value)}/>
                    </div>
                    <div className="flex gap-4 border bg-grayish focus-within:border-black focus-within:border-2">
                        <img src= {User} alt="logo" 
                        className="ml-6"
                        />
                        <input type="email" value={email}
                        className="py-4 px-6  text-xs bg-transparent w-full border-none focus:outline-none"
                        placeholder= "Email" required={true} onChange = {e => setEmail(e.target.value)}/>
                    </div>
                    <div className="flex gap-4 border bg-grayish focus-within:border-black focus-within:border-2">
                        <img src= {lock} alt="logo" 
                        className="ml-6"
                        />
                        <input type="password" 
                        value={password}
                        className="py-4 px-6 text-xs  bg-transparent w-full focus:outline-none"
                        placeholder = "Password" required={true} onChange = {handlePasswordChange}/>
                    </div>
                    {passwordError && <div className="text-red-600 text-sm text-right">{passwordError}</div>}
                </div>
                <div className="text-right mt-4">
                    <span className="uppercase text-xs after:content-['?'] hover:cursor-pointer">forgot password</span>
                </div>
                <input type="submit" 
                className="block uppercase px-24 py-4 mx-auto my-20 bg-btn-black text-white hover:cursor-pointer"
                value={"Sign Up"}/>
            </form>
            <footer className="text-center text-xs">
                <p>Already have an account?</p>
                <Link to={"/signup"}>Sign In</Link>
            </footer>
        </div>
    );
}
 
export default Signup;