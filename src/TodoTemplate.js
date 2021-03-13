import React, { useState, createContext, Children } from "react";
import TodoItems from "./TodoItems";
import Form from "./Form";
import img from "./img.png";

const TodoTemplate = () => {
  const [task, setTask] = useState("");
  const [input, setInput] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);
  const [dateDue, setDateDue] = useState([]);

  let done = input.filter((x) => x.isCompleted == false).length;

  return (
    <main className="todo-list-template">
      <div className="title"> To Do for today</div>
      <Form
        className="form-wrapper"
        task={task}
        setTask={setTask}
        input={input}
        setInput={setInput}
        status={status}
        setStatus={setStatus}
        filtered={filtered}
        setFiltered={setFiltered}
      />{" "}
      <TodoItems
        className="todo-wrapper"
        task={task}
        setTask={setTask}
        input={input}
        setInput={setInput}
        status={status}
        setStatus={setStatus}
        filtered={filtered}
        setFiltered={setFiltered}
      />
      {done == 0 ? (
        <img className="done" src={img} />
      ) : (
        `Still ${done} ${done == 1 ? "task" : "tasks"} in progress`
      )}
    </main>
  );
};

export default TodoTemplate;
