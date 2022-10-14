import './singlePost.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../context/Context';
export default function SinglePost() {
    const PF = "http://localhost:5000/images/";
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    const [post, setPost] = useState({});
    const { user } = useContext(Context)
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        axios.defaults.baseURL = 'http://localhost:5000/api';
        const fetchPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.description)
        }
        fetchPost();
    }, [path])

    const handleDelete = async () => {
        if (post.username === user.username) {
            try {
                axios.defaults.baseURL = "http://localhost:5000/api";
                const res = await axios.delete("/posts/" + path, { data: { username: user.username } });
                window.location.replace("/");
            } catch (err) {
                console.log(err)
            }
        }
    }

    const handleUpdate = async (e)=>{
        try {
            axios.defaults.baseURL = "http://localhost:5000/api";
            const res = await axios.put("/posts/" + path, 
            { 
                  
                    username: user.username,
                    title: title,
                    description:desc 
                 
            });
            setUpdateMode(false);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                {post.photo && (
                    <img src={PF + post.photo} alt="singlepost" className='singlePostImg' />
                )}
                {
                    updateMode ? 
                    <>
                        <input type="text" className='singlePostTitleInput' value={title} autoFocus onChange={e=>setTitle(e.target.value)}/>
                       
                    </>
                    
                    :

                        (
                            <h1 className="singlePostTitle">
                                {title}
                                {post.username === user?.username && (
                                    <div className="singlePostEdit">
                                        <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                                        <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
                                        
                                        
                                    </div>
                                )}
                            </h1>

                        )
                }


                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <strong><Link to={`/?user=${post.username}`} className="link">{post.username}</Link></strong></span>
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {
                    updateMode ? <textarea className='singlePostDescriptionInput' value={desc} onChange={e=>setDesc(e.target.value)}></textarea> :

                        (
                            <p className='singlePostDescription'>
                                {desc}
                            </p>
                        )
                }

{updateMode && <button className="singlePostButton" onClick={handleUpdate}>Update</button>}
                




            </div>
        </div>
    )
}
