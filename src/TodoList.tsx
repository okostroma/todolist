import React from 'react';
import './App.css';
import AddNewItemForm from "./AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";
import {delTask, getTasks, postTask, putTask} from "./reducer";
import { TaskType } from './types/entities';
import {AppStateType} from "./store";



type StateType = {
    tasks: Array<TaskType>
    filterValue: string
}

type MapDispatchToPropsType = {
    getTasks: (id: string) => void
    postTask: (id: string,newTitle:string) => void
    delTask: (id: string,taskId: string) => void
    putTask: (id: string,taskId: string,task: TaskType) => void
}
type OwnPropsType = {
    id: string
    tasks: Array<TaskType>
    title: string
    changeTodoListTitle: (todolistId: string, todoListTitle: string) => void
    deleteTodoList: (id: string) => void
}



class TodoList extends React.Component<OwnPropsType & MapDispatchToPropsType,StateType > {


    state = {
        tasks: [
        ],
        filterValue: "All"
    };


    restoreState = () => {

        this.props.getTasks(this.props.id)

    }

    componentDidMount() {
        this.restoreState();
    }

    addTask = (newTitle: string) => {

        this.props.postTask(this.props.id, newTitle)


    }

    deleteTask = (taskId: string) => {

        this.props.delTask(this.props.id, taskId)

    }


    changeFilter = (newFilterValue: string) => {
        this.setState({
            filterValue: newFilterValue
        });
    }

    changeTask = (task:  TaskType) => {

        this.props.putTask(this.props.id,task.id,task)
    }

    changeStatus = (task:TaskType, status: boolean) => {

        this.changeTask({...task, status: status ? 2 : 0})

    }

    changeTitle = (task:TaskType, title: string) => {

        this.changeTask({...task, title: title})

    }

    changePriority = (task:TaskType, priority: string) => {
        this.changeTask({...task, priority: priority === 'high' ? 2 : priority === 'medium' ? 1 : 0 })
    }

    isTodoListDeleted = () => {
        this.props.deleteTodoList(this.props.id);
    }




    render = () => {
        let {tasks = []} = this.props;

        let filteredTasks = tasks.filter(t => {
            switch (this.state.filterValue) {
                case "Active":
                    return t.status === 0;
                case "Completed":
                    return t.status === 2;
                case "All":
                    return true;

                default:
                    return true;

            }
        })

        return (

            <div className="todoList">
                <TodoListTitle id={this.props.id} changeTodoListTitle={this.props.changeTodoListTitle} title={this.props.title}/>
                <span onClick={this.isTodoListDeleted}> <FontAwesomeIcon
                className='times-header' icon={faTimes}/></span>
                <AddNewItemForm addItem={this.addTask}/>
                <TodoListTasks changePriority={this.changePriority}
                               deleteTask={this.deleteTask} changeTitle={this.changeTitle} tasks={filteredTasks}
                               changeStatus={this.changeStatus}/>
                <TodoListFooter filerValue={this.state.filterValue} changeFilter={this.changeFilter}/>


            </div>
        );
    }
}



const ConnectedTodoList = connect<{}, MapDispatchToPropsType, {} , AppStateType>(null, {
    putTask,
    delTask,
    getTasks,
    postTask
})(TodoList)

export default ConnectedTodoList;

