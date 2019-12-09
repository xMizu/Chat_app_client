import React from "react";
import "./Message.css";

const Message = props => {
  return (
    <div className="messageContainer">
      <p>{props.msg}</p>
      <p>{`Sent by -${props.user}`}</p>
    </div>
  );
};
export default Message;
