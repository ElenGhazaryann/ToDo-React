import React from "react";
import { ACTION_TYPES, useCustomContext } from "../../state";
import SingleTask from "../SingleTask/SingleTask";
import s from "./styles.module.css";
import img from "./../../assets/bin.svg";

function AllTasks() {
  const { state, dispatch } = useCustomContext();

  const deleteAll = () => {
    dispatch({ type: ACTION_TYPES.DELETE_ALL });
  };
  return (
    <div className={s.container}>
      {state.active &&
        state.tasks.map((el) => {
          if (!el.taskStatus) {
            return <SingleTask key={Math.random()} task={el} />;
          }
        })}

      {state.completed &&
        state.tasks.map((el) => {
          if (el.taskStatus) {
            return <SingleTask key={Math.random()} task={el} />;
          }
        })}

      {!state.active &&
        !state.completed &&
        state.tasks.map((el) => <SingleTask key={Math.random()} task={el} />)}

      {state.completed && (
        <button onClick={() => deleteAll()}>
          <img src={img} />
          Delete all
        </button>
      )}
    </div>
  );
}

export default AllTasks;
