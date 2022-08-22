import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from "./Components/TaskList";
import TaskInput from "./Components/TaskInput";
import { Task } from "./Types";

const initialState: Task[] = [
  {
    id:2,
    title: "Wash the dishes",
    done: false,
  },
  {
    id:3,
    title: "Clean the room",
    done: false,
  },
  {
    id:4,
    title: "Clean the bathroom",
    done: false,
  },
]

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <div>
      <TaskInput />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App;
