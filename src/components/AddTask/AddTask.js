import React, { useRef } from "react";
import { ACTION_TYPES, useCustomContext } from "../../state";
import s from "./styles.module.css";

function AddTask() {
  const { dispatch } = useCustomContext();
  const ref = useRef("");

  const addTask = (e) => {
    if (ref.current.value) {
      e.preventDefault();
      dispatch({ type: ACTION_TYPES.ADD_TASK, value: ref.current.value });
      ref.current.value = "";
      ref.current.focus();
    }
  };

  return (
    <div className={s.container}>
      <form onSubmit={(e) => addTask(e)}>
        <input
          ref={ref}
          onChange={(e) => (ref.current.value = e.target.value)}
          placeholder="add details"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddTask;
