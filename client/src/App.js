import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import BlogInfo from "./components/Blogs/BlogInfor/BlogInfo";
import CreateBlog from "./components/Blogs/NewBlog/CreateBlog";
import Home from "./components/HomePage/Home";
import Login from "./components/UserPages/LoginPage/Login";
import Register from "./components/UserPages/RegisterPage/Register";
import AuthContext from "./Context/Auth/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    // <div className="App">
    //   <Home />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {!authCtx.isLoggedIn && <Route path="/login" element={<Login />} />}
        {!authCtx.isLoggedIn && (
          <Route path="/register" element={<Register />} />
        )}
        <Route
          path="/create-new-blog"
          element={
            authCtx.isLoggedIn ? <CreateBlog /> : <Navigate to="/login" />
          }
        ></Route>
        <Route path="/blogs/:id" element={<BlogInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
