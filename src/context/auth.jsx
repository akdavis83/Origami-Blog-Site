import {createContext, useContext, useState } from 'react'
import axios from 'axios';
const AuthContext = createContext()


const URL = 'http://localhost:5000/api/user'
export const AuthProvider = ({children})=>{
    const [isAuth, setIsAuth] = useState(false);



    const login = async(userData)=>{
        try{
            const res = await axios.post(`${URL}/login`, userData)
            sessionStorage.setItem('user', JSON.stringify(res.data));
            sessionStorage.setItem('token', res.data.token)
    
        }catch(err){
            console.log(err)
        }
    }

    const register = async(userData)=>{
        try{

            const res = await axios.post(`${URL}/register`, userData)
            console.log(res);
        }catch(err){
            console.log(err.response.data)
            alert(err.response.data)
        }
    }

    const logout = async(userData)=>{
        const res = await axios.post(`${URL}/logout`, userData)
        sessionStorage.clear()
    }

    return <AuthContext.Provider value={{isAuth, login, register, logout, setIsAuth}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth=()=> useContext(AuthContext) 