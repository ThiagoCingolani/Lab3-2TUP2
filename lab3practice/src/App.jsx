import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import TaskList from './practice_4/List'
import NewTask from './practice_4/NewTask'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  const [tasks,setTasks] = useState([]);

  const newTask = (userImput) =>{
    setTasks([...tasks, {id: Date.now(), text: userImput, completed: false}])
  }
  const solvedTask = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={15}>
          <NewTask newTask={newTask} />
          <TaskList tasks={tasks} solvedTask={solvedTask} deleteTask= {deleteTask}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App