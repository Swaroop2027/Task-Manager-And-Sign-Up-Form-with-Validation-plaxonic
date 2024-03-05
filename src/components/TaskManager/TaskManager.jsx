import React, { useState } from "react";
import "./TaskManager.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState({ id: "", task: "" });
  const [allTask, setallTask] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currId, setCurrId] = useState(null);

  const handleAddNewToDo = () => {
    let updatedTaskArr = [...allTask];
    updatedTaskArr.push(tasks);
    // console.log(updatedTaskArr);
    setallTask(updatedTaskArr);

    setTasks({ id: "", task: "" });
  };

  const handleToDoDelete = (index) => {
    let reducedTodos = [...allTask];
    reducedTodos.splice(index, 1);
    // console.log(index);

    // console.log (reducedTodos);
    setallTask(reducedTodos);
  };

  // const handleToDoEdit = (index) => {
  //   // setIsEdit(true);
  //   const updatedTask = allTask.find((t) => t.id === index);
  //   // console.log(updatedTask);
  //   setEditIndex(updatedTask.id);
  //   setTasks(updatedTask);
  //   setallTask((prev) =>
  //     prev.map((curr) =>
  //       curr.id === updatedTask.id ? { ...curr, task: tasks.task } : curr
  //     )
  //   );
  // };

  const handleToDoEdit = (item, index) => {
    setCurrId(index);
    setIsEdit((prev) => setIsEdit(!prev));

    let updatedTask = [...allTask];
    // console.log(updatedTask[index], "this is index");

    updatedTask.splice(index, 1, { id: item.id, task: tasks });
    console.log(updatedTask);
    setallTask(updatedTask);
  };

  // const edit = (value, index) => {
  //   setIsEdit((prev) => {
  //     const updatedState = [...prev];
  //     updatedState[index] = !updatedState[index];
  //     return updatedState;
  //   });
  // };

  // const handleToDoEdit = (item, index) => {

  //   // setIsEdit((prev) => setIsEdit(!prev));

  //   edit(item, index);

  //   let updatedTask = [...allTask];
  //   // console.log(updatedTask[index], "this is index");

  //   updatedTask.splice(index, 1, { id: item.id, task: tasks });
  //   console.log(updatedTask);
  //   setallTask(updatedTask);
  // };

  return (
    <div>
      <h1>Task Manager</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Add your task</label>
            <input
              type="text"
              value={tasks.task}
              onChange={(e) =>
                setTasks({ id: allTask.length + 1, task: e.target.value })
              }
              placeholder="Add your task here..."
            />
          </div>
          <div className="todo-input-item">
            {tasks.task && (
              <button
                className="primary-btn"
                type="button"
                onClick={handleAddNewToDo}
              >
                Add
              </button>
            )}
          </div>
        </div>

        <div className="todo-list">
          {allTask.map((item, index) => (
            <div className="todo-list-item" key={index}>
              <div>
                {isEdit && currId === index ? (
                  <input
                    className="editInp"
                    type="text"
                    name={tasks.id}
                    value={tasks.task}
                    onChange={(e) => setTasks(e.target.value)}
                  />
                ) : (
                  <p>{item.task}</p>
                )}

                {/* <p>{item.task}</p> */}
              </div>
              <div className="delete-div">
                <button
                  className="delete-btn"
                  type="button"
                  onClick={() => handleToDoDelete(index)}
                >
                  Delete
                </button>
              </div>
              <div className="edit-div">
              <button
                className="edit-btn"
                type="button"
                onClick={() => handleToDoEdit(item, index)}
              >
                Edit
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
