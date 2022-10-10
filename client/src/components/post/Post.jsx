import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img src="images/headerImg.jpg" alt="postImg" className='postImg'/>
      <div className="postInfo">
        <div className="postCats">
            <span className="postCategory">Music</span>
            <span className="postCategory">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquam enim vel vitae magnam maxime aut vero facere sequi nesciunt fuga, 
        maiores doloremque, veritatis hic assumenda quibusdam, dolorum ducimus exercitationem dolores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquam enim vel vitae magnam maxime aut vero facere sequi nesciunt fuga, 
        maiores doloremque, veritatis hic assumenda quibusdam, dolorum ducimus exercitationem dolores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquam enim vel vitae magnam maxime aut vero facere sequi nesciunt fuga, 
        maiores doloremque, veritatis hic assumenda quibusdam, dolorum ducimus exercitationem dolores.
      </p>
    </div>
  )
}
