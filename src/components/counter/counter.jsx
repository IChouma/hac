import React, { useRef, useState } from 'react';
import { MdOutlineAddHomeWork } from "react-icons/md";
import './counter.css';
import  CountUp from "react-countup";
import  ScrollTrigger from "react-scroll-trigger";
import { motion ,useInView} from "framer-motion"

function Counter({services}) {
    const [counterOn,setCounterOn]=useState(false)
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} >
<section  class="products" id="counter">

    <h1 style={{
                        transform: isInView ? "none" : "rotateY(90deg)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                      }}
     class="heading" data-goal="500">Our Services </h1>

    <div ref={ref} class="box-container">
    <motion.div
            style={{
                transform: isInView ? "none" : "rotateY(90deg)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }} 
            class="box" >
            <div className="image ">
               <div> <MdOutlineAddHomeWork className='image-icon' style={{color: '#00c7de', fontSize: '5rem'}}/></div>
            </div>
            <div class="content">
                <h1 >
                    {counterOn && <CountUp preserveValue={false} star={0} end={100} duration={4} delay={1} />}
                    </h1>
                <h3>service title</h3>
               

            </div>
        </motion.div>
    <motion.div
            style={{
                transform: isInView ? "none" : "rotateY(90deg)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
              }} 
            class="box" >
            <div className="image ">
               <div> <MdOutlineAddHomeWork className='image-icon' style={{color: '#00c7de', fontSize: '5rem'}}/></div>
            </div>
            <div class="content">
                <h1 >
                    {counterOn && <CountUp preserveValue={false} star={0} end={200} duration={5} delay={1.5} />}
                    </h1>
                <h3>service title</h3>
               

            </div>
        </motion.div>
    <motion.div
            style={{
                transform: isInView ? "none" : "rotateY(90deg)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
              }} 
            class="box" >
            <div className="image ">
               <div> <MdOutlineAddHomeWork className='image-icon' style={{color: '#00c7de', fontSize: '5rem'}}/></div>
            </div>
            <div class="content">
                <h1 >
                    {counterOn && <CountUp preserveValue={false} star={0} end={300} duration={6} delay={2} />}
                    </h1>
                <h3>service title</h3>
               

            </div>
        </motion.div>
    <motion.div
            style={{
                transform: isInView ? "none" : "rotateY(90deg)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.1s"
              }} 
            class="box" >
            <div className="image ">
               <div> <MdOutlineAddHomeWork className='image-icon' style={{color: '#00c7de', fontSize: '5rem'}}/></div>
            </div>
            <div class="content">
                <h1 >
                    {counterOn && <CountUp preserveValue={false} star={0} end={400} duration={7} delay={2.5} />}
                    </h1>
                <h3>service title</h3>
               

            </div>
        </motion.div>
    </div>
</section>
</ScrollTrigger>
  )
}

export default Counter
