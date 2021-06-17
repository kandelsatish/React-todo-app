import React from 'react'

export default function Footer() {
    const footerStyle = {
        position: 'relative',
        top: '80vh',
        width: '100%'
    };
    return (
        <div className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">Copyright &copy; MyTodo.com</p>
        </div>
    )
}
