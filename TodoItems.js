import React, { useState } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import Todos from "./Todos";

const TodoItems = ({
  task,
  setTask,
  input,
  setInput,
  status,
  setStatus,
  filtered,
  setFiltered,
}) => {
  const tRemove = (key) => {
    console.log("delete id:", key);
    setInput(input.filter((task) => task.id !== key));
  };

  const tComplete = (key) => {
    // console.log(Object.prototype.toString.call(input));
    console.log("completed id:", key);

    let toggledList = [...input];
    setInput(
      toggledList.map((task) => {
        if (task.id == key) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      })
    );
  };

  const tEdit = (key) => {
    console.log("Edited id", key);
    let editList = [...input];
    setInput(
      editList.map((task) => {
        if (task.id == key) {
          task.isEditMode = !task.isEditMode;
        }
        return task;
      })
    );
    console.log(input);
    return (
      <input
        className="new-name"
        type="text"
        value={key}
        placeholder="Enter new name"
        // onChange={(e) => setNewText(e.target.value)}
      />
    );
  };

  // sort to make priority list to place at the top
  input.sort((a, b) => {
    return b.isPriority - a.isPriority;
  });

  return (
    <div className="list">
      {input.map((todo) => (
        <Todos
          todo={todo}
          input={input}
          setInput={setInput}
          tRemove={tRemove}
          tComplete={tComplete}
          tEdit={tEdit}
          status={status}
          setStatus={setStatus}
          filtered={filtered}
          setFiltered={setFiltered}
        />
      ))}
    </div>
  );
};

export default TodoItems;
