import React,{ useRef } from 'react'
import './Blog.css'
import img2 from '../../images/muskalghazal.jpeg';
import { motion, useInView } from "framer-motion"


function Blog() {
    const ref = useRef(null);
const isInView = useInView(ref, { once: true });
  return (

    <section class="blogs" id="blogs">

    <h1 style={{
                        transform: isInView ? "none" : "scale3d(.5,.7,.9)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                      }} class="heading"> Our blogs </h1>

    <div ref={ref} class="box-container">

        <div
        style={{
                transform: isInView ? "none" : "scale3d(.5,.7,.9)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
         class="box">
            <div class="image">
                <img src={img2}alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title">  </a>
                <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt at porro suscipit? Beatae, quidem corrupti iste 
                </p>
                <a href="#" class="btn">read more </a>
            </div>
        </div>
        <div 
        style={{
            transform: isInView ? "none" : "scale3d(.5,.7,.9)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}class="box">
            <div class="image">
                <img src={img2}alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title">fhkjqhtz </a>
                <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt at porro suscipit? Beatae, quidem corrupti iste 
                </p>
                <a href="#" class="btn">read more </a>
            </div>
        </div>
        <div
        style={{
            transform: isInView ? "none" : "scale3d(.5,.7,.9)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }} class="box">
            <div class="image">
                <img src={img2}alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title"> title of blog </a>
                <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt at porro suscipit? Beatae, quidem corrupti iste 
                </p>
                <a href="#" class="btn">read more </a>
            </div>
        </div>
        <div
        style={{
            transform: isInView ? "none" : "scale3d(.5,.7,.9)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }} class="box">
            <div class="image">
                <img src={img2}alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title">  </a>
                <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt at porro suscipit? Beatae, quidem corrupti iste 
                </p>
                <a href="#" class="btn">read more </a>
            </div>
        </div>



    </div>

</section>
  )
}

export default Blog
