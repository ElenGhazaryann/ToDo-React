import React from "react";
import { ACTION_TYPES, useCustomContext } from "../../state";
import s from "./styles.module.css";

function NavBar() {
  const { state, dispatch } = useCustomContext();

  const all = () => {
    dispatch({ type: ACTION_TYPES.SET_ALL });
  };
  const active = () => {
    dispatch({ type: ACTION_TYPES.FILTER_TASKS, status: "active" });
  };
  const completed = () => {
    dispatch({ type: ACTION_TYPES.FILTER_TASKS, status: "completed" });
  };
  return (
    <>
      <h1 className={s.heading}>#todo</h1>
      <div className={s.container}>
        <p
          className={state.completed || state.active || s.activeLink}
          onClick={() => all()}
        >
          All
        </p>
        <p className={state.active && s.activeLink} onClick={() => active()}>
          Active
        </p>
        <p
          className={state.completed && s.activeLink}
          onClick={() => completed()}
        >
          Completed
        </p>
      </div>
    </>
  );
}

export default NavBar;
