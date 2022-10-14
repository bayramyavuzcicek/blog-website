import './register.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
export default function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      axios.defaults.baseURL = "http://localhost:5000/api/auth";
      const res = await axios.post("/register", {
        username,
        email,
        password
      });
      res.data && window.location.replace("/login")
    } catch (err) {
      setError(true);
    }
    
  }



  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder='enter your username'
          className='registerInput'
          onChange={e => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder='enter your email'
          className='registerInput'
          onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder='enter your password'
          className='registerInput'
          onChange={e => setPassword(e.target.value)}
        />
        <button className='registerButon' type='submit'>Register</button>
      </form>
      <button className='loginButon'>
        <Link to="/login" className="link">Login</Link>
      </button>
      {error && <span style={{marginTop:"15px", color:"red"}}>Something went wrong!</span>}
    </div>
  )
}
