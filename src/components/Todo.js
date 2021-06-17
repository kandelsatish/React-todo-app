import React from 'react'

export default function Todo(props) {
    return (
        <div className="my-5">
            <h3>{props.todo.title}</h3>
            <p>{props.todo.description}</p>
            <button className="btn btn-danger" onClick={() => props.onDelete(props.todo)}>Delete</button>
            <hr/>
        </div>
    )
}
