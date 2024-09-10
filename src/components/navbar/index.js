import React from "react"
import Gallery from '../gallery'; 
import MainContent from '../maincontent'; 
import Contact from '../contact'; 
import Writing from '../writing'; 


import './navbar.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Navbar() {
    return (
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/writing">Writing</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          
          <Switch>
            <Route path="/writing">
              <Writing />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <MainContent />
            </Route>
          </Switch>
        </div>
      </Router>
      
    )
}

export default Navbar