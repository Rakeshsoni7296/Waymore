import BlogForm from "./BlogForm/BlogForm";
import Header from "../../Base/Header";
import Footer from "../../Base/Footer";

const CreateBlog = () => {
  return (
    <div className="blog-form-container">
      <Header />
      <div className="blog-container756">
      <h2 className="heading-23871624">Create New Blog</h2>
        <BlogForm />
      </div>
      <Footer />
    </div>
  );
};

export default CreateBlog;
