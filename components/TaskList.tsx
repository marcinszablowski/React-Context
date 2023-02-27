import { useState } from 'react';
import * as React from 'react';

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
        <button onClick={() => setIsEditing(false)}>Save</button>
      </React.Fragment>
    );
  } else {
    taskContent = (
      <React.Fragment>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
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
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
};

export default TaskList;
