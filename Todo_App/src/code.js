import React, { useState } from "react";

const Form = ({ task, setTask, input, setInput }) => {
  const handleChange = (e) => {
    e.preventDefault();
    task && tAdd(task);
    setTask("");
  };

  const tAdd = (text) => {
    let addInput = [
      ...input,
      {
        id: input.length,
        task: text,
        isCompleted: false,
      },
    ];
    console.log(addInput);
    setInput(addInput);
  };

  //   const tRemove = (id) => {
  //     let removeInput = value.filter((x) => x.id != id);
  //     setValue(removeInput);
  //   };

  return (
    <form onSubmit={handleChange}>
      <input
        value={task}
        type="text"
        placeholder="type here"
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button type="submit">Add</button>
      <section className="list">
        {input.map((e) => {
          return e.id ? <div>{e.task}</div> : <div />;
        })}
      </section>
    </form>
  );
};

// const Display = ({ input }) => {
//   return input.map((e) => {
//     return e.id ? <div>{e.task}</div> : <div />;
//   });
// };
export default Form;
