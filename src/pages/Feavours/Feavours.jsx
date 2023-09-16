import React from 'react'
import styles from "./Feavours.module.scss"
import img from "../../assets4/asset1.jpeg"
import { feavours } from '../../data/data'
export default function Feavours() {
  return (
    <div className={styles.feavours}>
       <div id='1' className={styles.feavours__first}>
        <h1>Wedding Favours</h1>
        <p>
        WEDDING FAVOUR BISCUITS AND MACARONS IN<br/> DORSET.
        </p>
      </div>
      <div id='2' className={styles.feavours__second}>
        <div className={styles.feavours__second__top}>
            <h1>For a personal touch to say thank you to your guests, edible favours are the perfect option.</h1>
        </div>
        <div className={styles.feavours__second__foot}>
              <div className={styles.feavours__second__foot__left}>
                    <img src={img} alt="" />
              </div>
              <div className={styles.feavours__second__foot__right}>
                      <h1>Place-setting wedding<br/> favours</h1>
                      <p>Delicious biscuit favours that also act as place-settings for your guests. Simply send me your guest list, and names will be stencilled or piped onto beautiful biscuits. Presented in a clear cellophane bag and tied with a ribbon of your choice.</p>
                      <p>Starting at £4 each, a completely bespoke design. Your guests will love these!</p>
              </div>
        </div>
      </div>
      <div className={styles.feavours__third}>
        <p>Personalised decorated biscuits perfectly complement your wedding day and come presented in cellophane bags with matching ribbon. They can even make quirky place<br/> settings for your guests.</p>
        <p>Macarons are also popular either to serve alongside your wedding cake, to decorate your cake or as a show-stopping macaron tower.</p>
        <p>Add cupcakes alongside your wedding cake to easily cater for any allergies or other dietary requirements. </p>
      </div>
      <div className={styles.feavours__fourth}>
          <div className={styles.feavours__fourth__img}>
          {feavours.map((img)=>{
              return (
                <div>
                  <img src={img.img} alt="" />
                </div>
              )
            })}
          </div>
      <p>Thank you to Mindy Coe Photography for the beautiful top photo and Robin Goodlad for the place-setting favour</p>
      </div>
    </div>
  )
}
