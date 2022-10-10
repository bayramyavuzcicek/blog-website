import './topBar.css';

export default function TopBar() {
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
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img src="images/profil2.png" alt="avatar" className='topImg'/>
        <i className="topRightIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
