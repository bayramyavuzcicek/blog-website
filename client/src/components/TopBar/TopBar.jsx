import './topBar.css';

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="socialMedias">
      <i class="fa-brands fa-facebook socialMediasIcon"></i>
      <i class="fa-brands fa-twitter socialMediasIcon"></i>
      <i class="fa-brands fa-instagram socialMediasIcon"></i>
      <i class="fa-brands fa-pinterest socialMediasIcon"></i>
      </div>
      <div className="menu">
        <ul className='menuItems'>
            <li className="menuItem">HOME</li>
            <li className="menuItem">ABOUT</li>
            <li className="menuItem">CONTACT</li>
            <li className="menuItem">WRITE</li>
            <li className="menuItem">LOGOUT</li>
        </ul>
      </div>
      <div className="profilePic">
        <img 
            src="" 
            alt="avatar" />
      </div>
    </div>
  )
}
