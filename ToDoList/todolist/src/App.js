import React from 'react';
import './Style/Header.scss'
import './Style/ToDoList.scss'
import ToDoList from './components/ToDoList';
import Header from './components/Header';
import {useState } from 'react';

function App(){

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [todoEditing, setTodoEditing] = useState(null);
    const [editingText, setEditingText] = useState("");

    return (
        <div>
            <Header 
                todo={todo} 
                setTodo={setTodo}
                todos={todos} 
                setTodos={setTodos}
            />
            <ToDoList
                todo={todo} 
                setTodo={setTodo}
                todos={todos} 
                setTodos={setTodos}
                todoEditing={todoEditing}
                setTodoEditing={setTodoEditing}
                editingText={editingText}
                setEditingText={setEditingText}
            />
        </div>
    );
}
export default App;