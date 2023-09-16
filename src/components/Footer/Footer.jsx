import React from 'react'
import styles from "./Footer.module.scss"
import {BiLogoTwitter, BiLogoInstagram, BiLogoPinterest, BiLogoFacebook} from "react-icons/bi"
export default function Footer() {
  return (
    <div className={styles.footer}>
        <p><span>Powered by</span> Squarespace.</p>
          <ul style={{letterSpacing:"2px"}}>
                        <li><BiLogoTwitter/></li>
                        <li><BiLogoInstagram/></li>
                        <li><BiLogoFacebook/></li>
                        <li><BiLogoPinterest/></li>
                    </ul>
    </div>
  )
}
