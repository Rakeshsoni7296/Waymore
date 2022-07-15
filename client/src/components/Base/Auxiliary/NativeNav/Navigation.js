import "./Navigation.css";

const Navigation = (props) => {
  return (
    <div className="nav-hfusdg">
      <div className="nav-gerfo">
        <a className="klj-huyguygt" href="/">
          Home
        </a>
      </div>
      {props.menus.map((val, i) => (
        <div key={i + 1} className="nav-gerfo">
          <img
            src="http://localhost:4500/icons/pagination/right-on.svg"
            alt="arrow"
          />
          <a className="klj-huyguygt" href="true">
            {val}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
