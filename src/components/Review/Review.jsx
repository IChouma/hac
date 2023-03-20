import React from 'react';
import review from '../../images/review.jpeg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Review.css";
import {Navigation, Pagination ,Autoplay,FreeMode} from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { motion ,useInView} from "framer-motion"
import { useRef } from 'react';

function Review() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
<section  class="review" id="review">
<div>
    <h1 style={{
                        transform: isInView ? "none" : "translateY(-100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                      }}
     class="heading"> Costumer Reviews </h1>

    <Swiper ref={ref} style={{
                        transform: isInView ? "scale(1)" : "scale(0)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                      }}
    breakpoints={{
    0: {
    //   width: 0,
      slidesPerView: 1,
    },
    640: {
    //   width: 640,
      slidesPerView: 2,
    },
    768: {
    //   width: 768,
      slidesPerView: 3,
    },
  }}
    freeMode={true}
     autoplay={
          {delay:4000,
          disableOnInteraction: false}}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination,Navigation,Autoplay,FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide  
                      >
            <div class="box" >
            <div class="image">
                <img src={review} alt=""/>
            </div>
            <div class="content">
                <h6>this is my first programming work in another country that is turkey,for this i never give up,, just work and work and work and work and work.....</h6>
                <h2>slide5</h2>
               
            <a href="#" class=" buynow"></a>

            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="box" >
            <div class="image">
                <img src={review} alt=""/>
            </div>
            <div class="content">
                <h6>thintry that is turkey,for this i never give up, never stop, never sleep, just work and work and work and work.....</h6>
                <h2>slide5</h2>
               
            <a href="#" class=" buynow"></a>

            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="box" >
            <div class="image">
                <img src={review} alt=""/>
            </div>
            <div class="content">
                <h6>this is my first programming work in another country that is turkeand work and work and work.....</h6>
                <h2>slide5</h2>
               
            <a href="#" class=" buynow"></a>

            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="box" >
            <div class="image">
                <img src={review} alt=""/>
            </div>
            <div class="content">
                <h6>this is my first programming work in another country that is turkey,for this i never give up, never stop, never sleep, just work and work and work and work and work.....</h6>
                <h2>slide5</h2>
               
            <a href="#" class=" buynow"></a>

            </div>
        </div>
        </SwiperSlide>
      </Swiper>
            </div>
</section>
  )
}

export default Review
