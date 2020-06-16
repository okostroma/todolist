const ADD_TODOLIST = 'TODOLIST/REDUCER/ADD_TODOLIST';
const ADD_TASK = 'TODOLIST/REDUCER/ADD_TASK';
const DELETE_TASK = 'TODOLIST/REDUCER/DELETE_TASK';
const CHANGE_TASK = 'TODOLIST/REDUCER/CHANGE_TASK';
const DELETE_TODOLIST = 'TODOLIST/REDUCER/DELETE_TODOLIST';
const SET_TODOLISTS = 'SET_TODOLISTS';
const SET_TASKS = 'SET_TASKS'

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

export const addTodoListActionCreator = (newTodoList) => ({
    type: ADD_TODOLIST,
    newTodoList: newTodoList
})

export const deleteTodoListActionCreator = (todolistId) => ({
    type: DELETE_TODOLIST,
    todolistId: todolistId
})

export const addTaskActionCreator = (todolistId, newTask) => ({
    type: ADD_TASK,
    newTask: newTask,
    todolistId: todolistId
})

export const changeTaskActionCreator = (task) => ({
    type: CHANGE_TASK,
    task
})

export const deleteTaskActionCreator = (todolistId, taskId) => ({
    type: DELETE_TASK,
    todolistId: todolistId, taskId: taskId
})

export const setTodoListsActionCreator = (todolists) => ({
    type: SET_TODOLISTS,
    todolists: todolists
})

export const setTasksActionCreator = (todolistId, tasks) => ({
    type: SET_TASKS,
    todolistId, tasks
})

export default reducer;


