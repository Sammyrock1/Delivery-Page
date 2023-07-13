import React, { useState } from 'react';
import Styles from '../Styles/index.module.scss';
import deliverybanner from '../../img/login-img.png';
import { FcGoogle } from 'react-icons/fc';
import { FaRegEyeSlash } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { LiaEyeSolid } from 'react-icons/lia';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={Styles.deliveryLogsTr}>
      <div className={Styles.logs}>
        <h1 className={Styles.logo1}>
          delivery<span className={Styles.page}>Page</span>
        </h1>
        <div>
          <p className={Styles.loginPara}>
            Don't have an account?
            <Link to="" className={Styles.createAccount}>
              Create Now
            </Link>
          </p>
        </div>

        <div className={Styles.auth}>
          <div>
            <p className={Styles.loginPara}>Email address</p>
            <input
              placeholder="e.g example@gmail.com"
              value={email}
              type="email"
              className={Styles.Inputfield}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={Styles.passwordinput}>
            <p className={Styles.loginPara}>Password</p>
            <input
              placeholder="enter password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              className={Styles.Inputfield}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <div className={Styles.vissiblity}>
              {showPassword ? (
                <LiaEyeSolid onClick={() => setShowPassword(false)} />
              ) : (
                <FaRegEyeSlash onClick={() => setShowPassword(true)} />
              )}
            </div>
          </div>
          <div>
            <p className={Styles.forgetPassword}>Forget password?</p>
          </div>
        </div>
        <div>
          <button
            className={Styles.btn3}
            type="button"
            onClick={() => {
              navigate('/home');
            }}
          >
            Login
          </button>
          <p className={Styles.br}>OR</p>
          <button className={Styles.googleAuth}>
            <FcGoogle />
            Signin with Google
          </button>
        </div>
      </div>
      <img
        src={deliverybanner}
        alt="deliverbanner"
        className={Styles.deliverybanner}
      />
    </div>
  );
};
export default LogIn;
