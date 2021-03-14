import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";

const Form = ({
  task,
  setTask,
  input,
  setInput,
  status,
  setStatus,
  filtered,
  setFiltered,
}) => {
  let priority;

  const handleChange = (e) => {
    e.preventDefault();
    task && tAdd(task);
    setTask("");
  };
  const tAdd = (text) => {
    let addInput = [
      ...input,
      {
        id: input.length + 1,
        task: text,
        isCompleted: false,
        isEditMode: false,
        isPriority: priority,
        sorting: priority == true ? 1 : 0,
      },
    ];
    setInput(addInput);
  };
  const tFilter = (e) => {
    setStatus("");
    if (e.target.value == "completed") {
      setStatus("completed");
      // setFiltered(input.filter((x) => x.isCompleted === true));
    } else if (e.target.value == "incompleted") {
      setStatus("incompleted");
      // setFiltered(input.filter((x) => x.isCompleted === false));
    } else if (e.target.value == "all") {
      setStatus("all");
      // setFiltered(input);
    }
  };

  //if you press "shift" with "Enter/click", priority
  const keyPress = (e) => {
    priority = e.shiftKey ? true : false;
  };
  return (
    <form onSubmit={handleChange}>
      <input
        value={task}
        type="text"
        placeholder="type here"
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={keyPress}
      ></input>
      <MdAddBox
        className="button"
        id="addBtn"
        type="submit"
        onClick={handleChange}
      />
      <div className="button" id="box">
        <select name="todos" class="filter-todo" onChange={tFilter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incompleted">Incompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
