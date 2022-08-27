import "./Select.css";

const Select = (props) => {
  return (
    <div className="select-box">
      <label htmlFor="choose-cart3563764">Choose Category</label>
      <select
        onChange={props.inputHandler}
        defaultValue={`Select ${props.val}`}
        id="choose-cart3563764"
      >
        <option value="">-------</option>
        <option value="nature">Nature</option>
        <option value="technology">Technology</option>
        <option value="politics">Politics</option>
        <option value="food">Food</option>
        <option value="travel">Travel</option>
        <option value="education">Education</option>
      </select>
    </div>
  );
};

export default Select;
