import './register.css'
import {Link} from 'react-router-dom'
export default function Register() {
  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" placeholder='enter your username' className='registerInput' />
        <label>Email</label>
        <input type="text" placeholder='enter your email' className='registerInput' />
        <label>Password</label>
        <input type="text" placeholder='enter your password' className='registerInput' />
        <button className='registerButon'>Register</button>
      </form>
      <button className='loginButon'>
      <Link to="/login" className="link">Login</Link>
      </button>
      
    </div>
  )
}
