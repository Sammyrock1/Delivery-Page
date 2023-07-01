import React from "react";
import Styles from "../Styles/index.module.scss";

const Navbar = ()=>{
    return(
<div className={Styles.Header}>
    <div className={Styles.logo}><span>Deli</span>veroe</div>
    <div className={Styles.leftheader}>
    <p>About</p>
    <p>Service</p>
    <p>Shipping Tracking</p>
    <p>Contact Us</p>
    <button className={Styles.btn}>Booking Shipping</button>
    </div>
    
</div>
    )
}
export default Navbar;