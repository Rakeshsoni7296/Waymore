import "./FormSwitch.css";

const FormSwitch = (props) => {
  return (
    <div className="form--end">
      <div className="register-tab">
        <span>{props.context.alias} have an account?&nbsp;</span>
        <a href={`/${props.context.redirectUrl}`.toLowerCase()}>
          <span>{props.context.redirectUrl} Now</span>
          <span className="dir-arrow">&#8594;</span>
        </a>
      </div>
    </div>
  );
};

export default FormSwitch;
