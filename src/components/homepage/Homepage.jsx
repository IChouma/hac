import React from 'react';
import Header from '../header/Header';
import About from '../about/About';
import Blog from '../Blog/Blog'
import Home from '../home/Home';
import Footer from '../footer/Footer';
import Contact from '../Contact/Contact';
import Menu from '../menu/Menu';
import Products from '../products/Products';
import Review from '../Review/Review';
import {products, packs,services} from '../../api/products'
import Counter from '../counter/counter';

function Homepage() {
  
  return (
<>
    <Header />
    <Home />
    {/* <About /> */}
    <Products products={products}/>
    <Menu packs={packs}/>
    <Counter services={services}/>
    <Review/>
    <Contact />
    <Blog />
    <Footer />
</>
     
  )
}

export default Homepage
