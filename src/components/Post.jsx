import blueBird from '../assets/blue-origami-bird.png'

const Post = ({post}) => {
  return (
    <div className="Post">
        <img src={blueBird} alt="Origami" />
        <p className="description">{post.description} </p>
        <div>
            <span>
                <small>
                    Author:
                </small>
                {post.author.username}
            </span>
        </div>
    </div>
  )
}

export default Post