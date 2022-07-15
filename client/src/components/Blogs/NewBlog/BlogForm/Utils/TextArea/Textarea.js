import "./Textarea.css";

const TextArea = (props) => {
  return (
    <div className="text-area">
      <label htmlFor="textarena234">{props.title}</label>
      <textarea
        onChange={props.inputHandler}
        id={props.id}
        value={props.val}
        rows={10}
        cols={20}
      ></textarea>
    </div>
  );
};

export default TextArea;
