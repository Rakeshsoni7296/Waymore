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
        <option value="Nature">Nature</option>
        <option value="Technology">Technology</option>
        <option value="Politics">Politics</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Education">Education</option>
      </select>
    </div>
  );
};

export default Select;
