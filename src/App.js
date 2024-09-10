import React from 'react'
import Gallery from './components/gallery'
import MainContent from './components/maincontent'
import Contact from './components/contact'
import Writing from './components/writing'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
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
            <Gallery/>
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
  );
}


export default App;
