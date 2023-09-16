import React from 'react'
import styles from "./Faqs.module.scss"
import { faqs } from '../../data/data'
export default function Faqs() {
  return (
    <div className={styles.faqs}>
       <div className={styles.faqs__first}>
          <h1>Menu</h1>
          <p>CAKED’S CAKE FLAVOURS MENU</p>
      </div>
      
      <div className={styles.faqs__second}>
            {/* <p>Caked's signature flavours are listed below. But remember, it's not just your cake design that is completely bespoke. If there is a particular flavour you're after that isn't listed<br/> below, I will make it happen! And it may even become one of Caked's signature flavours.</p> */}
            {faqs.map((data)=>{
              return (
                <div className={styles.faqs__second__content}>
                  <h1>{data.h1}</h1>
                  <h2>{data.h2}</h2>
                  <p>{data.p}</p>
                </div>
              )
            })}
      </div>
      <div className={styles.faqs__btn}>
            <button>DOWNLOAD T&C'S</button>
      </div>
    </div>
  )
}
