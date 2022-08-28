import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/Auth/auth-context";
import Dropdown from "./Auxiliary/Dropdown";

import "./Header.css";

const downArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon-show"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const upArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon-show"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const profile = ["My Account", "My Blogs", "Change Password"];
const categories = ["Nature", "Technology", "Education", "Politics", "Food"];

const Header = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const { isLoggedIn } = authCtx;

  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfDropdown, setShowProfDropdown] = useState(false);

  const categoryDropdownHand = () => {
    setShowDropdown((showDropdown) => !showDropdown);
  };

  // const eventHandler = () => {
  //   setShowDropdown(false);
  //   setShowProfDropdown(false);
  // };

  // document.addEventListener("mousedown", (e) => {
  //   if (
  //     !e.target.classList.contains("cat-wrapper") &&
  //     (showDropdown || showProfDropdown)
  //   ) {
  //     eventHandler();
  //   } else {
  //     document.removeEventListener("mousedown", eventHandler);
  //   }
  // });

  const profileDropdownHand = () => {
    setShowProfDropdown((prev) => !prev);
  };

  const logoutHandler = async() => {
    console.log(`I am logging out`);
    authCtx.logout();
    try {
      await axios({
        url: `http://localhost:4500/api/v1/users/logout`,
        withCredentials: true,
        method: "POST",
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };

  return (
    <nav className="navbar">
      <ul className="nav">
        <li className="select">
          <div>
            <a href="/">
              <img src="http://localhost:4500/icons/logo.svg" alt="logo" />
            </a>
          </div>
        </li>
        <li>
          <a href="/create-new-blog">Create New Blog</a>
        </li>
        <li className="category-instance">
          <div
            className="category-field"
            href="true"
            onClick={categoryDropdownHand}
          >
            <div>Categories</div>
            <div>{showDropdown ? upArrow : downArrow}</div>
          </div>
          {showDropdown && <Dropdown items={categories} />}
        </li>
        <li>
          <a className="scroll-animate" href="#about-us-pa687yuyg7">About Us</a>
        </li>
      </ul>
      <ul className="nav nav--2">
        <li className="search--box">
          <div>
            <img src="http://localhost:4500/icons/search.svg" alt="search" />
          </div>
          <div>Search</div>
        </li>
        {!isLoggedIn && (
          <li>
            <a href="/login">Login</a>
          </li>
        )}
        {isLoggedIn && (
          <li className="profile67547">
            <div className="pro-987987" onClick={profileDropdownHand}>
              <div className="us-prof-img-huygyuyt">
                <img className="us-prof-img-huygyuyt"
                  src={`http://localhost:4500/img/users/${authCtx.profimg}`}
                  alt="user"
                />
              </div>
              <div className="bsdfbsiuhh">
                <span>{authCtx.username}</span>
                <span>{showProfDropdown ? upArrow : downArrow}</span>
              </div>
            </div>
            {showProfDropdown && (
              <Dropdown
                className="profile--menu9878"
                makeLogout={logoutHandler}
                items={profile}
                vicks={true}
              />
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
