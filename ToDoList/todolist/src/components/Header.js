import { useEffect, useState } from "react";

function Header({todo, setTodo, todos, setTodos}){

    const[filtered, setFilter] = useState(todos);

    useEffect(() => {
        setFilter(todos);
    }, [todos]);

    function handleSubmit(e) {
        e.preventDefault();
        
        if(todo){
            const newTodo = {
                id: new Date().getTime(),
                text: todo,
                completed: false,
            };
            setTodos([...todos].concat(newTodo));
        }
        setTodo("");
    }

    function sortTodo(){
        const newTodo = [...todos].sort((a, b) => a.text.localeCompare(b.text));
        setTodos(newTodo);
        console.log(newTodo);
    }

    function todoFilter(completed){
        if(completed == 'all'){
            setFilter(todos);
        }
        else {
            const newTodo = [...todos].filter(item => item.completed === completed);
            setFilter(newTodo);
            setTodo("");
        }
    }

    return(
        <div id="todo-list">
            <h1>To do List: {todos.length}</h1>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
            />
            <button type="submit">Add Todo</button>
            </form>
            <button onClick={() => sortTodo()} className="button_nav">Sort</button>
            <button onClick={() => todoFilter('all')} className="button_nav">All</button>
            <button onClick={() => todoFilter(true)} className="button_nav">Open Tasks</button>
            <button onClick={() => todoFilter(false)} className="button_nav">Closed Tasks</button>
        </div>
    );
}

export default Header;