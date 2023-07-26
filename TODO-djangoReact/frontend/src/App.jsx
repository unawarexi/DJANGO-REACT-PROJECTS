import { useState, useEffect } from 'react'
import './App.css'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import axios from "axios"

function App() {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    axios.get("/api/todos/")
    .then((res) => {
      settodos(res.data)
    }).catch(() => {
      alert("something went wrong");
    })
  }, [])



  return (
    <> 
    <div>
      <Navbar bg ="Light" style={{marginBottom: "20px"}}>
        <Container>
          <Navbar.Brand href="#">TODO-APP</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <TodoForm />
        <TodoList todos={todos} />
      </Container>
    </div>
      
    </>
  )
}

export default App
