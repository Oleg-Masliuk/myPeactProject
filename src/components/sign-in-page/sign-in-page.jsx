import React from 'react'
import "./sign-in-page.css"
import { useRef, useEffect } from "react";
import { Formik } from "formik"
import { useClickOutside } from "../../hooks/useClickOutside"
import ellips1 from '../../assents/images/sign-in/Ellipse 8 (1).png'
import ellips2 from '../../assents/images/sign-in/Ellipse 6 (1).png'
import {userLogin} from '../mock'

export const SignInPage = ({onClose, setIsUser, setTestUser}) => {
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, onClose);

  return (
       <section className="sign" ref={wrapperRef}>
        <h3 className="sign-title">Sign in</h3>
        <Formik
        initialValues={{
          name: "",
          password: ""
        }}
        validateOnBlur
        onSubmit={(values) => {
          if (userLogin.filter((elem)=>elem.name==values.name&&elem.password==values.password).length>0)
          {setTestUser(true);
            setIsUser(true)}
            else {alert ("the login or password is incorrect")}
          localStorage.setItem("User", JSON.stringify(values));
        }}
        >
          {({values, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
        <div className="sign-form" id="signForm">
            <input className="sign-input" id="user" type="text" placeholder="Email or username" 
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name} />
            <input className="sign-input" id="password" 
              type="password" 
              placeholder="Password" 
              name="password" 
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password} />
            <button  className="sign-btn" 
            type="submit"
            disabled={!isValid&&!dirty}
            onClick={()=> (handleSubmit(), onClose())}           
            >Sign in</button>
        </div>
        )}
        </Formik>
        <img src={ellips1} className="sign-img2" alt="Ellipse"/>
        <img src={ellips2} className="sign-img1" alt="Ellipse"/>
    </section>
  )
}

 
 