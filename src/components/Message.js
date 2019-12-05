import React from "react";

const Message = () => (
  <div className="form-group">
    <input
      type="text"
      className="form-control"
      placeholder="Send Message"
      id="inputDefault"
    />
    <button type="button" className="btn btn-primary">
      Send
    </button>
  </div>
);
export default Message;
