import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './header.css'
import { motion } from "framer-motion"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Brand1 from "./logo-01.png"
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FcManager } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { RiMessage2Line } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
function  Header() {
      const [anchorEl, setAnchorEl] = React.useState(null);
      const [msd, setMsd] = React.useState(false);
      const [theethm, setTheethm] = React.useState(false);
      const [som, setSom] = React.useState(false);
      const [wsd, setWsd] = React.useState(false);
      const [ht, setHt] = React.useState(false);
      const [beam, setBeam] = React.useState(false);
      const [beaw, setBeaw] = React.useState(false);
      const [ab, setAb] = React.useState(false);
      const [ba, setBa] = React.useState(false);
      const [sow, setSow] = React.useState(false);
      const [theethw, setTheethw] = React.useState(false);
      const [display, setDisplay] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOver=()=>{
    setDisplay(true)
    console.log("yes");
    console.log(display);
  }
    const [active,setActive]=useState(false)
    const [search,setSearch]=useState(false);
    const Navigate= useNavigate()
    return (
   <header class="header">

    <a href="/" class="logo">
        <img src={Brand1} alt=""/>
    </a>

    <nav class={`navbar ${active===true?"active":""}`}>
        <ul>
            <li><div className='drop'>    <a href="">Home</a> 
            <AiOutlineHome className='icon' style={{color: '#ffffff', fontSize: '25px'}}/></div></li>
            <li><div className='drop'>    <a href="#">About</a> 
            <BsInfoCircle  className='icon' style={{color: '#ffffff', fontSize: '25px'}}/></div></li>
            <li >
                <div onClick={()=>setMsd(!msd)}  className='drop'><a href="#">Men services</a>
                 <RiArrowDropDownLine   style={{color: '#0b1b67', fontSize: '25px'}}/>
            <FcManager style={{color: '#ffffff', fontSize: '25px'}}/></div>
            
            <ul className={`name ${msd?'display':''}`}  >
              <li><a href="#"
               onClick={()=>Navigate('/service')}>Hair,Beard transplantaion</a>
            </li>
              <li ><div onClick={()=>setTheethm(!theethm)}  className='drop '>  <a  href="#">THEETH</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul className={`topic ${theethm?'display':''} `}>
                    <li><a href="#" onClick={()=>Navigate('/service')}>HOLLYWOOD SMILE</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>DENTAL IMPLANTS</a></li>
                </ul>
            </li>

              <li><a href="#" onClick={()=>Navigate('/service')}>RHINOPLASTY</a>
            </li>

              <li><div onClick={()=>setBeam(!beam)} className='drop'>  <a href="#">BEAUTIFICATION OF FACE</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul className={`topic ${beam?'display':''}`}>
                    <li><a href="#" onClick={()=>Navigate('/service')}>FORHEAD LIFT</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>EYEKID LIFT</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>FACELIFT </a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>EAR PULLING </a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>NECK LIFT </a></li>
                </ul>
            </li>
            <li><a href="#" onClick={()=>Navigate('/service')}>LIPOSUCTION </a></li>


            <li><div onClick={()=>setSom(!som)} className='drop'>  <a href="#">SLIMING OPERATIONS</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul className={`topic ${som?'display':''}`}>
                    <li><a href="#" onClick={()=>Navigate('/service')}>GASTRIC BALLON</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>GASTRIC SLEEVE</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>STOMACH BOTOX</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>LIFTING,SUCTIONING THE THIGHS</a></li>
                </ul>
            </li>

              <li><a href="#" onClick={()=>Navigate('/service')}>GYNECOMASTIA REMOVAL</a>
            </li>
              <li><a href="#" onClick={()=>Navigate('/service')}>BODY SCULPTING</a></li>
              <li><a href="#" onClick={()=>Navigate('/service')}>HANDS UP</a></li>
              <li><a href="#" onClick={()=>Navigate('/service')}>LIFTING,SUCTIONING THE THIGHS</a></li>
            </ul>
            </li>
            <li>
              <div onClick={()=>setWsd(!wsd)} className='drop'><a href="#">Women services</a>
              <RiArrowDropDownLine style={{color: '#0b1b67', fontSize: '25px'}}/>
            <FcBusinesswoman style={{color: '#ffffff', fontSize: '25px'}}/>
            </div>
            <ul className={`name ${wsd?'display':''}`}>
              <li><div onClick={()=>setHt(!ht)} className='drop'> 
               <a href="#">hair transplantation</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul className={`topic ${ht?'display':''}`}>
                    <li><a href="#" onClick={()=>Navigate('/service')}>hair translplant</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>eyebrow transplantaion</a></li>
                </ul>
            </li>
              <li><div onClick={()=>setTheethw(!theethw)} className='drop'> <a href="#">theeth</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul className={`topic ${theethw?'display':''}`}>
                    <li><a href="#"onClick={()=>Navigate('/service')}>hollywood smile</a></li>
                    <li><a href="#"onClick={()=>Navigate('/service')}>dental implants</a></li>
                </ul>
            </li>
              <li><a href="#" onClick={()=>Navigate('/service')}>RHINOPLASTY</a>
            </li>
              <li><div onClick={()=>setBeaw(!beaw)} className='drop'>  <a href="#">Face BEAUTIFICATION</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul className={`topic ${beaw?'display':''}`}>
                    <li><a href="#" onClick={()=>Navigate('/service')}>forehead lift</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}> Eyelid lift</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}> face lift</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>Neck lift</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>Ear pulling</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>Cat eyes</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>Raising eyebrows</a></li>
                </ul>
            </li>
              <li><a href="#" onClick={()=>Navigate('/service')}>Liposuction</a>
            </li>
              <li><div onClick={()=>setSow(!sow)} className='drop'>  <a href="#">Slimmming Operations</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul className={`topic ${sow?'display':''}`}>
                    <li><a href="#" onClick={()=>Navigate('/service')}>Gastric Ballon</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>Gastric Sleeve</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>Stomach Botox</a></li>
                </ul>
            </li>
              <li><div onClick={()=>setBa(!ba)} className='drop'>  <a href="#">Breast Augmentation</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul className={`topic ${ba?'display':''}`}>
                    <li><a href="#" onClick={()=>Navigate('/service')}>Chest Thightening</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}></a>Breast Augmentation</li>
                    <li><a href="#" onClick={()=>Navigate('/service')}>Breast Reductoin</a></li>
                </ul>
            </li>
              <li><div onClick={()=>setAb(!ab)} className='drop'>  <a href="#">Abdominoplasty</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul className={`topic ${ab?'display':''}`}>
                    <li><a href="#" onClick={()=>Navigate('/service')}>Body Sculpting</a></li>
                    <li><a href="#" onClick={()=>Navigate('/service')}></a>Tummy Tuck</li>
                </ul>
            </li>
            <li><a href="#" onClick={()=>Navigate('/service')}> Hands Up</a></li>
            <li><a href="#" onClick={()=>Navigate('/service')}> Lifting, Thighs Suctionning</a></li>
            <li><a href="#" onClick={()=>Navigate('/service')}>Buttick Augmentation</a></li>
            <li><a href="#" onClick={()=>Navigate('/service')}> Special Cosmetic Procedures</a></li>
            </ul>
            </li>
            <li><div className='drop'>  <a href="#">Contact</a><RiMessage2Line className='icon'  style={{color: '#ffffff', fontSize: '25px'}}/></div></li>
        </ul>
    
   
    <div>
    </div>
    </nav>

<div className='send'>
    <BsFacebook style={{color: '#0b1b67', fontSize: '25px'}}/>
    <BsTwitter style={{color: '#0b1b67 ', fontSize: '25px'}}/>

</div>
    <div class="icons">
        <div class="fas fa-bars" id="menu-btn" 
        onClick={()=>setActive(!active)}
        ></div>
    </div>


</header>

    
  )
}


export default Header


