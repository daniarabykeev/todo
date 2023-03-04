import React, { useContext, useEffect, useState } from "react";
import { tasksContext } from "../contexts/TasksContext";

const initState = {
  task: "",
  status: false,
};

function MainPage() {
  const { tasks, getTasks, addTask } = useContext(tasksContext);
  const [task, setTask] = useState(initState);
  const [status, setStatus] = useState(initState);
  useEffect(() => {
    getTasks();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    addTask(task);
    setTask(initState);
  }

  function handleChange(e) {
    let obj = {
      ...task,
      [e.target.name]: e.target.value,
    };
    setTask(obj);
  }

  function cs(e) {
    setTask(task.status === true);
  }
  return (
    <div style={{ marginLeft: "250px", marginTop: "150px" }}>
      <div>
        <form
          action=""
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            placeholder="Enter task"
            name="task"
            value={task.task}
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </form>
      </div>
      {tasks.map((item) => {
        return item.status === false ? (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <label>
              <input
                type="checkbox"
                value={item.task}
                onClick={(e) => {
                  cs(item.id);
                }}
              />
              {item.task}
            </label>
          </div>
        ) : (
          <h3>No tasks</h3>
        );
      })}
    </div>
  );
}

export default MainPage;
