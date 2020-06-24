import {todoListAPI} from "./api";

const ADD_TODOLIST = 'TODOLIST/REDUCER/ADD_TODOLIST';
const ADD_TASK = 'TODOLIST/REDUCER/ADD_TASK';
const DELETE_TASK = 'TODOLIST/REDUCER/DELETE_TASK';
const CHANGE_TASK = 'TODOLIST/REDUCER/CHANGE_TASK';
const DELETE_TODOLIST = 'TODOLIST/REDUCER/DELETE_TODOLIST';
const SET_TODOLISTS = 'SET_TODOLISTS';
const SET_TASKS = 'SET_TASKS';
const CHANGE_TODOLIST_TITLE = 'CHANGE_TODOLIST_TITLE';

const initialState = {
    todolists: [
        // {id: 0,title: 'every day',tasks: [{id:0, title: 'css', isDone: false},{id:1, title: 'css', isDone: false},{id:2, title: 'css', isDone: false}]},
        // {id: 1,title: 'every day',tasks: [{id:0, title: 'css', isDone: false},{id:1, title: 'css', isDone: false}]},
        // {id: 2,title: 'every day',tasks: [{id:0, title: 'css', isDone: false}]}
    ]
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOLIST:
            return {
                ...state,
                todolists: [...state.todolists, action.newTodoList]
            }
        case CHANGE_TODOLIST_TITLE: {
            return {...state, todolists: state.todolists.map(t => {
                if(t.id === action.todolistId) {
                    return {...t, title: action.todoListTitle}
                } else {
                    return t
                }
                }) }
        }
        case ADD_TASK: {

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
        case DELETE_TASK: {

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
        case CHANGE_TASK: {
            debugger

            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.task.todoListId) {
                        return {
                            ...tl, tasks: tl.tasks.map(task => {
                                if (task.id === action.task.id) {
                                    return action.task
                                } else {
                                    return task;
                                }
                            })
                        }
                    } else {
                        return tl

                    }
                })
            }
        }
        case DELETE_TODOLIST: {

            return {
                ...state,
                todolists: state.todolists.filter(tl => {
                        return tl.id !== action.todolistId
                    }
                )
            }
        }
        case SET_TODOLISTS: {
            return {
                ...state, todolists: action.todolists.map(todolist => {
                    return {...todolist, tasks: []}
                })
            }
        }
        case SET_TASKS: {
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: action.tasks}
                    } else {
                        return tl

                    }
                })
            }
        }

        default:
            return state;


    }

}

export const addTodoList = (newTodoList) => ({
    type: ADD_TODOLIST,
    newTodoList: newTodoList
})

export const newTodoListTitle = (todolistId,todoListTitle) => ({
    type: CHANGE_TODOLIST_TITLE, todolistId,todoListTitle })

export const deleteTodoList = (todolistId) => ({
    type: DELETE_TODOLIST,
    todolistId: todolistId
})

export const addTask = (todolistId, newTask) => ({
    type: ADD_TASK,
    newTask: newTask,
    todolistId: todolistId
})

export const changeTask = (task) => ({
    type: CHANGE_TASK,
    task
})

export const deleteTask = (todolistId, taskId) => ({
    type: DELETE_TASK,
    todolistId: todolistId, taskId: taskId
})

export const setTodoLists = (todolists) => ({
    type: SET_TODOLISTS,
    todolists: todolists
})

export const setTasks = (todolistId, tasks) => ({
    type: SET_TASKS,
    todolistId, tasks
})


export const getList = () => {
    return (dispatch) => {
            todoListAPI.getTodoLists()
                .then(data => {
                    dispatch(setTodoLists(data));
                });
    }
}

export const addList = (title) => {
    return (dispatch)=> {
        todoListAPI.postTodoList(title)
            .then(data => {
                let todolists = data.data.item;
                dispatch(addTodoList(todolists));
            });

    }
}

export const deleteList = (todolistId) => {
    return (dispatch) => {
        todoListAPI.deleteList(todolistId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(deleteTodoList(todolistId))
                }
            });
    }
}

export const changeListTitle = (todolistId, todoListTitle) => {
    return (dispatch) => {
        todoListAPI.updateTodoList(todolistId, todoListTitle).then(data => {
            if (data.resultCode === 0) {
                dispatch(newTodoListTitle(todolistId, todoListTitle))
            }

        })
    }
}

export const getTasks = (todolistId) => {
    return (dispatch) => {
        todoListAPI.getTasks(todolistId)
            .then(data => {
                if (!data.error) {
                    dispatch(setTasks(todolistId, data.items))
                }
            });
    }
}

export const postTask = (todolistId,newTitle) => {
    return (dispatch) => {
        todoListAPI.postTask(todolistId, newTitle)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(addTask(todolistId, data.data.item))
                }
            });
    }
}


export const delTask = (todolistId, taskId) => {
    return (dispatch) => {
        todoListAPI.delTask(todolistId, taskId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(deleteTask(todolistId, taskId))
                }
            });
    }
}

export const putTask = (todolistId, taskId, task) => {
    return (dispatch) => {
        todoListAPI.updateTask(todolistId,taskId,task)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(changeTask(data.data.item))
                }
            });
    }
}






export default reducer;


