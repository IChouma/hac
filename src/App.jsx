import './App.css';
import React from 'react';
import  {BrowserRouter,Routes,Route } from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux'
import Homepage from './components/homepage/Homepage';
import Products from './components/products/Products';
import Shop from './components/shop/shop';
import {ImWhatsapp} from "react-icons/im"
import {AiOutlineArrowUp} from "react-icons/ai"



function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Homepage/>} />
    <Route exact path="/Section" element={<Products/>} />
    <Route exact path="/Service" element={<Shop/>} />
    </Routes>
    <button key={Math.random()} 
        id="wt-btn"
            onClick={()=>window.open(`https://wa.me/+212629852903?text= Hello! \nI have seen this(Title of service) on your website`,'_blank').focus()}
        > <ImWhatsapp/> </button>
        {
         window.scrollY > "100vh"
          ? <button key={Math.random()} 
          id="scroll-top" onClick={()=>window.scrollTo(0,0)}
          > <AiOutlineArrowUp/> </button>
          :""
        }
   
    </BrowserRouter>
    </Provider>
  )
}

export default App;

