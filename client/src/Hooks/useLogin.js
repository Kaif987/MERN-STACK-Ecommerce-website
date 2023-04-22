import React,{ useState} from 'react'
import { useUserContext } from './useUserContext'
import { BASE_URL } from '../Service/helper'

export default function useLogin() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [user, setUser] = useState(false)

    const {dispatch} = useUserContext()

    const fetchUser = async (email, password ) =>{
        setLoading(true)
        setError(null)

        const response = await fetch(`${BASE_URL}/api/users/login`, {
            method: "POST",
            headers:{
            "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }

        if(response.ok){
            localStorage.setItem("user", JSON.stringify({...json}))
            dispatch({type:"LOGIN", payload: json})
            setLoading(false)
        }
    }

    return {loading, fetchUser, error}
}
