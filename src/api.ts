import axios from "axios";
import {TaskType, TodolistType, TodolistUpdateObject} from "./types/entities";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {'API-KEY': '7c011e76-2db4-49d9-abb8-3dc632ba8483'}
})


type CommonType<T> = {
    resultCode: number
    messages: Array<string>
    data:  T
}


type GetTasksType = {
    items: Array<TaskType>
    totalCount: number
    error: string
}

export const todoListAPI =  {
    getTodoLists() {
       return instance.get<Array<TodolistType>>("todo-lists").then(response => response.data)
    },
    postTodoList(title: string) {
        return instance.post<CommonType<{item: TodolistType}>>("todo-lists", {title: title}).then(response => response.data)
    },
    deleteList(todolistId: string) {
       return instance.delete<CommonType<{}>>(`todo-lists/${todolistId}`).then(response => response.data)
    },
    getTasks(todolistId: string){
        return instance.get<GetTasksType>(`todo-lists/${todolistId}/tasks`).then(response => response.data)
    },
    postTask(todolistId: string, newTitle: string){
        return instance.post<CommonType<{item: TaskType}>>(`todo-lists/${todolistId}/tasks`, {title: newTitle}).then(response => response.data)
    },
    delTask(todolistId: string, taskId: string){
        return instance.delete<CommonType<{}>>(`todo-lists/${todolistId}/tasks/${taskId}`).then(response => response.data)
    },
    updateTask(todolistId: string,taskId: string,task: TaskType){
        return instance.put<CommonType<{item: TaskType}>>(`todo-lists/${todolistId}/tasks/${taskId}`,
            task).then(response => response.data)
    },
    updateTodoList(todolistId: string, todoListTitle: string){
        return instance.put<CommonType<{item: TodolistType}>>(`todo-lists/${todolistId}`, {title: todoListTitle}).then(response => response.data)
    }

}





