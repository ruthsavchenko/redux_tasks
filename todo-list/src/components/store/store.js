import { createStore } from 'redux';

import { reducerTodo } from './reducers';

export const store = createStore(reducerTodo);