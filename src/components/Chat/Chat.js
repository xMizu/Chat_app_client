import React, { useState, useEffect } from "react";
import "./Chat.css";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";

const Chat = ({ socket }) => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("newMsg", data => {
      setMessages([...messages, data]);
    });
  }, [messages]);

  return (
    <div className="chatContainer">
      <div className="messagesContainer">
        <Messages messages={messages} />
      </div>
      <Input text={text} setText={setText} socket={socket} />
    </div>
  );
};

export default Chat;
