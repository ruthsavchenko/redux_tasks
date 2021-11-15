import React from 'react'
import { TodoForm } from './TodoForm'
import {useDispatch, useSelector} from 'react-redux'
import { deleteTodo, moveToInProgress, moveToDone, deleteFromInProgress } from './store/actions'
 
const Todo = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state => state.todos))

    return (
        <div className="todo">
            <h2>Todo 📃</h2>
            <TodoForm />
            {todos.map((todo) => {
                return (
                    <div key={todo.id} className="item-todo">
                        <div className="item-text">
                            {todo.task}
                        </div>
                        <div className="emoji">
                            <div className="todo-in-progress" onClick={() => dispatch(moveToInProgress(todo.id, todo.task), dispatch(deleteTodo(todo.id)))}>
                                ⏳
                            </div>
                            <div className="todo-done" onClick={() => dispatch(moveToDone(todo.id, todo.task), dispatch(deleteTodo(todo.id)), dispatch(deleteFromInProgress(todo.id)))}>
                                ✅
                            </div>
                            <div className="todo-delete" onClick={() => dispatch(deleteTodo(todo.id))}>
                                ❌
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo
