import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./Form.css";
import UserFormHeader from "../HeaderTag/UserFormHeader";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Google from "../GoogleTag/Google";
import FormSwitch from "../SwitchForm/FormSiwtch";
import AuthContext from "../../../../Context/Auth/auth-context";

const switchContent = {
  alias: `Already`,
  redirectUrl: "Login",
};

const RegisterForm = (props) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const [enteredFirstName, setenteredFirstName] = useState("");
  const [enteredLName, setEnteredLName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredCPassword, setEnteredCPassword] = useState("");

  const firstNHandler = (e) => {
    setenteredFirstName(e.target.value);
  };

  const lastNHandler = (e) => {
    setEnteredLName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const confirmPHandler = (e) => {
    setEnteredCPassword(e.target.value);
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    const data = {
      firstname: enteredFirstName,
      lastname: enteredLName,
      email: enteredEmail,
      password: enteredPassword,
      passwordConfirm: enteredCPassword,
    };

    try {
      const res = await axios({
        url: "http://localhost:4500/api/v1/users/register",
        data,
        withCredentials: true,
        method: "post",
      });

      authCtx.login(
        res.data.token,
        res.data.data.user.firstname,
        res.data.data.user.photo
      );
      navigate("/");
    } catch (err) {
      props.getError(err.response.data.message);
    }
  };
  return (
    <div className="login__form-container register-form-padding">
      <UserFormHeader caption="New to Waymore" title="Create your Account" />
      <div>
        <form onSubmit={registerHandler}>
          <div className="linera-box1231">
            <Input
              val={enteredFirstName}
              inputHandler={firstNHandler}
              type="text"
              title="First Name"
              id="firstname"
            />
            <Input
              val={enteredLName}
              inputHandler={lastNHandler}
              type="text"
              title="Last Name"
              id="lastname"
            />
          </div>
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
            <Input
              val={enteredCPassword}
              inputHandler={confirmPHandler}
              type="password"
              title="Confirm Password"
              id="confirmpassword"
            />
          </div>
          <div className="user-choice">
            <div className="privacy-policy">
              <input type="checkbox" id="policy" />
              <label htmlFor="policy">
                Please Agree <a href="true">Terms and conditions</a>
              </label>
            </div>
          </div>
          <Button text="Submit" />
        </form>
        <Google text="Register" />
      </div>
      <FormSwitch context={switchContent} />
    </div>
  );
};

export default RegisterForm;
