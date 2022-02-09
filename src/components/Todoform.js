import React, {useState} from "react";

function TodoForm() {
const [input, setInput] = useState('')

    return (
        <form className='todo-from'>
            <input 
            type='text' 
            placeholder='Adicione uma Tarefa'
            value={input}
            name='text'
            classname='todo-input'
            />
            <button className="todo-button">Adicionar Tarefa</button>
        </form>
    );
}

export default TodoForm