import React, { useState, useEffect, useRef } from "react";
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import defaultImage from '../images/default-profile-image.jpg';

const AuthForm = props => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    profileImageUrl: ""
  });

  const { email, username, password, profileImageUrl } = formData;

  const { history, removeError, errors, buttonText, signUp, heading } = props;

  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const profileImageRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const sendKeyDown = (e, type) => {
    const key = e.key;
    switch (type) {
      case "email":
        if (key === "Enter") passwordRef.current.focus();
        break;
      case "password":
        if (key === "Enter") usernameRef.current ? usernameRef.current.focus() : submitRef.current.focus();
        break;
      case "username":
        if (key === "Enter") profileImageRef.current.focus();
        break;
      case "profileImage":
        if (key === "Enter") submitRef.current.focus();
        break;
      default:
        break;
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const authType = signUp ? "signup" : "signin";
    props
      .onAuth(authType, formData)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        return;
      });
  };

  props.history.listen(() => {
    removeError();
  });

  return (
    <div className="form fadeInDown">
      <div className="form__content">
        <Link to='/signin' className={classNames({
          active: !signUp
        })}>Sign In</Link>
        <Link to='/signup' className={classNames({
          active: signUp
        })}>Sign Up</Link>
        <div className="fadeIn first">
          <img src={defaultImage} alt="default avatar" id="icon" />
        </div>
        <div className="fadeIn second">
          <h2 className='form__heading'>{heading}</h2>
        </div>
        <form onSubmit={e => handleSubmit(e)}>
          {errors.message && (
            <div className="alert alert-danger">{errors.message}</div>
          )}
          <input
            className="fadeIn second"
            id="email"
            name="email"
            ref={emailRef}
            onKeyDown={e => sendKeyDown(e, "email")}
            onChange={e => handleChange(e)}
            value={email}
            type="text"
            placeholder='email'
          />
          <input
            className="fadeIn third"
            id="password"
            name="password"
            ref={passwordRef}
            onKeyDown={e => sendKeyDown(e, "password")}
            onChange={e => handleChange(e)}
            value={password}
            type="text"
            placeholder='password'
          />
          {signUp && (
            <div>
              <input
                className="fadeIn third"
                id="username"
                name="username"
                ref={usernameRef}
                onKeyDown={e => sendKeyDown(e, "username")}
                onChange={e => handleChange(e)}
                value={username}
                type="text"
                placeholder='Username'
              />
              <label htmlFor="image-url"></label>
              <input
                className="fadeIn third"
                id="image-url"
                name="profileImageUrl"
                ref={profileImageRef}
                onKeyDown={e => sendKeyDown(e, "profileImage")}
                onChange={e => handleChange(e)}
                type="text"
                value={profileImageUrl}
                placeholder='Avatar URL: (not required)'
              />
            </div>
          )}
          <input type="submit" ref={submitRef} className="fadeIn fourth" value={buttonText}>
          </input>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
