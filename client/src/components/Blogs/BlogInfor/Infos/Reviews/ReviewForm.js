import { useState } from "react";
import axios from "axios";
import "./ReviewForm.css";
import Input from "../../../../UserPages/Helper/Input/Input";
import TextArea from "./../../../NewBlog/BlogForm/Utils/TextArea/Textarea";

const ReviewForm = (props) => {
  const [rating, setRating] = useState(5);
  const [cont, setCont] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios({
        url: `http://localhost:4500/api/v1/blogs/${props.blog}/reviews`,
        withCredentials: true,
        method: "POST",
        data: {
          rating,
          content: cont,
        },
      });
      window.location.reload();
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const ratingChangeHand = (e) => {
    if (e.target.value <= 5 && e.target.value >= 1) setRating(e.target.value);
  };

  const contentChangeHand = (e) => {
    setCont(e.target.value);
  };

  const disapperHandler = () => {
    document
      .querySelector(".form-real-jfdgfgsdyfs")
      .classList.add("remove-form");
    props.closeHand();
  };

  return (
    <div className="form-real-jfdgfgsdyfs">
      <div onClick={disapperHandler} className="overlay-7687t6g64e"></div>
      <div className="form-cont-ihdfusdyfg">
        <div className="sahdfsvjfsudgfysyudhfos">
          <h2 className="asdhuagfasud">Submit Review</h2>
          <div>
            <img
              onClick={disapperHandler}
              id="close-imgndgtyftyd"
              src="http://localhost:4500/icons/close-btn-red.svg"
              alt="close"
            />
          </div>
        </div>
        <form onSubmit={formSubmitHandler}>
          <Input
            id="rating"
            title="Star Rating"
            type="number"
            inputHandler={ratingChangeHand}
            val={rating}
          />
          <TextArea
            inputHandler={contentChangeHand}
            val={cont}
            title="Brief Description"
            id="desc-cont-h"
          />
          <div className="sub-mit-btn-kjbhdf">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
