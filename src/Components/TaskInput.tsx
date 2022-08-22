import React, { useState } from 'react';
import { Task } from "../Types";
import '../App.css';


const TaskInput: React.FC = () => {
  const [inputTitle, setInputTitle] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> ) => {

  }
  return (
    <div className='inputForm'>
      <div className='inner'>
        <input type="text" 
        className='input' 
        value={inputTitle}
        onChange={handleInputChange}
        />
        <button className="btn is-primary">ADD</button>
      </div>
    </div>
  );
}

export default TaskInput;
