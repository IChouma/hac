import React, { Fragment, useEffect,  } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import "./shop.css"
import service from './media/slider1.jpg';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import {selectCart} from '../../cart-slice'
import Contact from '../Contact/Contact';

function Shop () {
const cartt = useSelector(selectCart);
useEffect(() => {
window.scrollTo(0,0)
}, );
  return (
  <Fragment>
    <Header/>
    <section  id="prodetails" className="section">
    <h1>Title</h1>
      <div className="sproimg">
        <img src={service} width="100%" alt="" id="mainimg"/>
      </div>
      <div className="sprodetails">
        <h2> somthing</h2>
        <h6>Title</h6>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Hic odio quam ipsum. Deserunt iusto dignissimos est non? 
          Ea suscipit quia omnis,
           consequatur nulla culpa mollitia qui eaque dolorem, vero ipsum.</h4>
        <button key={Math.random()} 
        className="btn btn-primary buybtn"
            onClick={()=>window.open(`https://wa.me/+212629852903?text= Hello! \nI have seen this(Title of service) on your website`,'_blank').focus()}
        > Send whatsapp </button>
        <h6>Title</h6>
        <h4> sub-title</h4>
        <p className='detailss'>Lorem ipsum dolor sit, 
        amet consectetur adipisicing elit. 
        Nulla veniam quia nemo nam similique rem, 
        quibusdam vel beatae commodi, provident, quo aperiam. 
        Minima eveniet repellat nobis eum nisi similique incidunt?</p>
      </div>
      <div className="sprodetails">
        <h6>Title</h6>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Hic odio quam ipsum. Deserunt iusto dignissimos est non? 
          Ea suscipit quia omnis,
           consequatur nulla culpa mollitia qui eaque dolorem, vero ipsum.</h4>
        <h6>Title</h6>
        <h4> sub-title</h4>
        <p className='detailss'>Lorem ipsum dolor sit, 
        amet consectetur adipisicing elit. 
        Nulla veniam quia nemo nam similique rem, 
        quibusdam vel beatae commodi, provident, quo aperiam. 
        Minima eveniet repellat nobis eum nisi similique incidunt?</p>
      </div>
    </section>
    <Contact/>
    <Footer/>
  </Fragment>
  )
}

export default Shop;

