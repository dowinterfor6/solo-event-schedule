import React, { useReducer } from "react";
import BottomNavBar from "./components/BottomNavBar";
import CalendarView from "./components/CalendarView";
import NotificationSetting from "./components/NotificationSettings";
import UpcomingEvents from "./components/UpcomingEvents";
import { iAction, iState } from "./interfaces";

const initialState: iState = {
  tab: 1,
};

const SET_TAB_IDX = "SET_TAB_IDX";

const reducer = (state: iState, { type, payload }: iAction) => {
  let nextState = Object.assign({}, state);

  switch (type) {
    case SET_TAB_IDX:
      nextState.tab = payload;
      return nextState;
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setTabIdx = (payload: number) =>
    dispatch({
      type: SET_TAB_IDX,
      payload,
    });

  const pageComponent = () => {
    switch (state.tab) {
      case 0:
        return <CalendarView />;
      case 1:
        return <UpcomingEvents />;
      case 2:
        return <NotificationSetting />;
      default:
        throw new Error("Invalid tab state");
    }
  };

  return (
    <>
      <section>{pageComponent()}</section>
      <BottomNavBar setTabIdx={setTabIdx} />
    </>
  );
};

export default App;
