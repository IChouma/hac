import React, {Fragment, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { motion, useInView } from "framer-motion"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Contact.css'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

function  Contact() {
  const [active,setActive]=useState(false);
// const ContactUs=useNavigate()
// const home=useNavigate()
const [phone, setPhone] = useState('tr');
const ref = useRef(null);
const isInView = useInView(ref, { once: true });
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

        <form action="https://formsubmit.co/abdeljabarichouma@gmail.com" method="POST">
            <h3>enter your information </h3>
            <div
            style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }} class="inputBox">
                    <div>
                   {phone!=='tr'
                    ?<PhoneInput 
                        defaultCountry={phone}
                        forceDialCode={true}
                        showDisabledDialCodeAndPrefix={true}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        />
                      :<PhoneInput 
                      defaultCountry={'tr'}
                      forceDialCode={true}
                      showDisabledDialCodeAndPrefix={true}
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                      />}
    </div>
            </div>
            <div
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
              }} class="inputBox">
                <span class="fas fa-user"></span>
                <input type="text" placeholder="Name"/>
            </div>
            <div
            style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
              }} class="inputBox">
                <span class="fas fa-envelope"></span>
                <input type="email" placeholder="Email"/>
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


