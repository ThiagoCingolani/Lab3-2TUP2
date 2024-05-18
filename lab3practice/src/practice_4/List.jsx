import React from 'react'
import { Button, ListGroup, Form } from 'react-bootstrap';

const TaskList = ({ tasks, solvedTask, deleteTask }) => {
  const handleCheckboxClick = (e, taskId) => {
    e.stopPropagation();
    solvedTask(taskId);
  }
  return (
    <ListGroup className="mt-3">
      {tasks.map(task => (
        <ListGroup.Item
          key={task.id}
          className="d-flex justify-content-between align-items-center"
          style={{ cursor: 'pointer' }}
        >
          <div onClick={() => solvedTask(task.id)}>
            <Form.Check
              type="checkbox"
              checked={task.completed}
              onChange={(e) => handleCheckboxClick(e, task.id)}
              label={<span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>}
            />
          </div>
          <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
            Eliminar
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default TaskList;