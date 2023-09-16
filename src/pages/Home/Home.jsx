import React from "react";
import styles from "./Home.module.scss";
import img1 from "../../assets2/asset3.jpeg"
import img2 from "../../assets2/asset4.jpeg"
import { home } from "../../data/data";
export default function Home() {
  return (
    <div  className={styles.home}>
      <div className={styles.home__first}>
        <h1>Caked.</h1>
        <p>
          BEAUTIFUL BESPOKE WEDDING CAKES AND
          <br /> CELEBRATION CAKES IN DORSET.
        </p>
      </div>
      <div  id="1" className={styles.home__second}>
        <p>
          Caked is passionate about all things cake, and truly dedicated to
          bringing you beautiful bespoke wedding cakes and celebration cakes.
          <br />A Caked wedding cake is designed especially for you - no two
          wedding cakes are the same. Whether you're looking for a rustic naked
          cake, or a multi-tiered gold and sparkly showstopper, Caked will
          ensure your cake is perfect for you.
        </p>
        <p>
          Caked is based in Dorset, and delivers throughout Wiltshire, Somerset
          and Hampshire, and further if needed. Caked also supplies dessert
          tables, birthday cakes, anniversary
          <br /> cakes, christening cakes, cupcakes, afternoon tea and more.
          Whenever cake is needed, Caked can help!
        </p>
        <div  className={styles.home__second__mid}>
            <div className={styles.home__second__mid__left}>
                <h1>Weddings</h1>
                <p>Bespoke wedding cakes dessert <br/>tabels and favours</p>
            </div>
            <div className={styles.home__second__mid__right}>
            <h1>Celebrartions</h1>
            <p>Cakes for all occasions</p>
            </div>
        </div>
        
      </div>
      <div style={{marginTop:"1rem"}} className={styles.home__line}>
          <hr/>
      </div>
      <div  className={styles.home__third}>
          <div className={styles.home__third__left}>
              <img src={img1} alt="" />
          </div>
          <div className={styles.home__third__center}>
            <h1>Meet Claire at Caked</h1>
            <p>Hi, I’m Claire, owner of Caked. I launched Caked in 2016 after retraining and gaining my diploma in Patisserie at Le Cordon Bleu, and love designing and creating cakes of all styles. I specialise in wedding cakes and love meeting my couples and designing and creating completely bespoke cakes for their big day. I also create cakes for birthdays and other celebrations in the local area.</p>
            <p>I run Caked from my studio in Shaftesbury, Dorset. Head over to the contact page to get in touch about your next event, I can’t wait to hear from you!</p>
          </div>
          <div className={styles.home__third__right}>
              <img src={img2} alt="" />
              <h3>Contact</h3>
              <p>Contact Claire at Caked for bespoke wedding cakes and celebration cakes in Dorset.</p>
          </div>
      </div>
      <div  className={styles.home__fourth}>
          <div className={styles.home__fourth__top}>
              <i>“Claire was really lovely and flexible in her approach - she ultimately delivered our dream wedding cake...<br/>
                  The taste and execution of the design were amazing!”</i>
          </div>
          <div className={styles.home__fourth__mid}>
            <p>— Samalie & Aniekan - married June 2018 (Temple Pier, London)</p>
          </div>
          <div className={styles.home__fourth__foot}>
              <p>Thank you to Alexander Newton Photography for the beautiful main photo, and also Captured by Roxy and Mark Atlas Photography</p>
          </div>
      </div>
      <div className={styles.home__line}>
          <hr/>
      </div>
      <div  className={styles.home__fifth}>
          {home.map((img, id)=>{
            return (
              <div>
                <img style={{ cursor: id === 0 || id === 3 ? "pointer" : "" }} id={id} src={img.img} alt="img" />
              </div>
            )
          })}
          <div style={{cursor:"pointer"}} className={styles.home__fifth__outer}>
              <div className={styles.home__fifth__outer__inner}>
                  <div className={styles.home__fifth__outer__inner__top}>
                      <p>Caked</p>
                  </div>
                  <div className={styles.home__fifth__outer__inner__foot}>
                      <p>AS FEATURED ON</p>
                      <i>Hitched</i>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
