import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteFromInProgress, deleteTodo, moveToDone } from './store/actions'

function InProgress() {
    const dispatch = useDispatch()
    const inProgress = useSelector((state => state.inProgress))

    return (
        <div className="inProgress">
            <h2>In progress ⏳</h2>
            {inProgress.map((todo) => {
                return (
                    <div key={todo.id} className="item-todo">
                        <div className="item-text">
                            {todo.task}
                        </div>
                        <div className="emoji">
                            <div className="todo-done" onClick={() => dispatch(moveToDone(todo.id, todo.task), dispatch(deleteTodo(todo.id), dispatch(deleteFromInProgress(todo.id))))}>
                                ✅
                            </div>
                            <div className="todo-delete" onClick={() => dispatch(deleteFromInProgress(todo.id))}>
                                ❌
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default InProgress