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
          <h1 classNameName="title"> Gallery </h1>
        </div>
      <div>
            <img src={PowerCouple} classNameName="image" alt="an illustration of a woman and a man power posing side to side next to a notebook" />
            <img src={NorthernEyes} classNameName="image" alt="Guy with cyan blue eyes" />
            <img src={SolauiBattle} classNameName="image" alt="A red haired woman with a spear"/>
            <img src={Expedition} classNameName="image" alt="People going on an expledition in a snowy mountain landscape" />
            <img src={Witch} classNameName="image" alt="A witch in her workshop" />
            <img src={IceSerpentAttack} classNameName="image" alt="An ice serpent attackign a girl holding a swrod" />
            <img src={Kiss} classNameName="image" alt="A woman kissin a skull of bones" />
            <img src={NotebookTsuke} classNameName="image" alt="A man with twin daggers" />
            
            
        </div>
      </div>
    )
} 

export default Gallery