import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import slider1 from "./slider1.jpg"
import slider2 from "./slider2.png"
import slider3 from "./slider3.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import {Navigation, Pagination ,Autoplay} from "swiper";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Home() {

  return (
 <section id='home'>
      <Swiper
      modules={[Navigation,Pagination,Autoplay]}
        autoplay={{delay:4000,disableOnInteraction: false}}
        autoHeight={false}
        spaceBetween={30}
        navigation={true}
        pagination={{clickable: true,}}
        className="mySwiper"
      >
        <SwiperSlide><img src={slider1}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>

      </Swiper>

</section>

  )
}

export default Home