import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  username: "",
  profimg: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProv = (props) => {
  const initialToken = localStorage.getItem("token");
  const firstname = localStorage.getItem("username");
  const imginit = localStorage.getItem("profimg");

  const [token, setToken] = useState(initialToken);
  const [username, setUsername] = useState(firstname);
  const [profimg, setProfimg] = useState(imginit);

  const userLoggedIn = !!token;

  const loginHandler = (token, username, profimg) => {
    setToken(token);
    setUsername(username);
    setProfimg(profimg);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("profimg", profimg);
  };

  const logoutHandler = () => {
    setToken(null);
    setUsername(null);
    setProfimg(null);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("profimg");
  };

  const contextValue = {
    token,
    username,
    profimg,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
