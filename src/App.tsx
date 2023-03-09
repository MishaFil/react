import React from 'react';
import './App.css';
import MyName from "./components/MyName/MyName";
import Counter from "./components/counter/counter";
import Todolist from "./components/todolist/todolist";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function App() {
  return (
    <div>
      {/*<Counter></Counter>*/}
          {/*<Todolist></Todolist>*/}
          <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
          />
          <TextField
              id="filled-basic"
              label="lastname"
              variant="filled" />
          <Checkbox {...label} />

      </div>

  );
}

export default App;
