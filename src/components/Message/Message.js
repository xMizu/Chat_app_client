import React from "react";
import "./Message.css";

const Message = props => {
  return <div className="messageContainer">{props.msg}</div>;
};
export default Message;
