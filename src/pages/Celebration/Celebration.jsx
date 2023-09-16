import React from 'react'
import styles from "./Celebration.module.scss"
import { celebration } from '../../data/data'
export default function Celebration() {
  return (
    <div className={styles.celebration}>
      <div className={styles.celebration__first}>
          <h1>Celebration cakes</h1>
          <p>CELEBRATION CAKES FOR ALL OCCASIONS IN<br/> DORSET.</p>
      </div>
      <div className={styles.celebration__second}> 
          <i>The Caked studio is closed for the first half of May while I take a short break. I’ll be reopening around the 16th May and please feel free to get in touch to check<br/> availability for your celebration, though I’ll be a bit slower to respond than normal. Thank you!</i>
          <p>6 Cupcakes for £21 / 12 cupcakes for £36*</p>
          <p>Celebration cakes from £45 for 6” / £60 for 8” / £80 for 10”*</p>
          <p>*Free delivery to SP7 and SP8 postcodes. For all other areas, a quote will be given. Please allow at least 1 weeks’ notice for celebration cake orders. At certain times, some<br/> flavours may not be available.</p>
          <p>Caked can create personalised birthday cakes with any theme - take a look through the celebration cake gallery below for inspiration.</p>
          <button>CONTACT CAKED TO ORDER</button>
      </div>
      <div className={styles.celebration__third}>
            <div className={styles.celebration__third__top}>
                <p>Traditional and novelty celebration cakes</p>
            </div>
            <div className={styles.celebration__third__foot}>
              {celebration.map((data)=>{
                return (
                  <div>
                    <img src={data.img} alt="" />
                  </div>
                )
              })}
            </div>
      </div>
      <div className={styles.celebration__fourth}>
                <p>Prices start at £45 for naked celebration cakes, and £70 for fondant-covered celebration cakes.</p>
                <p>Other treats are also available, including cupcakes, mini cakes, macarons and more!</p>
                <p>Bespoke cupcake and mini cake prices start at £21 for a box of 6, or £36 for a box of 12 (one flavour per box)</p>
                <p>All of Caked’s signature cakes are made to order using high quality ingredients, so it's best to place orders as far in advance as possible. Let Claire know what kind of decoration<br/> you're after, and how many guests you'll be serving, and she'll come back to you quickly with a design and a quote.</p>
                <p>All of Caked’s delicious flavours are available for bespoke celebration cakes. You can view the whole menu here.</p>
                <button>CONTACT CAKED TO ORDER</button>
      </div>
      <div className={styles.celebration__fifth}>
        <h2>Testimonials</h2>
        <div className={styles.celebration__fifth__testimonial}>
        <i>“Oh my gosh. I have just spoken to my mum & relatives & friends that are still at her place celebrating with her.<br/>
Everyone loved the cake & all of them said how yummy & delicious it was.<br/>
Thank you. So grateful for finding you.”</i>
          <p>— Annette, March 2022</p>
        </div>
        <div className={styles.celebration__fifth__testimonial}>
        <i>“Thank you so much for the scrummy vegan chocolate and salted caramel cake. Everyone really enjoyed it, especially the vegan contingent.<br/>But most importantly Dad loved it.</i>
            <i>He had a great evening, so thank you for helping to make his evening really special.”</i>
          <p>— Karen, March 2022</p>
        </div>
        <div className={styles.celebration__fifth__testimonial}>
        <i>“Thanks a lot for the great service, my mother in law loved the cake!</i>
        <i>We will for sure order with you again next time there is something to celebrate.”</i>
          <p>— Anja, March 2021</p>
        </div>
        <div className={styles.celebration__fifth__testimonial}>
        <i>“We ordered a surprise birthday cake for my wife and we were really pleased with the appearance, taste, and overall service. We chose the strawberry and Prosecco<br/> flavour, which was subtle and not overpowering. The decoration and icing were superb and we will definitely use this company again. We all loved the cake and<br/> Claire was responsive and friendly.</i>
        <i>I would strongly recommend Caked Patisserie.”</i>
          <p>— Chris, March 2021</p>
        </div>
        <div className={styles.celebration__fifth__testimonial}>
        <i>“Claire was a delight to work with and helped us fulfil our wishes for a very last minute cake for a 60th birthday after we had to change plans due to Covid. It was<br/> absolutely delicious with lovely decorations and hand delivered much to Mum’s surprise!”</i>
          <p>— Jess, January 2021</p>
        </div>
      </div>
    </div>
  )
}
