import React from 'react'
import './gallery.css'


import NorthernEyes from './northern-eyes.png'
import SolauiBattle from './solaui-battle-pose.png'
import Expedition from './expedition.png'
import Witch from './witch.png'
import IceSerpentAttack from './ice-serpent-attack.png'
import Kiss from './kiss.jpeg'
import NotebookTsuke from './notebook-tsuke.jpeg'
import PowerCouple from './power-couple.JPG'


function Gallery() {
    return( 
      <div>
         <title>Gallery</title>
        <div>
          <h1 className="title"> Gallery </h1>
        </div>
      <div>
            <img src={PowerCouple} className="image" alt="" />
            <img src={NorthernEyes} className="image" alt="Guy with cyan blue eyes" />
            <img src={SolauiBattle} className="image" alt="A red haired woman with a spear"/>
            <img src={Expedition} className="image" alt="People going on an expledition in a snowy mountain landscape" />
            <img src={Witch} className="image" alt="A witch in her workshop" />
            <img src={IceSerpentAttack} className="image" alt="An ice serpent attackign a girl holding a swrod" />
            <img src={Kiss} className="image" alt="A woman kissin a skull of bones" />
            <img src={NotebookTsuke} className="image" alt="A man with twin daggers" />
            
            
        </div>
      </div>
    )
} 

export default Gallery