import './topBar.css';
import { Link } from 'react-router-dom';
export default function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fa-brands fa-facebook topLeftIcon"></i>
        <i className="fa-brands fa-twitter topLeftIcon"></i>
        <i className="fa-brands fa-linkedin topLeftIcon"></i>
        <i className="fa-brands fa-instagram topLeftIcon"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className='link'>HOME</Link>
          </li>
          <li className="topListItem">
          <Link to="/" className='link'>ABOUT</Link>
          </li>
          <li className="topListItem">
          <Link to="/" className='link'>CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className='link'>WRITE</Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img src="images/profil2.png" alt="avatar" className='topImg' />
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link to="/login" className='link'>LOGIN</Link>
              </li>
              <li className='topListItem'>
                <Link to="/register" className='link'>REGISTER</Link>
              </li>


            </ul>

          )
        }

        <i className="topRightIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
