import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const NewTask = ({ newTask }) => {
    const [userInput, setUserInput] = useState();

    const handleOnChange = (e) =>{
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;
        newTask(userInput);
        setUserInput('');
    };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup className="mb-3">
            <Form.Control type="text" placeholder="Ingrese una nueva tarea" value={userInput} onChange={handleOnChange}/>
            <Button variant="success" type="submit">Agregar tarea</Button>
        </InputGroup>
    </Form.Group>

    </Form>
  )
}

export default NewTask