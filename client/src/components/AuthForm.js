import React, { useState, useEffect, useRef } from "react";

const AuthForm = props => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    profileImageUrl: ""
  });

  const { email, username, password, profileImageUrl } = formData;

  const { history, removeError, errors, heading, signUp } = props;

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
        if (key === "Enter") usernameRef ? usernameRef.current.focus() : submitRef.current.focus();
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
    const authType = props.signUp ? "signup" : "signin";
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
    <div className="form">
      <div className="col-md-4 col-sm-6">
        <form onSubmit={e => handleSubmit(e)}>
          <h2 className="form__heading">{heading}</h2>
          {errors.message && (
            <div className="alert alert-danger">{errors.message}</div>
          )}
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            id="email"
            name="email"
            ref={emailRef}
            onKeyDown={e => sendKeyDown(e, 'email')}
            onChange={e => handleChange(e)}
            value={email}
            type="text"
          />
          <label htmlFor="password">Password:</label>
          <input
            className="form-control margin-bottom"
            id="password"
            name="password"
            ref={passwordRef}
            onKeyDown={e => sendKeyDown(e, 'password')}
            onChange={e => handleChange(e)}
            value={password}
            type="password"
          />
          {signUp && (
            <div>
              <label htmlFor="username">Username:</label>
              <input
                className="form-control"
                id="username"
                name="username"
                ref={usernameRef}
                onKeyDown={e => sendKeyDown(e, 'username')}
                onChange={e => handleChange(e)}
                value={username}
                type="text"
              />
              <label htmlFor="image-url">Avatar URL:</label>
              <input
                className="form-control margin-bottom"
                id="image-url"
                name="profileImageUrl"
                ref={profileImageRef}
                onKeyDown={e => sendKeyDown(e, 'profileImage')}
                placeholder="not required"
                onChange={e => handleChange(e)}
                type="text"
                value={profileImageUrl}
              />
            </div>
          )}

          <button ref={submitRef} className="btn__auth" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
