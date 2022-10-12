import './post.css'

export default function Post({post}) {
  return (
    <div className='post'>
      <img src="images/headerImg.jpg" alt="postImg" className='postImg'/>
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map(category=>(
            <span className="postCategory">{category}</span>
          ))}
            
        </div>
        <span className="postTitle">
            {post.title}
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        {post.description}
      </p>
    </div>
  )
}
