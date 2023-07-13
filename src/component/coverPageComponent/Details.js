import React from 'react';
import Styles from '../Styles/index.module.scss';
import { FaFacebook } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

const Details = () => {
  return (
    <div className={Styles.about}>
      <div className={Styles.Service}>
        <div className={Styles.about}>
          <p className={Styles.span1}>
            <span>Deli</span>veroe
          </p>
          <p>
            Deliveroe allows you to send and receive items<br></br> from your
            doorstep to anywhere in Nigerian.
          </p>
        </div>
        <div>
          <h1>Quick Link</h1>
          <p>Track Shipment</p>
          <p>Booking Shipping</p>
          <p>Contact Us</p>
          <p>Terms and Conditions</p>
        </div>
        <div>
          <h1>Service</h1>
          <p>NationWild Delivery</p>
          <p>International Delivery</p>
          <p>Last Mile Delivery</p>
          <p>Relocation And Moving</p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>+2348100300200</p>
          <p>+2348100300600</p>
          <p>Suppor@deliveroe.com</p>
        </div>
      </div>
      <div className={Styles.copyright}>
        <div>
          <p>@2023 All copyrights reserved.Powered by Delivery Page</p>
        </div>
        <div className={Styles.Contact}>
          <div className={Styles.icons}>
            <FaFacebook />
          </div>
          <div className={Styles.icons}>
            <BsTwitter />
          </div>
          <div className={Styles.icons}>
            <BsInstagram />
          </div>
          <div className={Styles.icons}>
            <AiFillLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
