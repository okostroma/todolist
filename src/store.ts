
import {applyMiddleware, combineReducers, createStore} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    todolistReducer: reducer
})

type RedusersType = typeof reducers;

export type AppStateType = ReturnType<RedusersType>

const store = createStore(reducers, applyMiddleware(thunk));
export default store;


