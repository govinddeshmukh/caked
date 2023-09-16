import React from 'react'
import styles from "./News.module.scss"
import img1 from "../../assets9/asset1.jpeg"
import img2 from "../../assets9/asset2.jpeg"
import img3 from "../../assets9/asset3.jpeg"
import img4 from "../../assets9/asset4.jpeg"
import img5 from "../../assets9/asset5.jpeg"
import img6 from "../../assets9/asset6.jpeg"
export default function News() {
  return (
    <div className={styles.news}>
      <div className={styles.news__first}>
          <h1>News</h1>
          <p>THE LATEST NEWS FROM CAKED, INCLUDING<br/> WEDDING CAKES, CELEBRATION CAKES AND MORE.</p>
      </div>
      <div className={styles.news__second}>
          <div className={styles.news__second__head}>
              <h1>Celebrate your lockdown birthday in style</h1>
              <p>June 15, 2020</p>
          </div>
          <div className={styles.news__second__mid}>
              <p>One positive thing to come out of this horrible Covid-19 situation (you have to focus on the positives right?) is that I’ve had so many more celebration cake orders! If you’re going<br/> to celebrate your birthday in lockdown, you may as well do it in style. And a show-stopping birthday cake will definitely help.</p>
              <p>From beautiful birthday cakes to boxes of cupcakes just to say hi to a loved one, I’ve been spreading some cakey joy around North Dorset over the last few weeks.</p>
              <p>My favourites are from customers who are unable to visit their friends or family, and so it’s a complete surprise when I turn up on their doorstep - a social-distancing friendly two<br/> meters away of course!</p>
              <p>Here are some highlights from the last few weeks…</p>
          </div>
          <div className={styles.news__second__secondMid}>
              <img src={img1} alt="" />
              <p>A GALAXY EFFECT BUTTERCREAM CAKE WITH SUGAR MILLENNIUM FALCON AND SUGAR LIGHT SABERS. STAR WARS LOGO AND PIPED DETAILING AROUND SIDE.</p>
          </div>
          <div className={styles.news__second__secondMid}>
              <img src={img2} alt="" />
              <p>SALTED CARAMEL BIRTHDAY CUPCAKES</p>
          </div>
          <div className={styles.news__second__secondMid}>
              <img src={img3} alt="" />
              <p>BUTTERCREAM EASTER CAKE WITH PASTEL WREATH OF BUTTERCREAM ROSETTES AND MINI EGGS.</p>
          </div>
          <div className={styles.news__second__secondMid}>
              <img src={img4} alt="" />
              <p>CAKE IN THE POST - DELIVERED THROUGH YOUR LETTERBOX TO ENJOY AT HOME.</p>
          </div>
          <div className={styles.news__second__secondMid}>
              <img src={img5} alt="" />
              <p>BUTTERCREAM BIRTHDAY CAKE WITH PASTEL BUTTERCREAM ROSETTES AND PERSONALISED BIRTHDAY PRESENTATION BOARD.</p>
          </div>
          <div className={styles.news__second__foot}>
              <p>Simply send me your full guest list (with all the names spelt correctly!) and I will do the rest. Favour place-settings start at £3 each for a simple heart or circle piped with a name.<br/> Each favour is presented in a clear cellophane bag tied with a ribbon colour of your choice.</p>
              <p>And if you order alongside a wedding cake, that’s three things ticked off your list in one go!</p>
              <p>For more info on favour place-settings click here. And if you would like to arrange a consultation to talk about your wedding cake and favours, contact Claire here.</p>
          </div>
      </div>
      <div style={{marginTop:"1rem"}} className={styles.news__line}>
          <hr/>
      </div>
      <div className={styles.news__third}>
          <div className={styles.news__third__top}>
              <div className={styles.news__third__top__left}>
                <div className={styles.news__third__top__left__content}>
                  <p>Caked Patisserie</p>
                  <p>Claire Thomas</p>
                  <p>Comment</p>
                </div>
                <p>Wedding Favours</p>
                <p>Wedding Favours, Favour Biscuits, Wedding Cakes, Wedding Planning, Cake Consultation</p>
              </div>
              <div className={styles.news__third__top__right}>
                    <p>likes</p>
                    <p>share</p>
              </div>
          </div>
          <div className={styles.news__third__mid}>
            <h1>Favours, tick. Place-settings, tick!</h1>
            <p>March 04, 2020</p>
          </div>
          <div className={styles.news__third__foot}>
              <p>With wedding planning, it’s all about working down the list to make sure you’ve covered everything off. And when it comes to around the 6 month mark, it’s all about the extra<br/> details. Cake, flowers, table decorations, favours, place-settings…</p>
              <p>What if you could tick two of those off in one go?</p>
              <p>At Caked, I’ve been designing and making beautiful biscuit favours for years. They can be decorated in any way and often feature the bride and groom’s initials or wedding date. </p>
              <p>They make the perfect favour - they’re small enough to fit in the tiniest of wedding handbags, edible so they normally never make it to those tiny handbags, and guests love them.</p>
              <p>What guests love even more is seeing their own name on a biscuit!</p>
              <p>Rather than spend extra money on a piece of paper and printing, which will be thrown in the bin at the end of the day, kill two birds with one stone and have your guests names<br/> piped beautifully onto decorated biscuits.</p>
          </div>
          <div className={styles.news__third__img}>
              <img src={img6} alt="" />
          </div>
          
      </div>
    </div>
  )
}
