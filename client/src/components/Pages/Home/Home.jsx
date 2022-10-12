import { useEffect,useState } from 'react'
import axios from 'axios'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import SideBar from '../../sideBar/SideBar'
import './home.css'

export default function Home() {

  //Fetchin all posts from database using axios
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async()=>{
      axios.defaults.baseURL = 'http://localhost:5000/api';
      const res = await axios.get("/posts");
      setPosts(res.data);
    }
    fetchPosts(); 
  },[])
  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts}/>
        <SideBar/>
      </div>
    </>

  )
}
