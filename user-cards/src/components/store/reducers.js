import { GET_DATA } from './constants'

const defaultValues = {
    users: []
};

export const getDataReducer = (state = defaultValues, action) => {
    switch (action.type) {
        case GET_DATA: {
            return {
                ...state,
                users: action.payload
            };
        }
        default: {
            return state;
        }
    }
}


