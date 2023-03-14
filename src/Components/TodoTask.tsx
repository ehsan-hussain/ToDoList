import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ITask } from "../Interfaces";
import { faTasks, faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: number): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  const [crossed, setCrossed] = useState(false);
  const handleChange = () => {
    setCrossed(!crossed);
  };
  return (
    <div className="task">
      <div className="content">
        <span
          style={{ textDecoration: crossed ? "line-through" : "none" }}
          onClick={handleChange}>
          {task.taskName}
        </span>
      </div>

      <button
        onClick={() => {
          completeTask(task.id);
        }}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default TodoTask;
