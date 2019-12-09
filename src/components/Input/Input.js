import React from "react";
import "./Input.css";

const Chat = ({ text, socket, setText }) => {
  const submitHandler = e => {
    e.preventDefault();
    socket.emit("sendMsg", text, () => {
      setText("");
    });
  };

  return (
    <form className="inputContainer" onSubmit={e => submitHandler(e)}>
      <input
        className="inputField"
        type="text"
        placeholder="Send Messages"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="sendButton" type="submit">
        Send
      </button>
    </form>
  );
};

export default Chat;
