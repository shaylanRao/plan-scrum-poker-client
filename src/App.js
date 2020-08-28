import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./components/Reducers";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join/Join";
import PokerRoom from "./components/PokerRoom/PokerRoom";

// function reducer(state = INITIAL_STATE, action) {
//   //console.log(action);
//   switch (action.type) {
//     case "ASSIGN_NAME_ROOM":
//       //console.log(state.name);
//       return {
//         name: action.payload.name,
//         room: action.payload.room,
//       };
//     default:
//       return state;
//   }
// }

const INITIAL_STATE = {
  name: "Initial Name",
  room: "Initial Room",
  value: -3,
};

const store = createStore(
  reducers,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Initial assignment
//store.dispatch({ type: "ASSIGN" });

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Route path="/" exact component={Join} />
        <Route path="/PokerRoom" component={PokerRoom} />
      </Provider>
    </Router>
  );
};

export default App;
