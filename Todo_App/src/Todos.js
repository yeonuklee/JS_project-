import React, { Children, useState, createRef } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdDeleteForever,
  MdDone,
  MdEdit,
} from "react-icons/md";

const Todos = ({ todo, setInput, tRemove, tComplete, tEdit, filtered }) => {
  const todoRef = createRef();
  const newText = "";
  let priority = false;

  const changeText = (e) => {
    // console.log(todoRef.current.value);
    // let list = [...input];
    setInput(
      filtered.map((x) => {
        if (x.id == todo.id) {
          x.task = todoRef.current.value;
          x.isEditMode = !x.isEditMode;
          x.isPriority = priority ? !x.isPriority : x.isPriority;
          x.sorting = x.isPriority ? 1 : 0;
        }
        return x;
      })
    );
    // setInput({
    //   isEditMode: !todo.isEditMode,
    //   task: todoRef.current.value,
    // });
  };
  const keyPress = (e) => {
    priority = e.shiftKey ? true : false;
    console.log("priority", priority);
    if (e.key == "Enter") changeText();
  };
  const cancelChange = () => {
    // let list = [...input];
    setInput(
      filtered.map((task) => {
        if (task.id == todo.id) {
          task.isEditMode = !task.isEditMode;
        }
        return task;
      })
    );
  };
  const editTodo = (key) => {
    return (
      <div>
        <input
          type="text"
          defaultValue={newText}
          ref={todoRef}
          onKeyPress={keyPress}
        />
        <MdEdit onClick={changeText} />
        <MdRemoveCircleOutline onClick={cancelChange} />
      </div>
    );
  };

  const fixedTodo = () => {
    return (
      <span
        onDoubleClick={() => tEdit(todo.id)}
        style={
          todo.isPriority
            ? {
                fontWeight: "bold",
              }
            : { color: "default" }
        }
      >
        {todo.isPriority ? "❗" + todo.task : todo.task}
      </span>
    );
  };

  return (
    <div className="todo">
      <div
        className={todo.isCompleted ? "completed" : "todo-item"}
        key={todo.id}
      >
        {todo.isEditMode ? editTodo(todo.id) : fixedTodo(todo.id)}

        <MdDone
          className="complete-btn"
          onClick={() => tComplete(todo.id)}
          style={{ textDecoration: "line-through" }}
        />
        <MdDeleteForever
          className="delete-btn"
          onClick={() => tRemove(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todos;
