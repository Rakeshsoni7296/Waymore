import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import axios from "axios";
import "./BlogForm.css";
import Input from "../../../UserPages/Helper/Input/Input";
import Select from "./Utils/Select/Select";
import TextArea from "./Utils/TextArea/Textarea";

const BlogForm = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Waymore | Create New Blog";
  }, []);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");

  const titleChangeHand = (e) => {
    setTitle(e.target.value);
  };

  const categoryChangeHand = (e) => {
    setCategory(e.target.value);
  };

  const imgChangeHand = (e) => {
    setImg(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const descHandler = (e) => {
    setDesc(e.target.value);
  };

  const blogHandler = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("content", desc);
    form.append("category", category);
    form.append("image", img);

    try {
      await axios({
        url: "http://localhost:4500/api/v1/blogs",
        data: form,
        withCredentials: true,
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <form onSubmit={blogHandler}>
      <Input
        val={title}
        inputHandler={titleChangeHand}
        id="title"
        type="text"
        title="Blog Title"
      />
      <Select val={category} inputHandler={categoryChangeHand} />
      <Input
        inputHandler={imgChangeHand}
        id="image"
        type="file"
        title="Blog Image"
      />
      <TextArea
        val={desc}
        inputHandler={descHandler}
        title="Description"
        id="description-df-hnj"
      />
      <div className="submi2364">
        <input type="submit" />
      </div>
    </form>
  );
};

export default BlogForm;
