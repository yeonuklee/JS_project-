import React, { useState } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import Todos from "./Todos";

const TodoItems = ({ setInput, status, setStatus, filtered, setFiltered }) => {
  const tRemove = (key) => {
    setInput(filtered.filter((task) => task.id !== key));
  };

  const tComplete = (key) => {
    // console.log(Object.prototype.toString.call(input));

    setInput(
      filtered.map((task) => {
        if (task.id == key) {
          task.isCompleted = !task.isCompleted;
          // task.isPriority = task.isPriority == 1 ? 0 : 1;
          // if (task.isPriority == true) {
          //   task.sorting = task.sorting == 1 ? 0 : 1;
          // }
          // task.isPriority = !task.isPriority;
          // task.sorting = task.sorting == 1 ? 0 : 1;
        }
        return task;
      })
    );

    console.log(filtered);
  };
  const tEdit = (key) => {
    setInput(
      filtered.map((task) => {
        if (task.id == key) {
          task.isEditMode = !task.isEditMode;
        }
        return task;
      })
    );
    return (
      <input
        className="new-name"
        type="text"
        value={key}
        placeholder="Enter new name"
      />
    );
  };

  filtered.sort((a, b) => {
    return b.sorting - a.sorting;
  });

  return (
    <div className="list">
      {filtered.map((todo) => (
        <Todos
          todo={todo}
          setInput={setInput}
          tRemove={tRemove}
          tComplete={tComplete}
          tEdit={tEdit}
          filtered={filtered}
        />
      ))}
    </div>
  );
};

export default TodoItems;
