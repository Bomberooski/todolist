import { useState } from "react"

export default function TodoInput(props) {

        const {handleAddTodos, todoValue, setTodoValue} = props




        return (
            <header>
                <input 
                    value={todoValue} 
                    onChange={(keystroke) => {
                        setTodoValue(keystroke.target.value)
                    } } 
                    placeholder="Enter ToDo Here..." />
                <button onClick={() => {
                    handleAddTodos(todoValue)
                    setTodoValue('')
                }}>Add</button>
            </header>
        )
}