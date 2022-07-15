import "./BlogContent.css";
import Reviews from "../Reviews/Review";

const BlogContent = (props) => {
  return (
    <div className="jbuyf6frtfojgytftflgyugy">
      <div className="blog-img-sdytdf">
        <img
          src={`http://localhost:4500/img/blogs/${props.blog.image}`}
          alt="blog"
        />
      </div>
      <div className="cont-jygfyyatydsygsgdytfda">
        <div className="uyyhoiasdfhuagweg">
          <div className="blog-tit-kjsdf">{props.blog.title}</div>
          <div className="cat-gory-jgyygasdf">{props.blog.category}</div>
        </div>
        <div className="gyratingjighyft">
          <div>{props.blog.ratingsAverage}</div>
          <div className="hugyftrtfty">
            <img src="http://localhost:4500/icons/star-fill.svg" alt="star" />
          </div>
          <div>({props.blog.ratingsQuatity} People)</div>
        </div>
        <div className="blog-cont-fuygyf">{props.blog.content}</div>
      </div>
      
      <Reviews review={props.review} />
    </div>
  );
};

export default BlogContent;
