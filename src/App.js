import React from "react";
import TodoList from "./TodoList";
import { Button } from "./Button1";
import { Button2 } from "./Button2";
import { Button3 } from "./scss/Button3";
import { Box } from "./Box1";
import { Box4 } from "./components/Box4";
import { DynamicBox4 } from "./components/DynamicBox4";

function App() {
  return (
    <div className="App">
      <TodoList />
      <Button />
      <Button2 />
      <Button3 />
      <Box />
      <Box4 />
      <DynamicBox4 size="big" />
    </div>
  );
}

export default App;
