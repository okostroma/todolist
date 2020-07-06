import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";
import PropTypes from 'prop-types';

class TodoListTasks extends React.Component {

    render = () => {
        let taskElement = this.props.tasks.map(task =>
            <TodoListTask key={task.id} changePriority={this.props.changePriority}
                          deleteTask={this.props.deleteTask} changeTitle={this.props.changeTitle} task={task} changeStatus={this.props.changeStatus} />);


        return (
            <div className="todoList-tasks">
                {taskElement}
            </div>

        );
    }
}


export default TodoListTasks;

