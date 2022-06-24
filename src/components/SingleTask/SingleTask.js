import React, { useRef } from "react";
import { ACTION_TYPES, useCustomContext } from "../../state";
import s from "./styles.module.css";
import img from "./../../assets/bin.svg";

function SingleTask({ task }) {
  const { state, dispatch } = useCustomContext();

  const newRef = useRef("");
  const changeStatus = (e) => {
    dispatch({
      type: ACTION_TYPES.CHANGE_STATUS,
      status: e,
      id: task.taskId,
    });
  };

  const deleteTask = () => {
    dispatch({ type: ACTION_TYPES.DELETE_TASK, id: task.taskId });
  };
  return (
    <div className={s.singleTask}>
      <label className={task.taskStatus ? s.checkedTask : undefined}>
        <input
          defaultChecked={task.taskStatus}
          ref={newRef}
          type="checkbox"
          onClick={() => changeStatus(newRef.current.checked)}
        />
        {task.taskName}
      </label>
      {state.completed && <img onClick={() => deleteTask()} src={img} />}
    </div>
  );
}

export default SingleTask;
