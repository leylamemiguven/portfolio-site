import React from 'react'
import './gallery.css'


import NorthernEyes from './northern-eyes.png'
import SolauiBattle from './solaui-battle-pose.png'
import Expedition from './expedition.png'
import Witch from './witch.png'
import IceSerpentAttack from './ice-serpent-attack.png'
import Kiss from './kiss.jpeg'
import NotebookTsuke from './notebook-tsuke.jpeg'
import MessyWorkspace from './messy-workspace.png'
import PowerCouple from './power-couple.JPG'


function Gallery() {
    return( 
      <div>
         <title>Gallery</title>
        <div>
          {/* <img src={MessyWorkspace} className="yamuk" /> */}
          <h1 className="title"> Gallery </h1>
        </div>
      <div>
            <img src={PowerCouple} className="image" />
            <img src={NorthernEyes} className="image" />
            <img src={SolauiBattle} className="image" />
            <img src={Expedition} className="image" />
            <img src={Witch} className="image" />
            <img src={IceSerpentAttack} className="image" />
            <img src={Kiss} className="image" />
            <img src={NotebookTsuke} className="image" />
            
            
        </div>
      </div>
    )
} 

export default Gallery