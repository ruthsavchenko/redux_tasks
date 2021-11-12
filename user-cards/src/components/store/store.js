import {createStore} from 'redux'

import {getDataReducer} from './reducers'

export const store = createStore(getDataReducer)