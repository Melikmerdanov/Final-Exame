import React from 'react'
import "./Header.scss"
const Header = () => {
  return (
    <div>
        <div className="navbar">
            <div className="navbar__left">
                <img src="https://preview.colorlib.com/theme/drimo/drimo/img/logo-6.png.webp" alt="" />
            </div>
            <div className="navbar__right">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#service">Service</a>
                    </li>
                    <li>
                        <a href="#news">News</a>
                    </li>
                    <li>
                        <a href="/sign">Sign up</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header