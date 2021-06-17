import React from 'react'
import Todo from './Todo'
export default function Todos(props) {
    return (
        <div className="container my-3">
            <h3 >Todos</h3>
            {props.todos.length === 0
                ? "No items to show"
                : props.todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} onDelete={props.onDelete} />
                })}
        </div>
    )
}
