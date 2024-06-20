import {createContext, useContext, useState } from 'react'
import axios from 'axios';
const PostContext = createContext()


const URL = 'http://localhost:5000/api/origami'
export const PostProvider = ({children})=>{
    const [posts, setPosts] = useState([]);


    const fetchPosts=async()=>{
        try{

            const res = await axios.get(URL)
            setPosts(res.data)
  
        }catch(err){
            console.log(err)
        }
    }


    const addPost = async(data)=>{
        try{

            const res = await axios.post(URL, data, {headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
            if(res.data){
                setPosts([res.data, ...posts])
                fetchPosts();
                const currentUser  = JSON.parse(sessionStorage.getItem('user'))
             
                currentUser.posts.push(res.data)
                console.log(currentUser)
                
                sessionStorage.setItem('user', JSON.stringify(currentUser))
            }
        }catch(err){
            console.log(err)
        }

    }
 

    return <PostContext.Provider value={{posts, fetchPosts, addPost}}>
        {children}
    </PostContext.Provider>
}

export const usePost=()=> useContext(PostContext) 