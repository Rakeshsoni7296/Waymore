import { useState } from "react";

import "./UserProf.css";
import ReviewForm from "../Reviews/ReviewForm";

const UserProfile = (props) => {
  const [showForm, setShowForm] = useState(false);

  const btnHandler = () => {
    if (showForm === true) return;
    setShowForm(true);
  };

  const closeButtonHand = () => {
    setShowForm(false);
  };

  return (
    <>
      {showForm ? (
        <ReviewForm blog={props.blogId} closeHand={closeButtonHand} />
      ) : (
        ""
      )}
      <div className="user-kbjbsdgyt">
        <div className="userImg-bfsdfy">
          <img
            src={`http://localhost:4500/img/users/${props.user.photo}`}
            alt="user"
          />
        </div>
        <div>
          {props.user.firstname} {props.user.lastname}
        </div>
        <div className="iniusdhfuasaytsdfsjdof">
          <button onClick={btnHandler}>Submit Review</button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
