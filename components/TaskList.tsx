import { useState } from 'react';
import * as React from 'react';
import Button from '../Button';

export interface Task {
  text: string;
  id: number;
  done: boolean;
}

interface TaskProps {
  task: Task;
  onChange: (task: Task) => void;
  onDelete: (taskId: Task['id']) => void;
}

interface TaskListProps {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: () => void;
}

const TaskList = ({ tasks, onChangeTask, onDeleteTask }: TaskListProps) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>
        <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
      </li>
    ))}
  </ul>
);

const Task = ({ task, onChange, onDelete }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <React.Fragment>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <Button onClick={() => setIsEditing(false)}>Save</Button>
      </React.Fragment>
    );
  } else {
    taskContent = (
      <React.Fragment>
        <span>{task.text}</span>
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
      </React.Fragment>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent} <Button onClick={() => onDelete(task.id)}>Delete</Button>
    </label>
  );
};

export default TaskList;
