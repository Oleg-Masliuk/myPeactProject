import React from 'react'
import "./content.css"
import Player1 from "../../assents/images/content/player1.png"
import Player2 from "../../assents/images/content/player2.png"
export const Content = () => {
  return (
    <div className="sectionContent">
     <section className="content">
            <div className="content-box"/>
                <div>
                    <img className="content-player1" src={Player1} alt="Foto player"/>
                </div>  
                <div> 
                    <img className="content-player2" src={Player2} alt="Foto player"/>
                </div> 
                <div>
                <h3 className="content-title">New Experience In Playing Game</h3>
                <p className="content-description">You can try playing the game with anew style and of course a more real feel, like you are the main character in your game and adventure in this new digital world.</p>
                <button className="content-button">Get it Now</button>
            </div>  
        </section>
    </div>
  )
}

       
