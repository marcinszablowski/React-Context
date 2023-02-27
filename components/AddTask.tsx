import { useState, Fragment } from 'react';
import * as React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const AddTask = ({ onAddTask }) => {
  const { theme } = useContext(ThemeContext);
  const [text, setText] = useState('');

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Add task"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className={theme}
        onClick={() => {
          setText('');
          onAddTask(text);
        }}
      >
        Add
      </button>
    </React.Fragment>
  );
};

export default AddTask;
