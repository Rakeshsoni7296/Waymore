import { useEffect, useState } from "react";
import { Layout } from "../Helper/Layout/Layout";
import Form from "../Helper/ReqForm/LoginForm";
import FlashBox from "../../Base/Flashes/Flash";

const Login = () => {
  const [errmsg, setErrmsg] = useState("");
  const [success, setSuccess] = useState("");

  const errorOccur = (err) => {
    setErrmsg(err);
  };

  const successful = (mes) => {
    setSuccess(mes);
    console.log(success);
  };

  useEffect(() => {
    document.title = "Waymore | Login";
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
        <Form getError={errorOccur} getSuccess={successful} />
      </div>
    </>
  );
};

export default Login;
