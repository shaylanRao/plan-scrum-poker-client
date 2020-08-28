import React from "react";
import { connect } from "react-redux";
import { dispatchInputValue } from "../Actions";
import "./inputValue.css";

import card1 from "../../icons/card.jpg";

const dispatchBroadcast = (props, value) => {
  props.dispatch(dispatchInputValue(props.name, value));
};

function InputValue(props) {
  const setInputValue = props.setInputValue;
  const sendValue = props.sendValue;

  // useEffect(() => {
  //   props.dispatch(dispatchInputValue(props.name, props.inputValue));
  // }, []);

  return (
    <form className="inputform">
      <button
        className="value"
        value="1"
        onClick={(e) => (
          setInputValue(1),
          sendValue(),
          dispatchBroadcast(props, 1),
          e.preventDefault()
        )}
      >
        <div class="pokerchip red flat">
          <br></br>1
        </div>
      </button>
      <button
        className="value"
        value="2"
        onClick={(e) => (
          setInputValue(2),
          dispatchBroadcast(props, 2),
          e.preventDefault(),
          sendValue()
        )}
      >
        <div class="pokerchip orange flat">
          <br></br> 2{" "}
        </div>
      </button>
      <button
        className="value"
        value="3"
        onClick={(e) => (
          setInputValue(3),
          sendValue(),
          dispatchBroadcast(props, 3),
          e.preventDefault()
        )}
      >
        <div class="pokerchip green flat">
          <br></br> 3{" "}
        </div>
      </button>
      <button
        className="value"
        value="5"
        onClick={(e) => (
          setInputValue(5),
          sendValue(),
          dispatchBroadcast(props, 5),
          e.preventDefault()
        )}
      >
        <div class="pokerchip black flat">
          <br></br> 5{" "}
        </div>
      </button>
      <button
        className="value"
        value="8"
        onClick={(e) => (
          setInputValue(8),
          dispatchBroadcast(props, 8),
          e.preventDefault(),
          sendValue()
        )}
      >
        <div class="pokerchip purple flat">
          <br></br> 8{" "}
        </div>
      </button>
      <button
        className="value"
        value="13"
        onClick={(e) => (
          setInputValue(13),
          dispatchBroadcast(props, 13),
          e.preventDefault(),
          sendValue()
        )}
      >
        <div class="pokerchip yellow flat">
          <br></br> 13{" "}
        </div>
      </button>
    </form>
  );
}
const mapStatetoProps = (state) => ({
  value: state.value,
});

export default connect(mapStatetoProps)(InputValue);
