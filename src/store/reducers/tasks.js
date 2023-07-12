import { tasks } from "../../data/data";

const taskReducer = (state = tasks, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return state;

    case "ADD_TASK":
      action.task.id = state.length + 1;
      action.task.dueDate = new Date(action.task.dueDate).toLocaleDateString(
        "en-US",
        { month: "long", day: "numeric", year: "numeric" }
      );
      action.task.completed = false;

      return [...state, action.task];

    case "UPDATE_TASK":
      const tempTasks = [...state];
      action.task.dueDate = new Date(action.task.dueDate).toLocaleDateString(
        "en-US",
        { month: "long", day: "numeric", year: "numeric" }
      );
      tempTasks.splice(action.index, 1, action.task);

      return [...tempTasks];

    case "DELETE_TASK":
      const newTasks = [...state];
      newTasks.splice(action.index, 1);
      return [...newTasks];

    default:
      return state;
  }
};

export default taskReducer;
