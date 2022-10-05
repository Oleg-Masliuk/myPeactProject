import React from 'react'
import "./listItem.css"
import ListItemFon from "../../assents/images/ListItem/Vector5.png"
import FotoVideo from "../../assents/images/ListItem/Fotovideo.png"
import Rich from "../../assents/icons/ListItem/rach.svg"
import Left from "../../assents/icons/ListItem/left.svg"
import {ItemPage} from "../item-page/item-page"
import { useState } from 'react';
import { usePagination } from "../../hooks/usePagination"

export const ListItem = ({cards, handleSortNew, empyCards}) => {
    const [cardModal, modalCard] = useState (null)
    const hendleModalItem = (Card) =>{
        setIsModalItem (true)
        modalCard(Card)}
    const [isModalItem, setIsModalItem] = useState (false)
    const closeModalItem = () => {setIsModalItem (false)}
    
    const {firstContentIndex, lastContentIndex, nextPage, prevPage, page, setPage, totalPages} = usePagination({
        contentPerPage: 3,
        count: cards.length,
      });
      cards.slice(firstContentIndex, lastContentIndex)
    
  return (
    <>
<div className="sectionListitem-box">
   <div className="listitem-box">
    <div className="listitem-heat">
        <div className="listitem-description">
            <h3 className="description__title">Awesome experiences with virtual reality world </h3>
            <img className="description__imag" src={FotoVideo} alt="video"/>            
        </div>
        <img className="lisninem-heat__fon" src={ListItemFon} alt=""/>
    </div>
    
    <div className="listitem-sort">
        <h3 className="sort__title">Mixed Reality Headsets</h3>
        <select className="sort__select" name="sort" onChange={handleSortNew}>
            <option value="New first">New first</option>
            <option value="Last first">Last first</option>
        </select>
    </div>
    <ul className="listitem-content">
        {cards.slice(firstContentIndex, lastContentIndex).map((Card) => {
        return <li key={Card.date} onClick={() => hendleModalItem (Card)}>
            <img className="listitem-content__foto" src={`/imgCards/${Card.img}`} alt={Card.imgAlt}/>
            <div className="headsets-dscr">
                <h5 className="headsets-dscr__name">{Card.title}</h5>
                <p className="headsets-dscr__text">
                {Card.caption}
                </p>
            </div>
            </li>
        })}
    </ul>
    
{!empyCards&&<div className="listitem-choice">

  <button className="choice__button" onClick={prevPage}>
  <img  src={Left} alt="left"/>
  </button>
  {[...Array(totalPages).keys()].map((el) => {
    return <button
      onClick={() => setPage(el + 1)}
      key={el} 
      className={`choice__button ${page === el + 1 ? "choice__button--active" : ""}`} 
    >
      {el + 1}
    </button>}
  )}
  <button className="choice__button" onClick={nextPage}>
  <img  src={Rich} alt="rich"/>
  </button>
</div>}

    {empyCards&&<div className="empyCards">  Empy cards </div>}
</div>
</div>
{isModalItem&&<ItemPage closeModalItem={closeModalItem} cardModal={cardModal}/>}
</>

  )
}

