import React, { useState } from 'react'
import styles from "./Contact.module.scss"
export default function Contact() {
  const [value, setvalue] = useState({
    fname:"",
    lname:"",
    email:"",
    subject:"",
    date:"",
    detail:"",

  })
  const [disable, setdisable] = useState(false)

  const Handelsubmit = () =>{
    if(value.fname === "" || value.lname === "" || value.email === "" || value.subject === "" || value.detail === ""){
      setdisable(true)
    }
    
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setvalue({
      ...value,
      [name]: value,
    });
  };

 

  
  return (
    <div className={styles.cantact}>
       <div className={styles.contact__first}>
          <h1>Contact</h1>
          <p>CONTACT CLAIRE AT CAKED FOR BESPOKE<br/> WEDDING CAKES AND CELEBRATION CAKES IN<br/> DORSET.</p>
      </div>
      <div className={styles.contact__second}>
          <i>The Caked studio is closed for the first half of May while I take a short break. I’ll be reopening around the 16th May and please feel free to get in touch to check<br/> availability for your wedding or celebration, though I’ll be a bit slower to respond than normal. Thank you!</i>
          <p>For wedding enquiries, please provide your wedding date, venue and any other details you have and contact Claire below to discuss ideas and set up a consultation.</p>
          <p>To order a celebration cake or cupcakes, please contact Claire below to place your order, stating the type of cake you'd like, your event date and any other info. It’s best to order<br/> for your celebration as far in advance as possible and at least one week is needed.</p>
      </div>
      <div id="myDiv" className={styles.contact__third}>

            <div id='2' className={styles.contact__third__name}>
                <p style={{display: disable ? "block" : "none"}} className={styles.error}>
                  <h4> <span>i</span> Form submission failed. Review the following information: Name, Email Address, Subject, and Details.</h4>
                </p>
              {/* <p>Form submission failed. Review the following information: Name, Email Address, Subject, and Details.</p> */}

              <p>Name <span>(required)</span></p>
              <p style={{display: disable ? "block" : "none",width:"max-content"}} className={styles.error}>
                  <h4> <span>i</span>Name is required.</h4>
                </p>
              <div id='1' className={styles.contact__third__name__content}>
                <div className={styles.contact__third__name__content__input}>
                  <label>First Name</label>
                  <div className={styles.contact__third__name__content__input__field}>
                  <input value={value.fname} onChange={handleInputChange} type="text"  />
                  </div>
                </div>
                <div className={styles.contact__third__name__content__input}>
                  <label>Last Name</label>
                  <div className={styles.contact__third__name__content__input__field}>
                  <input value={value.lname} onChange={handleInputChange} type="text"  />
                  </div>
                </div>
                <div>

                </div>
              </div>
            </div>
            <div className={styles.contact__third__email}>
                  <label>Email Address <span>(required)</span></label>
                  <p style={{display: disable ? "block" : "none",width:"max-content"}} className={styles.error}>
                  <h4><span>i</span> Email Address is required.</h4>
                </p>
                  <div className={styles.contact__third__email__field}>
                          <input value={value.email} onChange={handleInputChange} type="text"  />
                  </div>
            </div>
            <div className={styles.contact__third__email}>
                  <label>Subject <span>(required)</span></label>
                  <p style={{display: disable ? "block" : "none",width:"max-content"}} className={styles.error}>
                  <h4> <span>i</span> Subject is required.</h4>
                </p>
                  <div className={styles.contact__third__email__field}>
                          <input value={value.subject} onChange={handleInputChange} type="text"  />
                  </div>
            </div>
            <div className={styles.contact__third__email}>
                  <label>Celebration date</label>
                  <div className={styles.contact__third__email__field}>
                          <input type="date"  />
                  </div>
            </div>
            <div id='5' className={styles.contact__third__type}>
              <p>Type of cake</p>
              <div className={styles.contact__third__type__content}>
              <input type="checkbox" />
              <p>Wedding cake inquiry</p>
              </div>
              <div className={styles.contact__third__type__content}>
              <input type="checkbox" />
              <p>Celebration cake inquiry</p>
              </div>
              <div className={styles.contact__third__type__content}>
              <input type="checkbox" />
              <p>Other</p>
              </div>
            </div>
            <div id='6' className={styles.contact__third__detail}>
                  <label>Number of guests</label>
                  <p>Let me know how many people you're looking to serve</p>
                  <div className={styles.contact__third__detail__field}>
                          <input type="text"  />
                  </div>
            </div>
            <div className={styles.contact__third__detail}>
                  <label>Details <span>(required)</span></label>
                  <p style={{display: disable ? "block" : "none",width:"max-content"}} className={styles.error}>
                  <h4><span>i</span> Details is required.</h4>
                </p>
                  <p>Let me know details such as venue, type of cake you're looking for and flavours/dietary requirements</p>
                  <div className={styles.contact__third__detail__textarea}>
                          <textarea value={value.detail} onChange={handleInputChange} type="text" rows="6" cols="6"  />
                  </div>
            </div>
            <div className={styles.contact__third__submit}>
              <button onClick={Handelsubmit} disabled={disable}>
                Submit
              </button>
            </div>
            <div className={styles.contact__third__btn}>
            <button>
            DOWNLOAD CAKED'S T&CS
              </button>
              <p>Email: xyz@gmail.com</p>
              <p>Tel: +91**********</p>
              <p>Lorem ipsum dolor,<br/> consectetur adipisicing</p>
            </div>  
      </div>
    </div>
  )
}
