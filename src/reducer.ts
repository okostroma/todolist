import {todoListAPI} from "./api";
import {TodolistType, TodolistUpdateObject, TaskType} from "./types/entities";
import {Dispatch} from "redux";
import {AppStateType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const ADD_TODOLIST = 'TODOLIST/REDUCER/ADD_TODOLIST';
const ADD_TASK = 'TODOLIST/REDUCER/ADD_TASK';
const DELETE_TASK = 'TODOLIST/REDUCER/DELETE_TASK';
const CHANGE_TASK = 'TODOLIST/REDUCER/CHANGE_TASK';
const DELETE_TODOLIST = 'TODOLIST/REDUCER/DELETE_TODOLIST';
const SET_TODOLISTS = 'SET_TODOLISTS';
const SET_TASKS = 'SET_TASKS';
const CHANGE_TODOLIST_TITLE = 'CHANGE_TODOLIST_TITLE';

type initialStateType = {
    todolists: Array<TodolistType>
}


const initialState: initialStateType  = {
    todolists: []
}
const reducer = (state: initialStateType = initialState, action: ActionType) : initialStateType => {
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

type ActionType = addTodoListType | newTodoListTitleType | deleteTodoListType | addTaskType | changeTaskType | deleteTaskType | setTodoListsType | setTasksType ;

type addTodoListType = {
    type: typeof ADD_TODOLIST
    newTodoList: TodolistType
}

export const addTodoList = (newTodoList: TodolistType) : addTodoListType  => ({
    type: ADD_TODOLIST,
    newTodoList: newTodoList
})

type newTodoListTitleType = {
    type: typeof CHANGE_TODOLIST_TITLE
    todolistId: string
    todoListTitle: string
}

export const newTodoListTitle = (todolistId: string,todoListTitle: string) : newTodoListTitleType => ({
    type: CHANGE_TODOLIST_TITLE, todolistId,todoListTitle })

type deleteTodoListType = {
    type: typeof DELETE_TODOLIST
    todolistId: string
}

export const deleteTodoList = (todolistId: string) : deleteTodoListType => ({
    type: DELETE_TODOLIST,
    todolistId: todolistId
})

type addTaskType = {
    type: typeof ADD_TASK
    todolistId: string
    newTask: TaskType
}

export const addTask = (todolistId: string, newTask: TaskType) : addTaskType => ({
    type: ADD_TASK,
    newTask: newTask,
    todolistId: todolistId
})

type changeTaskType = {
    type: typeof CHANGE_TASK
    task: TaskType
}

export const changeTask = (task: TaskType) : changeTaskType => ({
    type: CHANGE_TASK,
    task
})

type deleteTaskType = {
    type: typeof DELETE_TASK
    todolistId:string
    taskId: string
}

export const deleteTask = (todolistId:string, taskId: string) : deleteTaskType => ({
    type: DELETE_TASK,
    todolistId: todolistId, taskId: taskId
})

type setTodoListsType = {
    type: typeof SET_TODOLISTS
    todolists: Array<TodolistType>
}

export const setTodoLists = (todolists: Array<TodolistType>) : setTodoListsType => ({
    type: SET_TODOLISTS,
    todolists: todolists
})

type setTasksType = {
    type: typeof SET_TASKS
    todolistId: string
    tasks: Array<TaskType>
}


export const setTasks = (todolistId: string, tasks: Array<TaskType>) : setTasksType => ({
    type: SET_TASKS,
    todolistId, tasks
})


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>
type DispatchThunk = ThunkDispatch<AppStateType, unknown, ActionType>

export const getList = () :ThunkType  => {
    return (dispatch: DispatchThunk) => {
            todoListAPI.getTodoLists()
                .then(data => {
                    dispatch(setTodoLists(data));
                });
    }
}

export const addList = (title: string) :ThunkType => {
    return (dispatch: DispatchThunk)=> {
        todoListAPI.postTodoList(title)
            .then(data => {
                let todolists = data.data.item;
                dispatch(addTodoList(todolists));
            });

    }
}

export const deleteList = (todolistId: string):ThunkType => {
    return (dispatch: DispatchThunk) => {
        todoListAPI.deleteList(todolistId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(deleteTodoList(todolistId))
                }
            });
    }
}

export const changeListTitle = (todolistId: string, todoListTitle: string):ThunkType => {
    return (dispatch: DispatchThunk) => {
        todoListAPI.updateTodoList(todolistId, todoListTitle).then(data => {
            if (data.resultCode === 0) {
                dispatch(newTodoListTitle(todolistId, todoListTitle))
            }

        })
    }
}

export const getTasks = (todolistId: string):ThunkType => {
    return (dispatch:DispatchThunk) => {
        todoListAPI.getTasks(todolistId)
            .then(data => {
                if (!data.error) {
                    dispatch(setTasks(todolistId, data.items))
                }
            });
    }
}

export const postTask = (todolistId: string,newTitle: string):ThunkType => {
    return (dispatch:DispatchThunk) => {
        todoListAPI.postTask(todolistId, newTitle)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(addTask(todolistId, data.data.item))
                }
            });
    }
}


export const delTask = (todolistId: string, taskId: string):ThunkType => {
    return (dispatch:DispatchThunk) => {
        todoListAPI.delTask(todolistId, taskId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(deleteTask(todolistId, taskId))
                }
            });
    }
}

export const putTask = (todolistId: string, taskId: string, task: TaskType):ThunkType => {
    return (dispatch:DispatchThunk) => {
        todoListAPI.updateTask(todolistId,taskId,task)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(changeTask(data.data.item))
                }
            });
    }
}






export default reducer;


