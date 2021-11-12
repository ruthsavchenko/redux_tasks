import { GET_DATA } from './constants'

export const actionGetData = (data) => ({
    type: GET_DATA,
    payload: data,
});