import React from 'react'

export default function TodoCard(props) {
    const {children, handleDeleteTodo, index, handleEditTodo, moveToTop, moveToBottom} = props

  return (
    <>
        <li className='todoItem'>
            {children}
            <div className="actionsContainer" >
                <button onClick={() => {
                    moveToTop(index)
                }}>
                    <i className="fa-solid fa-up-long tooltip"><span className="tooltiptext">Move To Top</span></i>                    
                </button>
                <button onClick={() => {
                    moveToBottom(index)
                }}>
                    <i className="fa-solid fa-down-long tooltip"><span className="tooltiptext">Move To Bottom</span></i>                    
                </button>
                <button onClick={() => {
                    handleEditTodo(index)
                }}>
                    <i className="fa-solid fa-pen-to-square tooltip"><span className="tooltiptext">Edit</span></i>
                    
                </button>
                <button onClick={() => {
                    handleDeleteTodo(index)
                }}>
                    <i className="fa-solid fa-trash-can tooltip"><span className="tooltiptext">Delete</span></i>
                    
                </button>
            </div>
            
        </li>
    </>
  )
}
