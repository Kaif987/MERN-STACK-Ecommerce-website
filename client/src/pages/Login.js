import logo from "../Images/logo.png"
import lock from "../Images/lock.svg"
import User from "../Images/User.svg"
import back_icon from "../Images/back-icon.svg"
import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import useSignup from "../Hooks/useSignup"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {fetchUser, error, isLoading} = useSignup()
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await fetchUser(email, password)
        navigate("/homepage")        
    }        

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
                        <input type="email" value={email}
                        className="py-4 px-6  text-xs bg-transparent w-full border-none focus:outline-none"
                        placeholder= "Email" onChange = {e => setEmail(e.target.value)}/>
                    </div>
                    <div className="flex gap-4 border bg-grayish focus-within:border-black focus-within:border-2">
                        <img src= {lock} alt="logo" 
                        className="ml-6"
                        />
                        <input type="password" 
                        value={password}
                        className="py-4 px-6 text-xs  bg-transparent w-full focus:outline-none"
                        placeholder = "Password" onChange = {e => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="text-right mt-4">
                    <span className="uppercase text-xs after:content-['?'] hover:cursor-pointer">forgot password</span>
                </div>
                <input type="submit" 
                className="block uppercase px-24 py-4 mx-auto my-20 bg-btn-black text-white hover:cursor-pointer"
                value={"Sign in"}/>
            </form>
            <footer className="text-center text-xs">
                <p>Don't have an account?</p>
                <p><span className="uppercase mr-2 font-bold"
                ><Link to={"/signup"}>Sign up</Link></span>using your email address</p>
            </footer>
        </div>
    );
}
 
export default Login;