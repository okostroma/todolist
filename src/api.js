import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {'API-KEY': '89d3ab27-e6f8-442a-b614-5050ed22f870'}
})


export const todoListAPI =  {
    getTodoLists() {
       return instance.get("todo-lists").then(response => response.data)
    },
    postTodoList(title) {
        return instance.post("todo-lists", {title: title}).then(response => response.data)
    },
    deleteList(todolistId) {
       return instance.delete(`todo-lists/${todolistId}`).then(response => response.data)
    },
    getTasks(todolistId){
        return instance.get(`todo-lists/${todolistId}/tasks`).then(response => response.data)
    },
    postTask(todolistId, newTitle){
        return instance.post(`todo-lists/${todolistId}/tasks`, {title: newTitle}).then(response => response.data)
    },
    delTask(todolistId, taskId){
        return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`).then(response => response.data)
    },
    updateTask(todolistId,taskId,task){
        return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`,
            task).then(response => response.data)
    },
    updateTodoList(todolistId, todoListTitle){
        return instance.put(`todo-lists/${todolistId}`, {title: todoListTitle}).then(response => response.data)
    }

}





