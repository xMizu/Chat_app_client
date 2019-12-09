import React from "react";
import "./Input.css";

const Chat = ({ text, socket, setText, user }) => {
  const submitHandler = e => {
    e.preventDefault();

    let data = {
      text,
      user
    };

    socket.emit("sendMsg", data, () => {
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
