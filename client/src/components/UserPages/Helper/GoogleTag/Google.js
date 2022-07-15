import './Google.css';

const Google = (props) => {
  return (
    <a href="true" className="google_icon">
      <div>
        <img src="http://localhost:4500/icons/google.svg" alt="GOOGLE" />
      </div>
      <div>
        <span>{props.text} With Google</span>
      </div>
    </a>
  );
};

export default Google;
