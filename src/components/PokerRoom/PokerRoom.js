import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import UsersInRoom from "../UsersInRoom/UsersInRoom";
import Input from "../Input/Input";
import InputValue from "../Input/InputValue";
import DisplayValues from "../DisplayValues/DisplayValues";
import queryString from "query-string";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Messages from "../Messages/Messages";

import "./PokerRoom.css";
let socket;

//setting states
const PokerRoom = (props) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [roomUrl, setRoomUrl] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState(null);
  const [currentMessage, setCurrentMessage] = useState("");
  const ENDPOINT = "https://plan-scrum-poker.herokuapp.com/";
  //const ENDPOINT = "localhost:5000";
  const [admin, setAdmin] = useState(false);
  const [show, setShow] = useState(false);
  const [allChosen, setAllChosen] = useState(true);

  //creating room
  useEffect(() => {
    //Redux instead of query string
    //const { name, room } = queryString.parse(location.search);
    const { name, room } = props.nameRoom;
    socket = io(ENDPOINT);
    setRoom(room);
    setName(name);
    setRoomUrl(queryString.parse(props.location.search).room);

    if (name === "Initial Name") {
      console.log("BLANK");
      sendBack();
    }

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);

  const sendBack = () => {};
  // console.log({ admin });

  //render messages list
  useEffect(() => {
    socket.on("message", (message) => {
      resetTicket();
      setCurrentMessage(message.text);
    });

    socket.on("roomData", ({ name, users }) => {
      setUsers(users);
      //if user is first in the room (admin), then they are assigned the admin
      if (users.length === 1) {
        setAdmin(true);
      }
    });

    socket.on("updateShow", (show) => {
      //TODO sort user list by value
      setShow(show);
    });
  }, []);

  const resetTicket = () => {
    socket.emit("resetValues");
    setAllChosen(true);
    setShow(false);
    socket.emit("show", show);
  };

  const sendShow = (event, show) => {
    event.preventDefault();
    socket.emit("show", show);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    //broadcasts message under sendMessage signal
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const sendValue = (value) => {
    if (value) {
      socket.emit("assignValue", value);
    }
  };

  if (admin === true) {
    return (
      <div className="">
        {name === "Initial Name" ? (
          <Redirect to={`/?room=${roomUrl}`}></Redirect>
        ) : (
          ""
        )}
        <div className="outercontainer">
          <div className="navbar">
            <a>
              Welcome {name} to room {room}
            </a>
          </div>

          <div className="container">
            <title></title>
            <Messages message={currentMessage} />
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
            <InputValue
              inputValue={inputValue}
              setInputValue={setInputValue}
              sendValue={sendValue}
              name={name}
            />
          </div>
          <div className="userList">
            <UsersInRoom users={users} show={show} userName={name} />
            <DisplayValues
              show={show}
              sendShow={sendShow}
              setShow={setShow}
              allChosen={allChosen}
              users={users}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="outercontainer">
        <div className="navbar">
          <a>
            Welcome {name} to room {room}
          </a>
        </div>

        <div className="container">
          <title></title>
          <Messages message={currentMessage} />
          <div className="container"></div>
          {/* Keeps the poker chips twoards the bottom, already wrapped around form in input */}
          <InputValue
            inputValue={inputValue}
            setInputValue={setInputValue}
            sendValue={sendValue}
            name={name}
          />
        </div>
        <div className="userList">
          <UsersInRoom users={users} show={show} userName={name} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  nameRoom: state.nameRoom,
  value: state.value,
});

export default connect(mapStateToProps)(PokerRoom);
