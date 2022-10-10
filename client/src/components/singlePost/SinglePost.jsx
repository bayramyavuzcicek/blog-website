import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="images/headerImg2.jpg" alt="singlepost" className='singlePostImg'/>
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <strong>Yavuz</strong></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDescription'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quam perspiciatis quas earum obcaecati corrupti dolorum, 
                libero, excepturi natus qui incidunt! Nihil voluptatem aspernatur 
                voluptate inventore illo dolores sequi dolor?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quam perspiciatis quas earum obcaecati corrupti dolorum, 
                libero, excepturi natus qui incidunt! Nihil voluptatem aspernatur 
                voluptate inventore illo dolores sequi dolor?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quam perspiciatis quas earum obcaecati corrupti dolorum, 
                libero, excepturi natus qui incidunt! Nihil voluptatem aspernatur 
                voluptate inventore illo dolores sequi dolor?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quam perspiciatis quas earum obcaecati corrupti dolorum, 
                libero, excepturi natus qui incidunt! Nihil voluptatem aspernatur 
                voluptate inventore illo dolores sequi dolor?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quam perspiciatis quas earum obcaecati corrupti dolorum, 
                libero, excepturi natus qui incidunt! Nihil voluptatem aspernatur 
                voluptate inventore illo dolores sequi dolor?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quam perspiciatis quas earum obcaecati corrupti dolorum, 
                libero, excepturi natus qui incidunt! Nihil voluptatem aspernatur 
                voluptate inventore illo dolores sequi dolor?
            </p>
        </div>
    </div>
  )
}
