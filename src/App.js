import React, { useEffect, useState } from "react";
import Chat from "./components/Chat/Chat";
import "./App.css";
import io from "socket.io-client";

const App = () => {
  let socket;
  const [user, setUser] = useState("");
  const BACKEND = "http://localhost:3100/";

  socket = io.connect(BACKEND);

  useEffect(() => {
    setUser(socket.id);
    console.log("checking if this will re-render");
  }, [BACKEND]);

  return (
    <div className="outerContainer">
      <Chat socket={socket} user={user} />
    </div>
  );
};

export default App;
