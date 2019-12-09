import React from "react";
import Message from "../Message/Message";
import "./Messages.css";

const Messages = props => {
  const messageList = props.messages.map((msg, i) => (
    <Message key={i} msg={msg} />
  ));
  return <div className="messagesList">{messageList}</div>;
};

export default Messages;
