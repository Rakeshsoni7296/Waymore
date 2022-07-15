import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./ShowBlogs.css";
import Card from "./card-comp/Card";
import Pagination from "./Pagination";
import NotFound from "./card-comp/NotFound";

const Blogs = (props) => {
  const [totalBlogs, setTotalBlogs] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState("1");

  const fetchBlogHandler = useCallback(async () => {
    try {
      const res = await axios(
        `http://localhost:4500/api/v1/blogs?page=${page}`
      );
      setTotalBlogs(res.data.records);
      setBlogs(res.data.data.blogs);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  const pageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    fetchBlogHandler();
  }, [fetchBlogHandler]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div id="removesometimelater">
      <h2>All Blogs</h2>
      <div className="page-heading"></div>
      {blogs.length > 0 ? (
        <>
          <div className="blog--container">
            {blogs.map((blog, i) => (
              <Card key={i + 1} cont={blog} />
            ))}
          </div>
          <Pagination
            pageNo={page}
            onPageChange={pageChange}
            len={totalBlogs}
          />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Blogs;
