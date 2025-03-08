import { RiDeleteBin2Fill } from "@remixicon/react";
import React from "react";

const Task = ({ title, description, id, deleteTask }) => {
  return (
    <div className="task">
      <div>
        <span>{title}</span>
        <p>{description}</p>
      </div>
      <RiDeleteBin2Fill
        color="crimson"
        size={30}
        style={{cursor : "pointer"}}
        onClick={() => deleteTask(id)}  


      />
    </div>
  );
};

export default Task;
