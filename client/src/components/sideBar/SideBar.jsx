import './sideBar.css'

export default function SideBar() {
    return (
        <div className='sideBar'>
            <div className="sideBarItem">
                <span className="sideBarTitle">ABOUT ME</span>
                <img src="images/sideBar.jpg" alt="sidebarimg" className='sideBarImg'/>
                <p className='sideBarText'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Suscipit, velit laudantium aliquid doloremque aperiam aspernatur corrupti quidem eius.
                </p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">CATEGORIES</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">Life</li>
                    <li className="sideBarListItem">Music</li>
                    <li className="sideBarListItem">Style</li>
                    <li className="sideBarListItem">Sport</li>
                    <li className="sideBarListItem">Tech</li>
                    <li className="sideBarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">FOLLOW US</span>
                <div className="sideBarSocial">
                <i className="fa-brands fa-facebook sideBarSocialIcon"></i>
                <i className="fa-brands fa-twitter sideBarSocialIcon"></i>
                <i className="fa-brands fa-linkedin sideBarSocialIcon"></i>
                <i className="fa-brands fa-instagram sideBarSocialIcon"></i>
                </div>
            </div>
        </div>
    )
}
