import "./Review.css";

const Reviews = (props) => {
  if (props.review.length === 0) return;
  return (
    <>
      <div className="border--line-bftyf"></div>
      <h2>Reviews</h2>
      <div className="review-cihuygyttrdtfg">
        {props.review.map((el, i) => (
          <div key={i + 1} className="rev-card-jggy">
            <div className="jnnshuygys-jjhuyg">
              <div className="jvyvhsjo-ifjyugfstdygfuys">
                <div className="huygsdhfijsidfusdgfygsd">
                  <span>
                    {el.user.firstname} {el.user.lastname}
                  </span>
                  <span>{el.rating} </span>
                </div>
                <img
                  className="star-imgjgytyf"
                  src="http://localhost:4500/icons/star-fill.svg"
                  alt="star"
                />
              </div>
              <div>{el.createdAt.split("T")[0]}</div>
            </div>
            <div>{el.content}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
