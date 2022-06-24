import React, { useContext, useEffect, useReducer } from "react";

const ACTION_TYPES = {
  ADD_TASK: "ADD_TASK",
  CHANGE_STATUS: "CHANGE_STATUS",
  FILTER_TASKS: "FILTER_TASK",
  SET_ACTIVE: "SET_ACTIVE",
  SET_ALL: "SET_ALL",
  DELETE_TASK: "DELETE_TASK",
  DELETE_ALL: "DELETE_ALL",
};

const defaultState = {
  tasks: [],
  active: false,
  completed: false,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { taskId: Math.random(), taskName: action.value, taskStatus: false },
        ],
      };
    }
    case ACTION_TYPES.CHANGE_STATUS: {
      let newTasks = state.tasks.map((el) => {
        if (el.taskId === action.id) {
          el.taskStatus = action.status;
        }
        return el;
      });
      return { ...state, tasks: newTasks };
    }
    case ACTION_TYPES.SET_ALL: {
      return { ...state, active: false, completed: false };
    }

    case ACTION_TYPES.FILTER_TASKS: {
      if (action.status == "active") {
        return {
          ...state,
          active: true,
          completed: false,
        };
      } else if (action.status == "completed") {
        return {
          ...state,
          active: false,
          completed: true,
        };
      }
    }
    case ACTION_TYPES.DELETE_TASK: {
      const newTasks = state.tasks.filter((el) => el.taskId !== action.id);

      return { ...state, tasks: newTasks };
    }
    case ACTION_TYPES.DELETE_ALL: {
      const newTasks = state.tasks.filter((el) => el.taskStatus == false);
      return { ...state, tasks: newTasks };
    }
  }
}

const Context = React.createContext(defaultState);

const useCustomContext = () => useContext(Context);

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState, () => {
    const localData = localStorage.getItem("state");
    return localData ? JSON.parse(localData) : defaultState;
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export { ACTION_TYPES, ContextProvider, useCustomContext };
