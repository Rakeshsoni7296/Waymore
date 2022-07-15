import axios from "axios";

import { useState, useEffect } from "react";
import Footer from "../../Base/Footer";
import Header from "../../Base/Header";
import Information from "./Infos/Information";
import NotFound from "../card-comp/NotFound";

const BlogInfo = (props) => {
  const [blog, setBlog] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios(
        `http://localhost:4500/api/v1${window.location.pathname}/blog`
      );
      setBlog(res.data.data.blog);
      setLoading(false);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? <NotFound /> : <Information info={blog} />}
      <Footer />
    </div>
  );
};

export default BlogInfo;
