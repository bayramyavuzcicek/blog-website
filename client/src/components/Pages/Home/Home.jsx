import { useEffect,useState } from 'react'
import axios from 'axios'
import Header from '../../Header/Header'
import Posts from '../../posts/Posts'
import SideBar from '../../sideBar/SideBar'
import './home.css'
import { useLocation } from 'react-router-dom'

export default function Home() {

  //Fetchin all posts from database using axios
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  console.log(search)
  useEffect(()=>{
    const fetchPosts = async()=>{
      axios.defaults.baseURL = 'http://localhost:5000/api';
      const res = await axios.get("/posts"+search);
      setPosts(res.data);
    }
    fetchPosts(); 
  },[search])

  
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
