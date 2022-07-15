import "./Flash.css";

const FlashBox = (props) => {
  const closeHandler = (e) => {
    const messageBox = document.querySelector(".error-box");
    messageBox.classList.remove("active-error");
    setTimeout(() => props.closeHand(""), 400);
  };
  return (
    <div
      className={`error-box ${props.className} ${
        props.message.length > 0 ? "active-error" : "success"
      }`}
    >
      <div className="error-message-cont">{props.message}</div>
      <div onClick={closeHandler}>
        <img src="http://localhost:4500/icons/close-btn-white.svg" alt="close" />
      </div>
    </div>
  );
};

export default FlashBox;
