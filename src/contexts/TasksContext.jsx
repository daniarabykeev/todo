import axios from "axios";
import React, { createContext, useState } from "react";
import { API } from "../helpers/consts";

export const tasksContext = createContext();

function TasksContext({ children }) {
  const [tasks, setTasks] = useState([]);

  async function getTasks() {
    const { data } = await axios(API);
    setTasks(data);
  }

  async function addTask(newTask) {
    await axios.post(`${API}`, newTask);
    getTasks();
  }
  const value = {
    tasks: tasks,
    getTasks: getTasks,
    addTask: addTask,
  };
  return (
    <tasksContext.Provider value={value}>{children}</tasksContext.Provider>
  );
}

export default TasksContext;
