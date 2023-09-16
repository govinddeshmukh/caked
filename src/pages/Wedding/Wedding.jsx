import React from 'react'
import styles from "./Wedding.module.scss"
import { wedding1, wedding2 } from '../../data/data'
export default function Wedding() {
  return (
    <div className={styles.wedding}>
      <div className={styles.wedding__first}>
        <h1>Wedding Cakes</h1>
        <p>
        BEAUTIFUL BESPOKE WEDDING CAKES IN DORSET.
        </p>
      </div>
      <div  id="1" className={styles.wedding__second}>
        <p>
        Your wedding day will be one of the most memorable days of your life, so everything has to be extra special. Caked<br/> provides truly bespoke wedding cakes, offering unique wedding cake designs for your special day.
        </p>
        <i>
          Caked is based in Dorset, and delivers throughout Wiltshire, Somerset
          and Hampshire, and further if needed. Caked also supplies dessert
          tables, birthday cakes, anniversary
          <br /> cakes, christening cakes, cupcakes, afternoon tea and more.
          Whenever cake is needed, Caked can help!
        </i>
        </div>
        <div style={{marginTop:"1rem"}} className={styles.wedding__line}>
          <hr/>
      </div>
      <div className={styles.wedding__third}>
        <p>Specialising in semi-naked cakes, buttercream-covered cakes and traditional-covered cakes, Claire - a trained cake designer and pastry chef - will design your dream wedding<br/> cake to perfectly complement your wedding day. </p>
        <p>A consultation and cake tasting is a complimentary part of your wedding cake booking, and afterwards you'll receive your bespoke cake designs. Take a look through Caked's<br/> signature cake menu here for cake flavours, but if there's something else you're after just let Claire know.</p>
        <p>As all wedding cakes are designed bespoke to each couple, there are no fixed prices, but as a guide 3 tier wedding cake prices start at £350 for a semi-naked cake, and £450<br/> for a fondant-covered cake. Once you're completely happy with your final design, a 20% deposit will be required to secure your wedding date.</p>
        <p>Contact Claire at Caked to enquire about your wedding cake, and scroll down to view the wedding cake gallery and see what Caked's happy clients have to say!</p>
        <button>contact Caked</button>
      </div>

      <div className={styles.wedding__fourth}>
          <div className={styles.wedding__fourth__content}>
                  <p>Take a look through the wedding cake galleries below for inspiration and head to the bottom of the page for some lovely words about Caked wedding<br/> cakes…</p>
                  <h1>Semi-naked & Buttercream Wedding Cake Gallery</h1>
          </div>
          <div className={styles.wedding__fourth__img}>
            {wedding1.map((img)=>{
              return (
                <div>
                  <img src={img.img} alt="" />
                </div>
              )
            })}
          </div>
      </div>
      <div  className={styles.wedding__fifth}>
          <div className={styles.wedding__fifth__content}>
                  <h1>Fondant Wedding Cake Gallery</h1>
          </div>
          <div className={styles.wedding__fourth__img}>
            {wedding2.map((img)=>{
              return (
                <div>
                  <img src={img.img} alt="" />
                </div>
              )
            })}
          </div>
      </div>
      <div  className={styles.wedding__sixth}>
            <div className={styles.wedding__sixth__content}>
                    <h1>Testimonials</h1>
                    <p>Lovely words from lovely couples</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“We chose a three tier cake with a different flavour in each layer and lost count of how many compliments we received about how delicious each layer tasted! We would highly recommend Claire and wouldn’t hesitate to use Caked Patisserie again. Many thanks Claire!”</i>
                <p>— Ellie & Matt, December 2022</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“The guests raved about the cake on the day and we didn’t have a single slice left!”</i>
                <p>— Carina & Patrick, August 2022</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Would 100% recommend Caked. Claire’s calm approach and care meant we really enjoyed the process, and the cake looked stunning on the day! We really enjoyed discussing ideas, tasters delivered to our door, and Claire’s liaison with our other suppliers took a lot of stress away from us!”</i>
                <p>— Fiona & Edward, August 2022</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Our wedding cake turned out better than we could have ever imagined and we look forward using Caked Patisserie again.”</i>
                <p>— Jade & Jacob, July 2022</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Claire made our fabulous pink wedding cake and we were totally thrilled. She listened to exactly what we wanted and the resulting look and taste were amazing - everyone loved it! She was also very efficient, easy to communicate with and also offered a cake stand to hire which was really helpful. Would throughly recommend using Caked Patisserie for your next celebration, thank you again Claire!”</i>
                <p>— Emily & Jack, May 2021</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Thank you so so much for the incredible cake that you made for our wedding on Saturday. It was exactly what we’d hoped for and not only did it look so beautiful but it tasted amazing too.</i>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>Everyone loved tucking in to a slice with some coffee or tea in order to refuel for more dancing!”</i>
                <p>— Millie & John, August 2021</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“A big massive thank you for our beautiful cake. It was everything we wanted and hoped for and the taste was... WOW, out of this world! We and our guests enjoyed it so much. You have an amazing talent!”</i>
                <p>— Charlie & Dan, married August 2021</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Just a note to say thank you SO much for our ABSOLUTELY DELICIOUS wedding cake!! We are still working our way through the chocolate layer. It is absolutely scrummy. The otter cake toppers are so gorgeous too!! Thank you so much for them. ”</i>
                <p>— Cecilia & Jonny, married July 2021</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Thank you so so much for the incredible wedding cake it was absolutely amazing!!! All the flavours were delicious as well and has gone down so well with the guests, can’t thank you enough”</i>
                <p>— Alicia & Alex, married July 2021</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Claire was amazing to work with, she was so easy to contact and she was so helpful adapting to the changes we had to make to our wedding day. With a scaled down wedding we decided to have a smaller cake using our original wedding cake design and it was so beautiful and tasted amazing. The sugar flowers in particular were so real looking, our guests couldn’t believe they weren’t real flowers. We can’t wait for 2 years time for our big wedding and the 3 tier cake from Claire. Thanks!”</i>
                <p>— Eilis & Greg, August 2020</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Wedding cake has a bit of a reputation for looking great but tasting awful and that was definitely NOT the case with Claire.
                    Each layer we chose was a different flavour and decorated immaculately! I feel like I should also point out that the flowers on the cake were not real. They were all made from Claire’s insane sugar flower work. We honestly couldn’t have been happier with the finished result and all of our guests said it looked and tasted amazing.</i>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>If you’re looking for a beautiful and fully bespoke wedding cake I would call Claire and I’m definitely going to be recommending her to everyone we know who gets married.”</i>
                <p>— Sarah & Greg, married September 2019</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Claire is queen of cake! My husband and I can’t recommend her enough. Our small but absolutely perfect wedding cake was the stuff of dreams, and my husband loved the taste of the cake so much that he’s already thinking about our next cake worthy event! With Caked you never have to compromise on taste over style, and Claire is so professional and committed to what you want out of your cake. She had so much patience with us, and all while being so friendly! She was even able to accommodate our vegan wedding party & guests. Can’t thank you enough Claire, looking forward to our next delicious cake!”</i>
                <p>— Abi & Ben, married August 2018</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Claire, just wanted to say a big thanks for our wedding cake! You did an absolutely amazing job both with the 3 tier cake and cutting cake which were all different flavours as well as the decorations.
Absolutely loved the flavours of the cake and can’t wait to have more! Don’t be surprised if we ask you to make our one year anniversary cake!”</i>
                <p>— Caroline & Nick, married July 2018</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Claire is a joy and a delight, and every part of working with her for our wedding cake was easy. She immediately understood our aesthetic, and designed a cake that was as beautiful as it was delicious. We were beyond thrilled with the results and are only sad that there were’t more leftovers. ”</i>
                <p>— Turi & William, married January 2018</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Claire did an absolutely amazing job with our wedding cake!! She was on the same page as us from the very beginning and understood our vision and even added to it! Not only when it came to decoration, but also with flavours. We wanted an autumn element to our top tier and she amazed us with three gorgeous flavours, and blew the guests away with the spiced apple which we eventually picked. We only wish we’d picked that for a larger tier now!!
Absolutely amazing job and would never hesitate to recommend her or order from her again. Thanks Claire! ❤❤”
</i>
                <p>— Rebecca & Nick, married October 2017</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“I had the most wonderful experience with Caked Patisserie, who designed and created the most beautiful and delicious wedding cake I could have hoped for! Claire is exceptional at design - and her cakes taste as great as they look. I loved the whole experience and was thrilled with the cake on the day. I regularly recommend Caked to friends and look forward to the next special occasion / excuse for another cake from Caked!”</i>
                <p>— Veronika & Rob, married October 2017</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Claire is so talented and such a lovely person. We were blown away by the wedding cake she designed and made for us, which included an absolutely delicious egg free layer (my husband is allergic to eggs). Highly recommend!”</i>
                <p>— Charlotte & Mandeep, married September 2017</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Caked created us a beautiful wedding cake which all our guests were raving about! We had two layers of white chocolate and raspberry and a layer of chocolate oreo. Both were delicious, the chocolate was all gone by the end of the night so we couldn’t even take any home! We also had a mini tower of doughnuts which went down a treat as well. Would definitely recommend.”</i>
                <p>— Aimee & Ste, August 2017</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Claire made our wedding cake back in July this year, she was very easy to work with and created a beautiful and delicious cake for us.She understands customer needs well and can definitely make your perfect cake dream come true :) I highly recommend Caked Patisserie to anyone looking for an outstanding service and friendly person to work with.”</i>
                <p>— Emilia & Toby, July 2017</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Can’t thank Claire enough for our amazing wedding cake not only did it look and taste incredible butClaire was very thorough and sent me lots of designs keeping me updated along the way. So I felt completely at ease. Was lovely to receive so many compliments for our guests.”</i>
                <p>— Carley & Tom, April 2017</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“We booked Caked Patisserie for our wedding cake in July 2016 and I can’t thank them enough for the job that was done...one month on and people are still talking about it!”</i>
                <p>— Talal & Aisha, July 2016</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Thank you so much Claire for the wonderful cake and favours you made for our wedding. I loved designing the cake with you and you translated all my Pinterest pins into the most perfect cake! I wish there had been more leftovers to bring home! ”“Thank you so much Claire for the wonderful cake and favours you made for our wedding. I loved designing the cake with you and you translated all my Pinterest pins into the most perfect cake! I wish there had been more leftovers to bring home! ”</i>
                <p>— Davina & Luke, June 2016</p>
            </div>
            <div className={styles.wedding__sixth__testimonial}>
                <i>“Designing a wedding cake with Claire was such an easy and enjoyable process. Many of my guests said it was the best wedding cake they had ever tried - carrot, fruit and chocolate. Claire even made hazelnut gluten free cup cakes as a little surprise as she knew one of my guests was a coeliac.Claire is an extremely talented professional and I would recommend her to anyone planning a wedding or special event.”</i>
                <p>— Vic & Tom, July 2015</p>
            </div>
            
            <div className={styles.wedding__sixth__btn}>
                <button>DOWNLOAD CAKED'S T&C'S</button>
            </div>
      </div>
    </div>
  )
}
