import React, {Fragment, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { motion, useInView } from "framer-motion"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Contact.css'
import { PhoneInput } from 'react-international-phone';
import emailjs from '@emailjs/browser';
import 'react-international-phone/style.css';

function  Contact() {
const [active,setActive]=useState(false);
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [phone, setPhone] = useState('tr');
const ref = useRef(null);
const isInView = useInView(ref, { once: true });
const form = useRef();
const tel = document.querySelector('.react-international-phone-input');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fsf2i8f', 'template_m2egqpz', form.current, '-y3KfJZp3shfQ2Z8M')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
useEffect(() => {
  axios.get(`https://ipinfo.io/json?token=42ed2540310f93`)
  .then(response => {
    setPhone(response.data.country)
  })

  .catch(e => {
    setPhone("TR")
  });
}, []);
    return (
   <section  class="contact" id="contact">

    <h1 style={{
                        transform: isInView ? "none" : "translateY(-100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                      }} class="heading"> CONTACT US</h1>

    <div ref={ref} class="row">

        <form ref={form} onSubmit={sendEmail} >
            <h3>enter your information </h3>
            <div
            style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }} class="inputBox">
                    <div>
                   {phone &&
                    <PhoneInput 
                      name={'user-phone'}
                        defaultCountry={phone}
                        forceDialCode={true}
                        showDisabledDialCodeAndPrefix={true}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        />
                      }
            <input style={{"display":"none"}}  type="tel" name="user_phone" value={phone}/>
    </div>
            </div>
            <div
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
              }} class="inputBox">
                <span class="fas fa-user"></span>
                <input  type="text" name="user_name" placeholder="Name"/>
            </div>
            <div
            style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
              }} class="inputBox">
                <span class="fas fa-envelope"></span>
                <input type="email" name="user_email" placeholder="Email"/>
            </div>
            <input
            style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.1s"
              }} type="submit" value=" Send" class="btn"/>
        </form>

    </div>

</section>
    
  )
}


export default Contact


