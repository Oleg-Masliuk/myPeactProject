import React from 'react'
import "./item-page.css"

export const ItemPage = ({closeModalItem, cardModal}) => {
  return (
        <section className="page">
          <button className="closeModal" onClick={closeModalItem}>close</button>
            <img className="page-img" src={`/imgCards/${cardModal.img}`} alt="Foto_user"/>
            <h4 className="page-title">{cardModal.title}</h4>
            <p className="page-text">{cardModal.caption}</p>
        </section>
  )
}

  