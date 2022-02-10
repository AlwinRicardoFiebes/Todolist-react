import React, {useState} from "react";

function TodoForm(props) {
const [input, setInput] = useState('');

const handlechange= e => {
    setInput(e.target.value)
}

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 100000),
        text: input
    });

   setInput('') 
};

    return (
        <form className='todo-from' onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Adicione uma Tarefa'
            value={input}
            name='text'
            className='todo-input'
            onChange={handlechange}
            />
            <button className="todo-button">Adicionar Tarefa</button>
        </form>
    );
}

export default TodoForm