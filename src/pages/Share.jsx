import { useState } from 'react'
import  Posts from '../components/Posts'
import { usePost } from '../context/posts'
import { useNavigate } from 'react-router-dom'


const Share = () => {
  const {posts, addPost} = usePost()
  const [description, setDescription] = useState()
  const navigate = useNavigate()

  const clickHandler = ()=>{
    const post = {description}
    console.log(post)
    addPost(post)
    navigate('/')
  }

  return (
    <div className="Input">
    <div>
      <h1>Share your thoughts...</h1>
      <textarea onChange={e=> setDescription(e.target.value)} value={description} ></textarea>
      <button onClick={clickHandler}>Post</button>
    </div>
    <div>
      <h2>Last 3 post on your wall</h2>
      <Posts posts={posts.slice(-3).reverse()}/>
    </div>
 
    </div>
    )
}

export default Share