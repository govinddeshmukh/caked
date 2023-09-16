import React from 'react'
import styles from "./About.module.scss"
import img from "../../assets/about2.jpeg"
export default function About() {
  return (
    <div className={styles.about}>
       <div className={styles.about__first}>
          <h1>About Caked</h1>
          <p>CAKED IS NOW BASED IN SHAFTESBURY, DORSET.<br/> READ HOW CAKED BEGAN.</p>
      </div>
      <div className={styles.about__second}>
          <h2>Caked is run entirely by Claire, from her cake studio in North Dorset. She makes it her mission to design and create beautiful,<br/> contemporary cakes for all occasions. Here’s a little more about her story…</h2>
          <p>Caked is the culmination of years of passion, practice and ambition. After several years working in digital media - and moonlighting as a serious amateur baker - I finally realised<br/> my dream of studying at the world famous Le Cordon Bleu school in London to train to become a pastry chef. It was tough, but I instantly fell in love. Shortly after gaining my<br/> diploma, Caked was born.</p>
          <p>Caked is all about celebrating with beautiful and delicious cakes, whether it's a bespoke celebration cake, a beautiful wedding cake or a luxury dessert table. </p>
          <p>Each unique wedding cake design is carefully created for your wedding. I work closely with my clients to ensure you are completely happy from start to finish, and that your cake<br/> design is perfect for you.</p>
          <p>Since launching Caked in 2016, I have had the pleasure of working with a number of high end venues in and around London, including the Lansdowne Club, Hedsor House and<br/> The Orangery at Kensington Palace, and I’ve enjoyed seeing my work published in Wedding Cakes Magazine and London Bride Magazine. In early 2019, I made the big decision<br/> to leave the big smoke and relocate my life and Caked to the beautiful West Country, where I now work from a beautiful cake studio just outside Shaftesbury in north Dorset.</p>
          <p>The last two years has hit the wedding industry hard but I’ve been amazed at the support of my clients and the resilience of all the talented, hard-working wedding supplier<br/> around me. We’re now looking forward to the busiest years we’ve ever seen for weddings and I can’t wait!</p>
      </div>
      <div className={styles.about__third}>
          <img src={img} alt="" />
      </div>
      <div className={styles.about__fourth}>
          <p>THANK YOU TO @ATLASWEDDINGPHOTOGRAPHY FOR THE PHOTO</p>
      </div>
    </div>
  )
}
