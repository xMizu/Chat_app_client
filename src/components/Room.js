import React from "react";

const Room = () => {
  const room = {
    width: "20%",
    borderRight: "1px solid black"
  };

  // Dummy Data
  const data = ["general", "interest", "favs", "sports"];

  const rooms = data.map((room, i) => (
    <h3
      className="nav-link"
      key={i}
      onClick={e => console.log(e.target.innerText)}
    >
      {room}
    </h3>
  ));

  return <div style={room}>{rooms ? rooms : null}</div>;
};

export default Room;
