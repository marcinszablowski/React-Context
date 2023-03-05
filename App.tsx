import * as React from 'react';
import { createContext, useState, useReducer } from 'react';
import './style.css';
import BottomSection from './BottomSection';
import Button from './Button';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import type { Task } from './components/TaskList';

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const handleAddTask = (text: string) => {
    dispatch({
      type: 'added',
      text: text,
      id: nextId++,
    });
  };

  const handleChangeTask = (task: Task) => {
    dispatch({
      type: 'changed',
      task: task,
    });
  };

  const handleDeleteTask = () => {};

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <p style={{ textAlign: 'right' }}>
          {theme === 'dark' ? '🌛 Dark' : '🌞 Light'} mode
        </p>

        <form className={theme} onSubmit={(e) => e.preventDefault()}>
          <h2>Tasks</h2>
          <AddTask onAddTask={handleAddTask} />
          <TaskList
            tasks={tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
          />
          <Button>🚀 Submit</Button>
        </form>

        <BottomSection />
      </div>
      <button
        onClick={() =>
          setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
        }
      >{`App: Change to ${theme === 'dark' ? 'light' : 'dark'}`}</button>
    </ThemeContext.Provider>
  );
}

const tasksReducer = (tasks: Task[], action): Task[] => {
  switch (action.type) {
    case 'added':
      return [...tasks, { done: false, id: action.id, text: action.text }];
    case 'changed':
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    case 'deleted':

    default:
      throw Error('Unknown action type');
  }
};
const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false },
];
let nextId = 3;
