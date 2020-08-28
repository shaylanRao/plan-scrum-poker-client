import React, { useEffect } from "react";

import "./DisplayValues.css";

function displayValues(props) {
  let allChosen = props.allChosen;
  props.users.forEach((user) => {
    if (user.value < 1) {
      allChosen = false;
    }
  });

  return (
    <div className="showhidebutton">
      {allChosen ? (
        <div className="allchosen">
          <button
            className="ui positive button"
            value="Show/Hide"
            onClick={(e) => (
              props.setShow(!props.show),
              props.sendShow(e, !props.show),
              e.preventDefault()
            )}
          >
            {props.show ? <b>Hide</b> : <b>Show</b>}
          </button>
        </div>
      ) : (
        <div className="notallchosen">
          <button
            title="Not all users have chosen a value yet!"
            className="ui negative button"
            value="DONTShow/Hide"
            onClick={(e) => (
              props.setShow(!props.show),
              props.sendShow(e, !props.show),
              e.preventDefault()
            )}
          >
            {props.show ? <b>Hide</b> : <b>Show</b>}
          </button>
        </div>
      )}
    </div>
  );
}

export default displayValues;
