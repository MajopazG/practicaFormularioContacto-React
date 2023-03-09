import React, { useRef, useState, useEffect } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(refForm.current);
        const serviceId = "service_bjegmak";
        const templateId = "template_3e4qhl9";
        const apikey =  "xw-hXJ5kXw_eJ_sHI";
        const regex = new RegExp();

        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
        .then( result => console.log(result.text))
        .catch (error => console.log(error))
    }
    
    const regexUsername = /^[a-zA-Z ]{3,50}$/;
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [userValidate, setUserValidate] = useState('');
    const [emailValidate, setEmailValidate] = useState('');

    const handleusername = (event) => {   
        setUsername(event.target.value);
      }
  
    const handleEmail = (event) => {   
        setEmail(event.target.value);
      }

    useEffect(() => {
    // validar username
    if(regexUsername.test(username)){
        setUserValidate('');
    }else{
        setUserValidate('Minimum 3 characters and no numbers');
    }
    // validar email
    if(regexEmail.test(email)){
        setEmailValidate('');
    } else {
      setEmailValidate('invalid email');
    }
    }, [username,email]);
    
  return (
    <form ref={refForm} action="" onSubmit={handleSubmit}>
        <div className="header-contact">
            <h2>Contact Us</h2>
            <p>Plase fill this form</p>
        </div>
        <fieldset className='field-name'>
            <label className='symbol-required name'htmlFor="">Name</label>
            <input onChange={handleusername} name='username' type="text" placeholder='Ej: Maria Jose Paz' required/>
            <p className='p-Validate'>{userValidate}</p>
        </fieldset>
        <fieldset className='field-email'>
            <label className='symbol-required' name='email'>Email</label>
            <input onChange={handleEmail} type="email" placeholder='Ej: majopazgarcia25@gmail.com' name='email' id='email' required />
            <p className='p-Validate'>{emailValidate}</p>
        </fieldset>
        <fieldset className='field-message'>
            <label className='symbol-required'>Mensage</label>
            <textarea name="message" id="message" cols="30" rows="10" maxLength='500' placeholder='Type yout message'></textarea>
        </fieldset>
        <button className='btn-send'>Send</button>
    </form>
  )
}
