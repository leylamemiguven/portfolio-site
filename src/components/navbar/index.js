import React from "react"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import './navbar.css'


function Navbar() {
    return (
        <Router>
        <div>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/components/writing">Writing</Link></li>
                <li><Link to ="/components/gallery">Gallery</Link></li>
                <li><Link to ="/components/contact">Contact</Link></li>
            </ul>
        </div>
        </Router>
    )
}

export default Navbar