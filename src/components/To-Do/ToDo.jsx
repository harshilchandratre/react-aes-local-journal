import React, { useEffect, useState } from "react";
import "../To-Do/ToDo.css";
import Task from "./Task";

const ToDo = () => {
  const initialTask = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [tasks, setTask] = useState(initialTask);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //   console.log(title, description)

  const deleteTask = (id) => {
    const filteredArr = tasks.filter((_, index) => {
      return index !== id;
    });
    console.log("Deleting index:", id);
    console.log("Updated tasks:", filteredArr);

    setTask(filteredArr);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Seriously? You did nothing 😆");
    } else {
      setTask([...tasks, { title, description }]);
      setTitle("")
      setDescription("")
    }
  };

  const disableButtonStyle = {
    backgroundColor: !title || !description ? "lightblue" : "lightseagreen",
    cursor: !title || !description ? "not-allowed" : "pointer",
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <header>"Eat that frog!"</header>
      <div className="to-doArea">
        {/* input area */}
        <form>
          <input
            type="text"
            placeholder="Title here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name=""
            id=""
            placeholder="Note here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button
            onClick={submitHandler}
            className="add-btn"
            style={disableButtonStyle}
          >
            Add Note
          </button>
        </form>
        {/* task area */}
        <div className="taskArea">
          {tasks.map((item, id) => (
            <Task
              key={id}
              title={item.title}
              description={item.description}
              id={id}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ToDo;
