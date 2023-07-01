import React from "react";
import Styles from "../Styles/index.module.scss";
import MyImg from "../../img/customer.jpeg"


const CustomerStories = ()=> {
    return(
        <div className={Styles.Stories}>
            <div><p className={Styles.headerStory}>Customer Stories</p></div>
            <div className={Styles.storyTitle}><h1>Deliveroe is everything you need for<br></br> the best shipping experience.</h1></div>
            <div className={Styles.customerStory}>
                <div className={Styles.comment}>
                <h2>Hannah Schmitt</h2>
               <p>"Lorem ipsum dolor sit amet,consectetur adipiscing elit.In eu rhoncus urna facilisis quisqueorci lectus sed nulla.amet,consectetur.Lorem ipsum dolor sit amet,consectetur adipiscing elit.In eu rhoncus urna facilisis quisqueorci lectus sed nulla.amet,consectetur."</p>
                </div>
                <div className={Styles.dotparent}>
            <span className={Styles.dot}></span>
            <span className={Styles.dot}></span>
            <span className={Styles.dot}></span>
                </div>
              
               <div className={Styles.container2}>
               <img src={MyImg} alt="customer" className={Styles.customer}/>
               </div>
            
            </div>
            
        </div>
    )
}

export default CustomerStories;