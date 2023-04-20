import { useState } from 'react'
import { useUserContext } from './useUserContext'


export default function useSignup() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const {dispatch} = useUserContext()

    const fetchUser = async (username, email, password ) =>{
        setLoading(true)
        setError(null)

        const response = await fetch("/api/users/signup", {
            method: "POST",
            headers:{
            "Content-Type": "application/json"
            },
            body: JSON.stringify({username, email, password})
        })

        const json = await response.json()
        (json)

        if(!response.ok){
            setError(json.error)
        }

        if(response.ok){
            localStorage.setItem("user", JSON.stringify({...json}))

            dispatch({type: "REGISTER", payload: json})            

            setLoading(false)
        }
    }

    return {loading, fetchUser, error}
}
