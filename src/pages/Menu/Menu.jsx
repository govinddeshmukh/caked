import React from 'react'
import styles from "./Menu.module.scss"
import { menu } from '../../data/data'
export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__first}>
          <h1>Menu</h1>
          <p>CAKED’S CAKE FLAVOURS MENU</p>
      </div>
      <div className={styles.menu__second}>
            {/* <p>Caked's signature flavours are listed below. But remember, it's not just your cake design that is completely bespoke. If there is a particular flavour you're after that isn't listed<br/> below, I will make it happen! And it may even become one of Caked's signature flavours.</p> */}
            {menu.map((data)=>{
              return (
                <div className={styles.menu__second__content}>
                  <h2>{data.h2}</h2>
                  <p>{data.p}</p>
                </div>
              )
            })}
      </div>
      <div className={styles.menu__btn}>
            <button>CONTACT CAKED TO ORDER NOW</button>
      </div>
    </div>
  )
}
