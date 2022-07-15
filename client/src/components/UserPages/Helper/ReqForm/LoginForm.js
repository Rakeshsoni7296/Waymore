import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "./Form.css";

import FormSwitch from "../SwitchForm/FormSiwtch";
import UserFormHeader from "./../HeaderTag/UserFormHeader";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Google from "../GoogleTag/Google";
import AuthContext from "../../../../Context/Auth/auth-context";

const switchContent = {
  alias: `Don't`,
  redirectUrl: "Register",
};

const Form = (props) => {
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const data = {
      email: enteredEmail,
      password: enteredPassword,
    };

    try {
      const res = await axios({
        url: "http://localhost:4500/api/v1/users/login",
        data,
        withCredentials: true,
        method: "post",
      });

      authCtx.login(
        res.data.token,
        res.data.data.user.firstname,
        res.data.data.user.photo
      );
      props.getSuccess("You successfully logged in.");
      navigate("/");
    } catch (err) {
      props.getError(err.response.data.message);
    }
  };

  return (
    <div className="login__form-container login-form-padding">
      <UserFormHeader caption="Welcome Back" title="Login to your Account" />
      <div>
        <form onSubmit={loginHandler}>
          <div>
            <Input
              val={enteredEmail}
              inputHandler={emailChangeHandler}
              type="email"
              title="Email"
              id="email"
            />
            <Input
              val={enteredPassword}
              inputHandler={passwordChangeHandler}
              type="password"
              title="Password"
              id="password"
            />
          </div>
          <div className="user-choice">
            <div>
              <input id="check-box" type="radio" />
              <label htmlFor="check-box">Remember me</label>
            </div>
            <div>
              <div>
                <a href="true">Forgot password?</a>
              </div>
            </div>
          </div>
          <Button text="Submit" />
        </form>
        <Google text="Login" />
      </div>
      <FormSwitch context={switchContent} />
    </div>
  );
};

export default Form;
