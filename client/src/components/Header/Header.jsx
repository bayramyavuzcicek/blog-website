import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <div className="headerTitleSm">React & Node</div>
            <div className="headerTitleLg">Blog</div>
        </div>
        <img src="images/headerImg3.jpg" alt="headerImg" className='headerImg'/>
    </div>
  )
}
