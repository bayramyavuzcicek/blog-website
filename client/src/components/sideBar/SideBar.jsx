import './sideBar.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function SideBar() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            axios.defaults.baseURL = 'http://localhost:5000/api';
            const res = await axios.get("/categories");
            setCategories(res.data)
        }
        fetchCategory();
    }, [])




    return (
        <div className='sideBar'>
            <div className="sideBarItem">
                <span className="sideBarTitle">ABOUT ME</span>
                <img src="images/sideBar.jpg" alt="sidebarimg" className='sideBarImg' />
                <p className='sideBarText'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit, velit laudantium aliquid doloremque aperiam aspernatur corrupti quidem eius.
                </p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">CATEGORIES</span>
                <ul className="sideBarList">
                        {categories.map((category) => (
                            <Link to={`/?cat=${category.name}`} className="link">
                            <li className="sideBarListItem">{category.name}</li>
                            </Link>
                        ))}
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
