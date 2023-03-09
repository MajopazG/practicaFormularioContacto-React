import React, { useRef } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(refForm.current);
        const serviceId = "service_bjegmak"
        const templateId = "template_3e4qhl9";
        const apikey =  "xw-hXJ5kXw_eJ_sHI"
        const regex = new RegExp()
        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
        .then( result => console.log(result.text))
        .catch (error => console.log(error))
    }

  return (
    <form ref={refForm} action="" onSubmit={handleSubmit}>
        <div className="header-contact">
            <h2>Contact Us</h2>
            <p>Plase fill this form</p>
        </div>
        <fieldset className='field-name'>
            <label className='symbol-required name'htmlFor="">Name</label>
            <input name='username' type="text" placeholder='Ej: Maria Jose Paz' required/>
        </fieldset>
        <fieldset className='field-email'>
            <label className='symbol-required' name='email'>Email</label>
            <input type="email" placeholder='Ej: majopazgarcia25@gmail.com' name='email' id='email' required />
        </fieldset>
        <fieldset className='field-message'>
            <label className='symbol-required'>Mensage</label>
            <textarea name="message" id="message" cols="30" rows="10" maxLength='500' placeholder='Type yout message'></textarea>
        </fieldset>
        <button className='btn-send'>Send</button>
    </form>
  )
}
