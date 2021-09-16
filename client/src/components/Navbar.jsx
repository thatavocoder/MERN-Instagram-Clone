import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="nav-wrapper white">
                    <Link to="/" className="brand-logo left" style={{fontFamily: "Grand Hotel, cursive"}}>Instagram</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/Login">Login</Link></li>
                        <li><Link to="/Signup">Signup</Link></li>
                        <li><Link to="/Profile">Profile</Link></li>
                        <li><Link to="/CreatePost">Create Post</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
