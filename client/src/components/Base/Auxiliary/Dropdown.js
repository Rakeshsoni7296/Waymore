import "./Dropdown.css";

const Dropdown = (props) => {
  return (
    <div className={`cat-wrapper ${props.className ? props.className : ""}`}>
      {props.items.map((item, index) => (
        <div key={`${index + 1}`} className="hover-effect drop-down-vals">
          <a href="true">{item}</a>
        </div>
      ))}
      {props.vicks ? (
        <div
          className="hover-effect log--out87264864"
          onClick={props.makeLogout}
        >
          Logout
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dropdown;
