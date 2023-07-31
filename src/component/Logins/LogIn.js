import React, { useState, useEffect } from 'react';
import Styles from '../Styles/index.module.scss';
import deliverybanner from '../../img/login-img.png';
import { FcGoogle } from 'react-icons/fc';
import { FaRegEyeSlash } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { LiaEyeSolid } from 'react-icons/lia';
import data from '../data/db.json';
import { loginHandler } from '../../api/loginHandler';
import { ImSpinner10 } from 'react-icons/im';

const LogIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [emailErrorMassage, setEmailErrorMessage] = useState('');
  const [passwordErrorMassage, setPasswordErrorMessage] = useState('');

   useEffect(() => {
     setTimeout(() => {
       setErrorMessage('');
     }, 3000);
   }, [errorMessage]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const resObj = {
        email: email,
        password: password,
      };
      setIsLoading(true);

      const res = await loginHandler(resObj);
      console.log(res);
      setIsLoading(false);
    } catch (error) {
      if (error.response.request.status === 422) {
        setErrorMessage('invalid Creditial');
      }

      if (error.response.request.status === 500) {
        setErrorMessage('Something went wrong');
      }
      setIsLoading(false);
    }
  };

  //  const allPost = [...response, resObj];
  //  data.post{allPost, post}

  // if(post){
  //   navigate('/home');
  // }else{
  //   return;
  // }

  const handleEmailChange = (e) => {
    const emailregex = /^[A-Z0-9]+@[A-Z]+.[A-Z]/;
    setEmail(e.target.value);
    if (!emailregex.test(email)) {
      setEmailErrorMessage('');
      setIsLoading(false)
    } else {
      setEmailErrorMessage('insert a valid email');
    }
  };

  const handlePasswordChange = (e) => {
    const passwordregex = /^[A-Z0-9]/;
    setPassword(e.target.value);
    if (!passwordregex.test(password)) {
      setPasswordErrorMessage('');
      setIsLoading(false)
    } else {
      setPasswordErrorMessage('insert valid password');
    }
  };

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
        <form onSubmit={handleClick}>
          <div className={Styles.invalid}>
            {errorMessage && <span>{errorMessage}</span>}
          </div>
          <div className={Styles.auth}>
            <p className={Styles.loginPara}>Email address</p>
            <div className={Styles.errormge}>
              <input
                placeholder="e.g example@gmail.com"
                value={email}
                type="email"
                className={Styles.Inputfield}
                onChange={handleEmailChange}
              />
            </div>
            <div className={Styles.passwordinput}>
              <p className={Styles.loginPara}>Password</p>
              <div className={Styles.errormge}>
                <input
                  placeholder="enter password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  className={Styles.Inputfield}
                  onChange={handlePasswordChange}
                />

                <div className={Styles.vissiblity}>
                  {showPassword ? (
                    <LiaEyeSolid
                      color="black"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <FaRegEyeSlash
                      color="black"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
                {passwordErrorMassage && (
                  <span className={Styles.errorMge}>
                    {passwordErrorMassage}
                  </span>
                )}
              </div>
            </div>
            <div>
              <p className={Styles.forgetPassword}>Forget password?</p>
            </div>
          </div>
          <div>
            <button
              disabled={!email || !password}
              className={Styles.btn3}
              type="text"
            >
              {isLoading ? (
                <ImSpinner10 className={Styles.Spinner} />
              ) : (
                'Submit'
              )}
            </button>

            <p className={Styles.br}>OR</p>
            <button className={Styles.googleAuth}>
              <FcGoogle />
              Signin with Google
            </button>
          </div>
        </form>
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
