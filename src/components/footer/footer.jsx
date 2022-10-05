import React from 'react'
import "./footer.css"
import Vector from "../../assents/icons/footer/Vector.svg"
import FooterFon from "../../assents/images/footer/head.png"

export const Footer = () => {
  return (
    <div className="sectionFooter">
        <footer className="footer">
        <div className="footer-box">
            <div className="footer-explore">
                <h3 className="footer-title">Explore product in new way <img src={Vector} alt=""/></h3>
                <p className="footer-description">We specialize in creating visual identities for products and branda in your company.</p>
                <form className="footer-form">
                    <input className="footer-form__input" type="text" placeholder="Your Email"/>
                    <button className="footer-form__button">Start<img className="footer-form__img" src="../../assents/icons/footer/Vector (1).svg" alt=""/></button>        
                 </form>
            </div>
          <img className="footer-img" src={FooterFon} alt="photo head"/>
        </div>
    </footer>
    </div>  
  )
}


