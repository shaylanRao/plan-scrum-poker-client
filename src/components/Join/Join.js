import React, { useState } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

import { connect } from "react-redux";
import { dispatchNameRoom } from "../Actions";

import "./Join.css";

// function dispatchName(name, room) {
//   return { type: "ASSIGN", payload: { name, room } };
// }

function SignIn(props) {
  //console.log("SignIn : props", props);
  //set states for name and room (when signing in)
  const [name, setName] = useState("");
  const roomUrl = queryString.parse(props.location.search).room;
  const [room, setRoom] = useState(roomUrl);

  props.dispatch(dispatchNameRoom(name, room));
  //ui for the join page
  //if (roomUrl !== undefined) {
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            //sets the name from user input
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        {roomUrl !== undefined ? (
          ""
        ) : (
          <div>
            <input
              placeholder="Room"
              className="joinInput mt-20"
              type="text"
              //sets the room name from user input
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
        )}

        {/* Use redux here instead of query string */}
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/PokerRoom?room=${room}`}
        >
          {/* Use redux here instead of query string */}

          <button className={"button mt-20"} type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  name: state.nameRoom.name,
  room: state.nameRoom.room,
});

export default connect(mapStatetoProps)(SignIn);
