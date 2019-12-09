import React, { useEffect } from "react";
import Chat from "./components/Chat/Chat";
import "./App.css";
import io from "socket.io-client";

const App = () => {
  let socket;
  const BACKEND = "http://localhost:3100/";

  socket = io.connect(BACKEND);

  useEffect(() => {
    console.log("checking if this will re-render");
  }, [BACKEND]);

  return (
    <div className="outerContainer">
      <Chat socket={socket} />
    </div>
  );
};

export default App;
