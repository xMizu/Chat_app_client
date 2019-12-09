import React, { useState } from "react";
import io from "socket.io-client";

const Chatbox = () => {
  const socket = io.connect("http://localhost:3100/");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(["welcome", "chat"]);

  socket.on("msg", msg => {
    setMessages([...messages, msg]);
  });

  const outer = {
    backgroundColor: "tomato",
    display: "flex",
    flexDirection: "column",
    width: "50vw",
    height: "80vh",
    margin: "auto"
  };

  const inner = {
    width: "50vw",
    backgroundColor: "blue",
    justifySelf: "flex-end",
    margin: "auto"
  };

  const keyhandler = e => {
    socket.emit("private message", e.target.value);
    return setMessage("");
  };

  return (
    <>
      <div style={outer}>
        {messages
          ? messages.map(msg => {
              return <div key={msg}>{msg}</div>;
            })
          : null}
      </div>
      <div style={inner}>
        <input
          placeholder="enter message here"
          value={message}
          onChange={e => {
            setMessage(e.target.value);
          }}
          onKeyPress={e => (e.key === "Enter" ? keyhandler(e) : null)}
        />
      </div>
    </>
  );
};

export default Chatbox;
