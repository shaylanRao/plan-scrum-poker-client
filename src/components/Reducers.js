import { combineReducers } from "redux";

function nameRoomReducer(state = INITIAL_STATE, action) {
  if (action.type === "ASSIGN_NAME_ROOM") {
    return {
      name: action.payload.name,
      room: action.payload.room,
    };
  }
  return state;
}

function valueReducer(state = INITIAL_STATE, action) {
  if (action.type === "ASSIGN_VALUE") {
    return {
      value: action.payload.value,
    };
  }
  return state;
}
const INITIAL_STATE = {
  name: "Initial Name",
  room: "Initial Room",
  value: -3,
};

export default combineReducers({
  nameRoom: nameRoomReducer,
  value: valueReducer,
});
