function ToDoList({todo, setTodos, setTodo, todos, todoEditing, setTodoEditing, editingText, setEditingText}){

    function deleteTodo(id) {
      let updatedTodos = [...todos].filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    }
  
    function toggleTask(id) {
      setTodos([
        ...todos.map((todo) => 
          todo.id === id ? { ...todo, completed: !todo.completed } : {...todo }
        )
      ])
      console.log(todo.comleted);
    }
  
    function submitEdits(id) {
      const updatedTodos = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.text = editingText;
        }
        return todo;
      });
      setTodos(updatedTodos);
      setTodoEditing(null);
    }
  
    return (
      <div id="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            <div className="todo-text">
              {todo.id === todoEditing ? (
                <input onChange={(e) => setEditingText(e.target.value)}/>
              ) : (
                <div className={todo.comleted ? "item-text strike" : "item-text"} onClick={() => toggleTask(todo.id)}>
                  {todo.text}
                </div>
              )}
            </div>
            <div className="todo-actions">
              {todo.id === todoEditing ? (
                <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
              ) : (
                <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
              )}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default ToDoList;