import { createStore, combineReducers } from 'redux';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
    register: registerReducer,
});

const store = createStore(rootReducer);

export default store;
