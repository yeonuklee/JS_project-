import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

const TodoListItem = ({ todo, input, setInput }) => {
  const { task, isCompleted } = todo;

  return (
    <div className="TodoListItem">
      {isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      <div className="text">{task}</div>
    </div>
  );
};

export default TodoListItem;
