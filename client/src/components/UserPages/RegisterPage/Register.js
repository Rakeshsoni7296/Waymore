import { useEffect, useState } from "react";
import { Layout } from "../Helper/Layout/Layout";
import Form from "../Helper/ReqForm/RegisterForm";
import FlashBox from "../../Base/Flashes/Flash";

const Register = () => {
  const [errmsg, setErrmsg] = useState("");

  const errorOccur = (err) => {
    setErrmsg(err);
  };

  useEffect(() => {
    document.title = "Waymore | Register";
  }, []);

  return (
    <>
      {errmsg.length > 0 ? (
        <FlashBox closeHand={errorOccur} className="error" message={errmsg} />
      ) : (
        ""
      )}
      <div className="form-container">
        <Layout />
        <Form getError={errorOccur} />
      </div>
    </>
  );
};

export default Register;
