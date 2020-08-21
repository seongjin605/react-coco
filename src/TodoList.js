import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  console.log("todos:", todos);
  const onClick = () => {
    import("./Todo.js").then(({ Todo }) => {
      const position = todos.length + 1;
      console.log("position:", position);
      const newTodo = <Todo key={position} title={`할 일 ${position}`} />;
      setTodos([...todos, newTodo]);
    });
  };
  return (
    <div>
      <button onClick={onClick}>할 일 추가</button>
      {todos}
    </div>
  );
}
