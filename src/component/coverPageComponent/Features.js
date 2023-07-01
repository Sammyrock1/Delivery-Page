import React from "react";
import Styles from "../Styles/index.module.scss";
import {FaHeadSideMask} from "react-icons/fa";
import {RiNotificationBadgeFill} from "react-icons/ri";
import {FaMobile} from "react-icons/fa";
import {FaShippingFast} from "react-icons/fa";
import {RiTimerFill} from "react-icons/ri";
import {MdBookOnline }from "react-icons/md";



const Features = () =>{
    return(
        <div className={Styles.Features}>
            <h1 className={Styles.featuresHeader}>Our Features</h1>
            <div className={Styles.FeaturesTr}>
            <div className={Styles.FeatureTitle}>
                <MdBookOnline color="orange" font-size="30px"/>
                <h2>Online Booking</h2>
                <p>Welcome to our online booking platform,where convenience and ease meet to give you the best possible experience when it comes to making reservation.</p>
            </div>
            <div className={Styles.FeatureTitle}>
            <FaMobile color="orange" fontSize="30px"/>
                <h2>Mobile Responsive</h2>
                <p>We understand that convenience and flexibility are key,and that's why we've optimized our site for mobile use.So go ahead and book that shipment!</p>
            </div>
            <div className={Styles.FeatureTitle}>
                <FaShippingFast color="orange" fontSize="30px"/>
            <h2>Online Tracking</h2>
            <p>We know how important it is for you to stay informed about the status of your shipments.We've  made it easy for you to  track your package on our website.</p>
            </div>
            <div className={Styles.FeatureTitle}>
                <RiTimerFill color="orange" fontSize="30px" />
                <h2>24/7 Support</h2>
                <p>Welcome to our online booking platform, convenience and ease meet to give you the best possible experience when it 
                comes to making reservation.</p>
            </div>
            <div className={Styles.FeatureTitle}>
                <RiNotificationBadgeFill color="orange" fontSize="30px"/>
                <h2>Notification</h2>
                <p>We know how important it is for you to stay informed about the status of your shipment.We've made it easy for you to track your package on our website.</p>
            </div>
            <div className={Styles.FeatureTitle}>
                <FaHeadSideMask color="orange" fontSize="30px"/>
                <h2>Trained Riders</h2>
                <p>We understand that convenience and flexibility are key ,and that's why we've optimized our site for mobile use.So go ahead and book that shipment.</p>
            </div>
            </div>
        </div>

    )
}
export default Features;