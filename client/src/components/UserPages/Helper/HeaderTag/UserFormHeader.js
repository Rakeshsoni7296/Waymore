import "./UserFormHeader.css";

const UserFormHeader = (props) => {
  return (
    <div className="form--start">
      <div>{props.caption}</div>
      <h2>{props.title}</h2>
    </div>
  );
};

export default UserFormHeader;