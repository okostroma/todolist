import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";
import {TaskType} from "./types/entities";


type OwnPropsType = {
    tasks: Array<TaskType>
    changePriority: (task:TaskType, priority: string) => void
    deleteTask: (taskId: string) => void
    changeTitle: (task:TaskType, title: string) => void
    changeStatus: (task:TaskType, status: boolean) => void
}

class TodoListTasks extends React.Component<OwnPropsType> {

    render = () => {
        let taskElement = this.props.tasks.map(task =>
            <TodoListTask key={task.id} changePriority={this.props.changePriority}
                          deleteTask={this.props.deleteTask} changeTitle={this.props.changeTitle} task={task}
                          changeStatus={this.props.changeStatus} />);


        return (
            <div className="todoList-tasks">
                {taskElement}
            </div>

        );
    }
}


export default TodoListTasks;

