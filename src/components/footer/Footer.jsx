import React,{ useRef } from 'react';
import { useState } from 'react';
import './Footer.css'
import { motion, useInView } from "framer-motion"

function Footer(){
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (

<section ref={ref}
 class="footer" id='footer'>

    <div
    style={{
      transform: isInView ? "none" : "translateY(-100%)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }} class="share">
        <a href="#" class="fab fa-facebook-f"></a>
        <a href="#" class="fab fa-twitter"></a>
        <a href="#" class="fab fa-instagram"></a>
        <a href="#" class="fab fa-linkedin"></a>
        <a href="#" class="fab fa-pinterest"></a>
    </div>

    <div
    style={{
      transform: isInView ? "none" : "translateY(100%)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
    }} class="links">
        <a href="/">Home</a>
        <a href="#">About </a>
        <a href="#menu">Menu</a>
        <a href="#products">Services</a>
        <a href="#review">Reviews</a>
        <a href="#contact"> Contact us</a>
        <a href="#">Blogs</a>
    </div>

    <div
    style={{
      transform: isInView ? "none" : "scale3d(-.5,-.7,-.9)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
    }} class="credit">created by <span>codechouma</span> | all rights reserved</div>

</section>

  )
}



export default Footer;

