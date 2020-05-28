
import {createStore} from "redux";

const initialState = {
    todolists: [
        // {id: 0,title: 'every day',tasks: [{id:0, title: 'css', isDone: false},{id:1, title: 'css', isDone: false},{id:2, title: 'css', isDone: false}]},
        // {id: 1,title: 'every day',tasks: [{id:0, title: 'css', isDone: false},{id:1, title: 'css', isDone: false}]},
        // {id: 2,title: 'every day',tasks: [{id:0, title: 'css', isDone: false}]}
        ]
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODOLIST':
            return {
                ...state,
                todolists: [...state.todolists, action.newTodoList]
            }
        case 'ADD_TASK': {

            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: [...tl.tasks, action.newTask]}
                    } else {
                            return tl

                    }
                })
            }
        }
        case 'DELETE_TASK': {

            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: [...tl.tasks.filter(task => task.id !== action.taskId)]}
                    } else {
                        return tl
                    }
                })
            }
        }
        case 'CHANGE_TASK': {

            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: [...tl.tasks.map(task => {
                            if (task.id === action.taskId ) {
                                return {
                                    ...task, ...action.obj
                                }
                            } else {
                                return task;
                            }
                            })]}
                    } else {
                        return tl

                    }
                })
            }
        }
        case 'DELETE_TODOLIST': {

            return {
                ...state,
                todolists: state.todolists.filter(tl => {return tl.id !== action.todolistId}
                )
            }
        }
        default:
            return state;



    }

}



const store = createStore(reducer);
export default store;


