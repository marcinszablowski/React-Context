import { useState, Fragment } from 'react';
import * as React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import Button from '../Button';

const AddTask = ({ onAddTask, onClick }) => {
  const { theme } = useContext(ThemeContext);
  const [text, setText] = useState('');

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Add task"
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={onClick}>Add</Button>
    </React.Fragment>
  );
};

export default AddTask;
