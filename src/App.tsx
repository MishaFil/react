import React from 'react';
import './App.css';
import MyName from "./components/MyName/MyName";
import Counter from "./components/counter/counter";
import Todolist from "./components/todolist/todolist";

function App() {
  return (
    <div className="App">
      {/*<Counter></Counter>*/}
        <Todolist></Todolist>
    </div>
  );
}

export default App;
