import "./Button.css";

const Button = (props) => {
  return (
    <div className="btn-wrap">
      <button className="submit-btn">{props.text}</button>
    </div>
  );
};

export default Button;
