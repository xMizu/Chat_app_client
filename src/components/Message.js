import React, { useState } from "react";

const Message = () => {
  const [msg, setMsg] = useState("");

  const messageStyle = {
    display: "flex",
    alignSelf: "center"
  };

  return (
    <div className="form-group" style={messageStyle}>
      <input
        type="text"
        className="form-control"
        placeholder="Send Message"
        id="inputDefault"
        value={msg}
        onChange={e => {
          setMsg(e.target.value);
        }}
        style={{ width: "95%", margin: "0 0 0 1rem" }}
      />
      <button
        type="button"
        className="btn btn-primary"
        style={{
          padding: "0 1rem",
          justifyContent: "center",
          margin: "0 1rem 0 1rem"
        }}
      >
        Send
      </button>
    </div>
  );
};
export default Message;
