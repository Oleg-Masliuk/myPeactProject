import React from 'react'
import { useState } from 'react';
import { useRef, useEffect } from "react";
import "./hero.css"
import UserFoto1 from '../../assents/images/hero/userfoto1.png'
import UserFoto2 from '../../assents/images/hero/userfoto2.png'
import UserFoto3 from '../../assents/images/hero/userfoto3.png'
import UserFoto4 from '../../assents/images/hero/userfoto4.png'
import Icon from '../../assents/icons/hero/ell.svg'
import Fotoplayer from '../../assents/images/hero/Fotoplayernew.png'
import EllipseLeft from '../../assents/images/hero/EllipseLeft.svg'
import EllipseRich from '../../assents/images/hero/EllipseRich.png'
import {AddingCard} from '../ading-card/ading_card'

export const Hero = ({test, testUser}) => {
    const hendleAddCard = () =>{
        if (!testUser) { alert ("Only registered users can add cards")} else {setIsDialogAddCard (true)}}
    const [isDialogAddCard, setIsDialogAddCard] = useState (false)
    const onCloseAddCard = () => {setIsDialogAddCard (false)}
    

  return (
    <>
    <div className="sectionHero">
    <section className="hero">
    <div className="hero-box"/>
    <div className="hero-description">
        <h1 className="hero-title">Let’s Explore Three-Dimensional visual</h1>
        <p className="hero-text">hero-doskriptionWith virtual technology you can see the digital world feel more real and you can play the game with a new style.</p> 
        <div className="hero-choice">
            <button className="hero-choice__button hero-choice__button--active" onClick={() => hendleAddCard ()}>Add card</button>
            <button className="hero-choice__button">Explore Device</button>
        </div>
        <ul className="hero-user">
            <li className="hero-user__foto"><img src={UserFoto1} alt="userfoto1"/></li>
            <li className="hero-user__foto"><img src={UserFoto2} alt="userfoto2"/></li>
            <li className="hero-user__foto"><img src={UserFoto3} alt="userfoto3"/></li>
            <li className="hero-user__foto"><img src={UserFoto4} alt="userfoto4"/></li>
            <li className="hero-user__text"> <p> <img src={Icon} alt=""/> 400k people online</p></li>
        </ul> 
        
    </div>
    <div className="hero-poster">
        <img className="hero-poster__foto" src={Fotoplayer} alt="Fotoplayer"/>
        <div className="hero-poster__description">
            <h3 className="hero-poster__title">Cinematic Virtual Reality</h3>
            <hr className="hero-line"/>
            <p className="hero-poster__text">Let’s be the best for more real and effective results and ready to explore the limitless world that we have prepared for you.</p>
        </div>
    </div>
    </section>
        <img src={EllipseLeft} className="hero-ellips_left" alt="EllipseLeft"/>
        <img src={EllipseRich} className="hero-ellips_rich" alt="EllipseRich"/>    
    </div>
    {isDialogAddCard&&<AddingCard test={test} onCloseAdd={onCloseAddCard}/>}
    </>
  )
}

   







