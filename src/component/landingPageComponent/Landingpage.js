import React from "react";
import Styles from "../Styles/index.module.scss";

const LandingPage = ()=>{
    return(
        <div>
            <h1>We provide prompt and <br></br>effective delivery services.</h1>
<p>Meet deliveroe that makes sure you packages are delivered on time and in perfect condition. 
 <br></br>Our fleets of reliable driver navigate through busy street and traffick with ease to ensures your<br></br>
     deliveries arrive at their destination on schedule.</p>
     <div className={Styles.trackinginput}>
     <input placeholder="Enter tracking number" type="text"/>
     <button className={Styles.btn2}>Track Now</button>
     </div>
        </div>
    )
}
export default LandingPage;