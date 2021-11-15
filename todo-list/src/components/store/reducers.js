import { ADD_TODO, DELETE_TODO, MOVE_TO_INPROGRESS, DELETE_FROM_INPROGRESS, MOVE_TO_DONE, DELETE_FROM_DONE } from './constants';

const defaultValues = {
    todos: [
        {id: 1, task: 'Go shopping'},
        {id: 2, task: 'Work'},
        {id: 3, task: 'Go to the doctor'}
    ],
    done: [], 
    inProgress: [],
}

export const reducerTodo = (state = defaultValues, action) => {
    switch (action.type) {
        case ADD_TODO: {
            console.log(action)

            return {
                ...state,
                todos: [ ...state.todos, action.payload], 
            }
        }
        case DELETE_TODO: {
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== action.payload)]
            }
        }
        case MOVE_TO_INPROGRESS: {
            return {
                ...state, 
                inProgress: [...state.inProgress, action.payload],
            }
        }
        case DELETE_FROM_INPROGRESS: {
            return {
                ...state, 
                inProgress: [...state.inProgress.filter(todo => todo.id !== action.payload)]
            }
        }
        case MOVE_TO_DONE: {
            return {
                ...state, 
                done: [...state.done, action.payload],
            }
        }
        case DELETE_FROM_DONE: {
            return {
                ...state, 
                done: [...state.done.filter(todo => todo.id !== action.payload)]
            }
        }
        default: {
            return state
        }
    }
}