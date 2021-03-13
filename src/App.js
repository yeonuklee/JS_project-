import "./App.css";
import TodoTemplate from "./TodoTemplate";
import React, { useState } from "react";
import Form from "./Form";
import Todos from "./Todos";
import TodoItems from "./TodoItems";
// class Input extends Component {}

function App() {
  return (
    <div>
      <TodoTemplate></TodoTemplate>
    </div>
  );
}

export default App;
