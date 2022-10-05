import React from 'react'
import "./company.css"
export const company = () => {
  return (
    <div className="company">
       <section className="sectionCompany">
        <div className="company-box">
        <div className="company-about">
            <h3 className="company__title">Our company values culture <img className="company__img" src="../../assents/icons/Company/head.svg" alt=""/></h3>
           
            <p className="company__description" >We specialize in creating visual identities for products and branda in your company.</p>
        </div>
        <ul className="choice">
                <li className="choice-icon">
                    <img className="choice-icon__img" src="../../assents/icons/Company/victory-hand.svg" alt=""/>
                    <p className="choice-icon__text">Be Sincere</p>
                </li>
                <li className="choice-icon">
                    <img className="choice-icon__img" src="../../assents/icons/Company/viktori.svg" alt=""/>
                    <p className="choice-icon__text">Keep it simple</p>
                </li>
                <li className="choice-icon">
                    <img className="choice-icon__img" src="../../assents/icons/Company/twohand.svg" alt=""/>
                    <p className="choice-icon__text">Stronger together</p>
                </li>
                <li className="choice-icon">
                    <img className="choice-icon__img" src="../../assents/icons/Company/lamp.svg" alt=""/>
                    <p className="choice-icon__text">Take intelligent risks</p>
                </li>
        </ul>
        </div>
    </section>
    </div>
  )
}


