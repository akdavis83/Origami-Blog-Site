
import Post from "./Post"

const Posts = ({posts}) => {

  return (
    
    <div className="Posts">
        {posts.map(post=> <Post post={post} key={post.id}/>)}
    </div>
  )
}

export default Posts