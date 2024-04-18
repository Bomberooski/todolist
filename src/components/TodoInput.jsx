import { useState, useRef } from "react"

export default function TodoInput(props) {

        const {handleAddTodos, todoValue, setTodoValue} = props
        const inputRef = useRef(null)
        const handleClick = () => {
            handleAddTodos(todoValue);
            setTodoValue('');
            inputRef.current.focus();
        }



        return (
            <header>
                <input 
                    ref = {inputRef}
                    value={todoValue} 
                    onChange={(keystroke) => {
                        setTodoValue(keystroke.target.value)
                    } }     
                    placeholder="Enter ToDo Here..." />
                <button onClick={handleClick}>Add</button>
            </header>
        )
}