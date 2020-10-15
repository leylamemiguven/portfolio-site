import React, {Component} from "react"
import WritingImg from './writing_img.JPG'
import './writing.css'
import Prologue from "../prologue"



class Writing extends Component {
    state = {
        show: false
    }
    
    toggleShow = () => {
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        })
    }
    
    render() {
        return (
                <div>
                <head>
                    <title>Writing</title>
                </head>

            <div className="currentWork">
                <h2>What I am Currently Working On</h2>
                <p> I am working on a dark fantasy novel titled 'Army of Feathers' which I intend to be the first of a three book triology. Here is a little synopsis</p>
                <div className="synopsis">
                {/* <p>*</p> */}
                <p>In the year 1300 the Ubreshi people lose everything. A proud nation of warriors
                    now enslaved by the Etherium Empire, made to mine their once sacred resource,
                    Ea’s tears as they called it, an ice that exists as a byproduct of the ice-serpents, 
                    when melted, it can heal even the most deadly diseases. Hoping to restore balance 
                    from the chaos caused by an outbreak of the mysterious Red Plague, the Etherians 
                    conquered Ubresh in order to use the healing ice for themselves. The whole 
                    continent of Alakatsia was about to collapse from the unexpected eruption of the 
                    Red Plague, the land of Ubresh became a coveted possession of Etherians from that 
                    point onwards, reliant on it for its ice.</p>

                    <p>The year 522 AEC, exactly 522 years after the Etherian conquest of Ubresh, the Etherians 
                        have enlarged their territories to Ignis and Kandor. As Vicereine of Ubresh, Princess 
                        Reiranell IV Etherium (Reira), monitors the ice-mining in the North where Ubreshis 
                        are worked day and night extracting their precious Ea’s tears which is now widely known 
                        as Etherian Ice. Thinking ten steps ahead in order to maintain her rule over the Ubreshi, 
                        Reira employs cunning tactics and mind games when conflicts  arise, there is no secret 
                        to how she always manages to outplay everyone. </p>
                    
                    <p>In the days of civil unrest where the imperial family is the target for assassinations and kidnappings, Reira’s own imperial soldiers, the Arzenals kidnap her, taking her into the desolate mountains where she tries to escape captivity almost freezing to death before being found by a rogue clan. She wakes up in a hidden cavern deep in the tunnels of the mountains,  with surprising black stains on her hands, the marks of an Ubreshi…Reira forms a clever alliance with fellow miners (who were once her subjects), hoping to one day return home in a quest to uncover the truth about her heritage. Each struggle is another game she has to win using her pawns, the Ubreshis that she convinced along the way. Every step of the way, she pieces the pieces of the puzzle with the little information she has. The more she learns, the less she is certain that she is going to like what she finds at the end of the road...
                    </p>

            </div> 
                <img src={WritingImg} className= "writingImage"/>
            </div>

            <div className="beta-reader">
            <h2>Want to Become a Beta Reader?</h2>
                <p className= "trigger-warning">TRIGGER WARNING</p>
                <p>(The content of my manuscript includes sensitive subjects such 
                as child abuse, mutilation, decapitation, torture, rape, and sexual harrassment. 
                Make sure you know what you are signing up for and that you can handle this content
                if you are interested in becoming a beta reader) <br/></p>
                <p>Are you interested in reading the gory violent and 
                unforgiving ultimate battle royal of a dark fantasy world which I dubbed 
                'The Known World'? How this goes it that I send you parts of my manuscipt, 
                usually chapter by chapter. After you read it, we discuss the plot, pacing and 
                characters via Discord or text message(whatever you are comfortable with). 
                Questions you can expect are things like 'What is going on in the chapter?', 
                'What do you think will happen next?', 'What did this scene make you feel?', 
                'Who is your favorite character?'.<br/>
                If you are unsure whether or not to become a beta reader, go and read the prologue, 
                the first two pages of my manuscript. See if that piques your interest</p>
                <button className="prologue-button" onClick={this.toggleShow}>{this.state.show ? "Hide" : "Show"} Prologue </button>
                    <nav style={{display: this.state.show ? "block" : "none"}}>
                        <Prologue/>
                    </nav>             
                </div>
            </div>
        )
    }
}
export default Writing