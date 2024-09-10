import React from 'react'
import Firfir from './firfir.JPG'
import Mask from './mask-favicon.png'
import './maincontent.css'



function MainContent() {
    return (
        <div className="container">
             <title>Home</title>
            <div className="banner">
            <img src={Mask} className="mask-img" alt="a ceremonial mask with feather coming out from the sides"/>
            <div className="title-text">
                        <p className="centered">Leyla Memiguven</p>
                        <p>Recovering salt and <br/> vinegar chips addict</p> 
                    </div>
            </div>
                    
        <div>
            <div className="AboutSection">
                <h2>About</h2>
                    <p>Hi, I am Leyla. I have God complex. I love world building, creating stories,
                        characters, mythologies, religions and languages.</p> 
                    <p>*</p>
                    <p> I have been working on a book in which the initial idea came to me in a dream. All the pictures you
                        see on this website are my personal hand-drawn illustrations of how I imagined the settings and characters. If I can finish my fantasy book before I eat myself whole, you can
                        find all the updates here.</p>
            </div>
            <img src={Firfir} className="firfir-img" alt="notebooks and illustrations littered on the floor with a cat looking at them"/>
            
        </div>
    </div>

    )
}

export default MainContent