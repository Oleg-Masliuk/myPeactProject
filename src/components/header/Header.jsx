import React from 'react'
import "./header.css"
import { useRef } from "react";
import { useState } from 'react';
import Ellipse from "../../assents/images/header/Ellipse 8 (1).svg"
import User from "../../assents/images/header/user.png"
import {SignInPage} from "../sign-in-page/sign-in-page"
import { useClickOutside } from "../../hooks/useClickOutside"



export const Header = ({setTestUser}) => {
    const nameUser = localStorage.getItem("User")||[]
    const hendleSignIn = () =>{setIsDialogSign (true)}
    const [isDialogSign, setIsDialogSign] = useState (false)
    const onCloseSignIn = () => {setIsDialogSign (false)}

    const [isUser, setIsUser] = useState (()=>{if(nameUser=="") {return false} else {return true}})
    const [isBurgerMenu, setBurgerMenu] = useState (false)

    const wrapRef = useRef(null);
    useClickOutside(wrapRef, setBurgerMenu);

  return (
    <>
    <div className="sectionHeader">
    <header className="header">
        <div className="header-box">
        <h3 className="header-title">Light</h3>
            <div className="header-navigation">
                <nav className="header-choice">
                    <ul className="navigation__item">
                        <li className="navigation__item__name"><a href="#" className="item__name__text item__name__text--active">Home</a></li>
                        <li className="navigation__item__name" ><a href="#" className="item__name__text" >Company</a></li>
                        <li className="navigation__item__name"><a href="#" className="item__name__text">Features</a> </li>
                    </ul>  
                </nav>
                {!isUser&&<button className="navigation__item__btn" onClick={() => hendleSignIn()}>Sign In</button>}
                <div>
                    {isUser&&<img src={User} onClick={() => setBurgerMenu(true)} alt="userfoto1"/>}
                </div>
                {isBurgerMenu&&<ul class="user-menu-gange" ref={wrapRef}>
                        <li id="userMenuRecently">Recently Added</li>
                        <li id="userMenuCard">Add new card</li>
                        <li id="userMenuLogout" onClick={() => (setBurgerMenu(false), setIsUser(false), setTestUser(false))}>Log out</li>
                    </ul>}
            </div>
                <img src={Ellipse} className="Header-ellips" alt="Ellipse"/>
        </div>
    </header>
    </div>
    {isDialogSign&&<SignInPage setTestUser={setTestUser} setIsUser = {setIsUser} onClose={onCloseSignIn}/>}
    </>
  )
}


