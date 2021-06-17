import React, { useState } from 'react'
export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (title !== '' && desc !== '') {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
        else alert("Title or Description can't be empty");
    }
    return (
        <div className="container my-3">
            <h2>Add Todos</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} id="desc" />
                </div>
                <button type="submit" className="btn btn-success" onClick={onSubmit}>Add Todo</button>
            </form>
        </div>
    )
}
