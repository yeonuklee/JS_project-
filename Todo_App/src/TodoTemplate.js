import React, { useEffect, useState, createContext, Children } from "react";
import TodoItems from "./TodoItems";
import Form from "./Form";
import img from "./img.png";

const TodoTemplate = () => {
  const [task, setTask] = useState("");
  const [input, setInput] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);
  const [dateDue, setDateDue] = useState([]);

  /////////////////////
  useEffect(() => {
    console.log(filtered);
    if (status == "completed") {
      setFiltered(input.filter((x) => x.isCompleted === true));
    } else if (status == "incompleted") {
      setFiltered(input.filter((x) => x.isCompleted === false));
    } else if (status == "all") {
      setFiltered(input);
    }
  }, [input, status]);

  //to check if all task are done
  let done = input.filter((x) => x.isCompleted == false).length;

  //to differentiate between 'task = 0' as a start and 'task = 0' as a completed task.
  let tasks = input.filter((x) => x.id > 0).length;

  return (
    <main className="todo-list-template">
      <div className="title"> To Do List</div>
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
        setInput={setInput}
        status={status}
        setStatus={setStatus}
        filtered={filtered}
        setFiltered={setFiltered}
      />
      {done == 0 && tasks > 0 ? (
        <img className="done" src={img} />
      ) : done == 0 && task == 0 ? (
        "What do you need to do today?"
      ) : (
        <div className="message">{`Still ${done} ${
          done == 1 ? "task" : "tasks"
        } in progress`}</div>
      )}
    </main>
  );
};

export default TodoTemplate;
