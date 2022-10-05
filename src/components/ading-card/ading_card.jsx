import React from 'react'
import "./ading_card.css"
import Fon from "../../assents/images/ading-card/Vector.png"
import { useRef} from "react";
import { Formik } from "formik"
import { useClickOutside } from "../../hooks/useClickOutside"


export const AddingCard = ({onCloseAdd, test}) => {
  const wrapperAddRef = useRef(null);
  useClickOutside(wrapperAddRef, onCloseAdd);

  
  return (
        <section className="card" ref={wrapperAddRef}>
        <div className="card-head">
            <h3 className="head-title">Realities cards</h3>
            <img className="head-fon" src={Fon} alt="Fon"/>
        </div>
        <h4 className="card-title">Add new card</h4>
        <Formik
                initialValues={{
                  title: "",
                  caption: "",
                  img: ""
                }}
                validateOnBlur
                
                onSubmit={test}
                
        >
           {({values, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
        <div className="card-form">
            <input className="card-input" id="cardName" type="text" placeholder="Card name"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}/>
            <input className="card-input" id="cardDescription" type="text" placeholder="Card description"
            name="caption"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}/>
            <input className="card-input" id="cardImg" type="text" placeholder="Card image name"
            name="img"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}/>
            <button className="card-btn" id="cardBtn" type='submit'
            disabled={!isValid&&!dirty}
            onClick={()=> (handleSubmit(), onCloseAdd())}>Add</button>
        </div>
        )}
        </Formik>
    </section>
  )
}


