// import React, { useState } from 'react'
import styles from "./Navbar.module.scss"
import {  NavLink } from 'react-router-dom'
import {BiLogoTwitter, BiLogoInstagram, BiLogoPinterest, BiLogoFacebook} from "react-icons/bi"
import { useEffect, useRef, useState } from "react"
import {BiMenu} from "react-icons/bi"
import {RxCross1} from "react-icons/rx"
export default function Navbar() {
    const [isDivOpen, setIsDivOpen] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsDivOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    const navlink = ({isActive}) =>{
        return {
            color: isActive ? "black" : "#999",
            textDecoration:"none",
            textTransform:"uppercase",
            fontSize:"12px",
            fontWeight: isActive ? "bold" : "",
            letterSpacing:"2px"
            
            
        }
    }
   
  return (
    <div className={styles.navbar}>
        <div className={styles.navbar__btn}>

                <button onClick={() => setIsDivOpen(!isDivOpen)}> {!isDivOpen ? <BiMenu/> : <RxCross1 />}</button>
        </div>
        <div className={styles.navbar__left}>
                <div>
                    <h1>CAKED.</h1>
                </div>
                <nav ref={divRef} className={isDivOpen && `${styles.active}`}>
                    <NavLink style={navlink} to='/'  ><li>Home</li></NavLink>
                    <li className={styles.outer}>wedding cake
                        
                        <ul className={styles.outer__inner}>
                        {/* <button onClick={()=>setactice(false)}>s/h</button> */}
                           <NavLink  style={navlink}  to="/wedding"> <li>Wedding Cakes</li></NavLink>
                           <NavLink  style={navlink} to="/feavours"> <li>Wedding favours</li></NavLink>
                           <NavLink  style={navlink} to='/menu'> <li>menu</li></NavLink>
                            <NavLink style={navlink}  to='/faqs'><li>faqs</li></NavLink>
                        </ul>
                        </li>
                    <NavLink style={navlink} to='/celebration' ><li>celebbration cake</li></NavLink>
                    <NavLink style={navlink} to='/about' ><li>about</li></NavLink>
                    <NavLink style={navlink} to='/news' ><li>news</li></NavLink>
                    <NavLink style={navlink} to='/contact' ><li>contact</li></NavLink>
                </nav>
        </div>
        <div className={styles.navbar__right}>
                    <ul style={{letterSpacing:"2px"}}>
                        <li><BiLogoTwitter/></li>
                        <li><BiLogoInstagram/></li>
                        <li><BiLogoFacebook/></li>
                        <li><BiLogoPinterest/></li>
                    </ul>
        </div>
    </div>
  )
}
