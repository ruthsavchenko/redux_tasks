import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteFromDone } from './store/actions'

function Done() {
    const dispatch = useDispatch()
    const done = useSelector((state => state.done))

    return (
        <div className="done">
            <h2>Done ✅</h2>
            {done.map((todo) => {
                return (
                    <div key={todo.id} className="item-todo">
                        <div className="item-text">
                            {todo.task}
                        </div>
                        <div className="emoji">
                            <div className="todo-delete" onClick={() => dispatch(deleteFromDone(todo.id))}>
                                ❌
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Done