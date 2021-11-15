import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './store/actions'

export const TodoForm = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        if(value) {
            e.preventDefault();
            dispatch(addTodo(
                {
                    id: Math.random().toString(30).substr(2, 9),
                    task: value,
                }
            ))
            setValue('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Enter task"
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    value={value}
                // onKeyDown={handleKeyPress}
                />
                <button type="submit">add</button>
            </form>
        </div>
    )
}
