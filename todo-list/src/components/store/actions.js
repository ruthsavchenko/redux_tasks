import { ADD_TODO, DELETE_TODO, MOVE_TO_INPROGRESS, DELETE_FROM_INPROGRESS, MOVE_TO_DONE, DELETE_FROM_DONE } from './constants';

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const moveToInProgress = (id, task) => {
    return {
        type: MOVE_TO_INPROGRESS,
        payload: {
            id, 
            task,
        }
    }
}

export const deleteFromInProgress = (id) => {
    return {
        type: DELETE_FROM_INPROGRESS,
        payload: id
    }
}

export const moveToDone = (id, task) => {
    return {
        type: MOVE_TO_DONE,
        payload: {
            id, 
            task,
        }
    }
}

export const deleteFromDone = (id) => {
    return {
        type: DELETE_FROM_DONE,
        payload: id
    }
}


