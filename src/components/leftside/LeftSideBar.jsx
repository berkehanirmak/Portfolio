import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import { IoPerson } from "react-icons/io5";
import { MdOutlineNotes } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import './leftSide.scss'

const LeftSideBar = () => {
  return (
   
       <header className='side-bar'>
        <div className='side-bar__logo'>
         <a href="#home">Berkehan Irmak</a>
        </div>
       
        <nav className='side-bar__menu'>
            <ul className='side-bar__menu__list'>
             <li className='side-bar__menu__list__item'>
                <AiFillHome/>
                <a href="#home">Home</a>
            </li>
             
             <li  className='side-bar__menu__list__item'>
                 <IoPerson />
                 <a href="#about">About</a>
            </li>
            
            <li  className='side-bar__menu__list__item'>
                <MdOutlineNotes />
                <a href="#service">Service</a>
             </li>
             <li  className='side-bar__menu__list__item'>
                <FaBriefcase />
                <a href="#portfolio">Portfolio</a>
             </li>
             <li  className='side-bar__menu__list__item'>
                <TiMessages />
                <a href="#contact">Contact</a>
             </li>
             
             
            </ul>
        </nav>

       </header>
    
  )
}

export default LeftSideBar
