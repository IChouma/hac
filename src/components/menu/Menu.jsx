import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {cart} from '../../cart-slice'
import { useDispatch } from 'react-redux';
import { motion ,useInView} from "framer-motion"
import video from '../../images/video.mp4';
import './Menu.css'
function Menu({packs}) {
    const dispatch=useDispatch();
    const navigate=useNavigate ();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
<section class="menu" id="menu">

    <h1 style={{
                        transform: isInView ? "none" : "translateY(-100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                      }}
     class="heading">Welcome</h1>

    <div  class="box-container">

    <div  ref={ref}  style={{
                        transform: isInView ? "none" : "translateY(100%)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
                      }}  class="box offer" >
                <video autoPlay loop src={video}></video>
        </div>
    </div>

</section>
  )
}

export default Menu
