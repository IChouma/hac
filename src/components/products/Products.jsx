import React,{useRef} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion ,useInView} from "framer-motion"
import {cart} from '../../cart-slice'
import './Products.css'
function Products({products}) {
        const dispatch=useDispatch();
    const navigate=useNavigate ();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const productss=products.map((product,index)=>{
        return(
                    <motion.div 
                    style={{
                        transform: isInView ? "none" : "translateY(100%)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                      }}
                    class="box" onClick={()=>{dispatch(cart());navigate('/')}}>
            <div class="image">
                <img src={product.img} alt=""/>
            </div>
            <div class="content">
                <h3>{product.title}</h3>
               
            <a href="#" class=" buynow"
            onClick={()=>window.open(`https://wa.me/+212661771140?text= HI! \nwelcome (${product.title}) on your website`,'_blank').focus()}
            ></a>

            </div>
        </motion.div>
        )
    })
  return (
<section ref={ref} class="products" id="products">

    <h1 style={{
                        transform: isInView ? "none" : "translateY(-100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                      }}
     class="heading">Our Services </h1>

    <div class="box-container">
        {productss}
    </div>

</section>

  )
}

export default Products
