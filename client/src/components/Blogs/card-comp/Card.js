import "./Card.css";

const shortVal = (data) => {
  if (data.length > 120) {
    return (data = data.substring(0, 120) + "...");
  }
  return data;
};

const Card = (props) => {
  return (
    <div className="card">
      <div className="img-content">
        <div>{props.cont.category}</div>
      </div>
      <div className="img">
        <img src={`http://localhost:4500/img/blogs/${props.cont.image}`} alt={props.cont.image} />
      </div>
      <div className="blog--content">
        <h2>{props.cont.title}</h2>
        <p>{shortVal(props.cont.content)}</p>
      </div>
      <div className="card--footer">
        <div className="user-info-card">
          <div className="ihuyyfgdytfasdasfdtaf">
            <img src={`http://localhost:4500/img/users/${props.cont.user.photo}`} alt="writer" />
          </div>
          <div>{props.cont.user.firstname}</div>
        </div>
        <div>
          <a href={`/blogs/${props.cont.slug}`} className="linktoReaad">
            <span>Read More</span> <span className="arrow-icon">&#8594;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
