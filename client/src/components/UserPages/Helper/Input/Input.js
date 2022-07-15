import "./Input.css";

const Input = (props) => {
  return (
    <div className="input-box">
      <label htmlFor={props.id}>{props.title}</label>
      <input
        onChange={props.inputHandler}
        type={props.type}
        id={props.id}
        value={props.val}
      />
    </div>
  );
};

export default Input;
