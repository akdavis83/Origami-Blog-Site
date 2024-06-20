import { useEffect } from "react"
import Posts from "../components/Posts"
import { usePost } from "../context/posts"



const Publications = () => {

  const {posts, fetchPosts} = usePost()
  useEffect(()=>{fetchPosts()}, [])

  return (
    <main className="Main">
    <h1>Publications</h1>

    <Posts posts={posts}/>
  </main>
  )
}

export default Publications