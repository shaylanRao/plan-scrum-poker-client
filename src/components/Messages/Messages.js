import React from "react";
import "./Messages.css";

const Messages = ({ message }) => {
  if (message === "") {
    return (
      <div className="loading">Please wait for a ticket to be entered</div>
    );
  }
  return <div className="loaded">{message}</div>;
};

export default Messages;
