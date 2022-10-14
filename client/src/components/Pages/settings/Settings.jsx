import axios from 'axios'
import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import { useLocation, Link } from 'react-router-dom'
import SideBar from '../../sideBar/SideBar'
import './settings.css'

export default function Settings() {
  const {user, dispatch} = useContext(Context)
  const PF = "http://localhost:5000/images/"
  const [file,setFile] = useState(null);
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [success,setSuccess] = useState(false);
  
  

  const url = "http://localhost:5000/api";
  const handleUpdate = async(e)=>{
    e.preventDefault();
    dispatch({type:"UPDATE_START"})
     const updatedUser = {
         userId: user._id,
         username,email,password
     }
     if(file){
         const data = new FormData();
         const filename=  Date.now() + file.name;
         data.append('name', filename);
         data.append('file', file);
         updatedUser.profilePic = filename;
         try {
             axios.defaults.baseURL=url;
             await axios.post("/upload",data)
             
         } catch (err) {
             
         }
     }
     
     try {
         axios.defaults.baseURL=url;
         const res = await axios.put("/users/"+user._id,updatedUser);
         setSuccess(true)
         dispatch({type:"UPDATE_SUCCESS",payload:res.data})
     }  
     catch (err) {
      dispatch({type:"UPDATE_FAILURE"})
     }
 }

  
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleUpdate}>
            <label>Profile Picture</label>
            <div className="settingsProfilePicture">
                <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt="profilpic" />
                <label htmlFor="fileInput">
                    <i className="settingsProfilePictureIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
            </div>
            <label>Username</label>
            <input type="text" value={username} placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
            <label>Email</label>
            <input type="text" value={email} placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button className='settingsSubmit' type='submit'>Update</button>
            {success && <span style={{color: "green", textAlign:"center", marginTop: "20px"}}>Profile has been updated</span>}
        </form>
      </div>
      <SideBar/>
    </div>
  )
}
