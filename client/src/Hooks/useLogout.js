import { useUserContext } from "./useUserContext"
import {useNavigate} from "react-router-dom"

export default function useLogout() {
    const {dispatch} = useUserContext()
    const navigate = useNavigate()

    const logout = () =>{
        localStorage.removeItem("user")
        dispatch({type: "LOGOUT"})
        navigate("/login")
    }

    return {logout} 
}
