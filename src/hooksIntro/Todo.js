import React from 'react'

function Todo(props) {
    return (
        <div>
            <p>{props.todo}</p>
        </div>
    )
}

Todo.defaultProps = {
    todo: "ja sam default todo"
}

export default Todo
