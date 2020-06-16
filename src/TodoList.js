import React from 'react';
import './App.css';
import AddNewItemForm from "./AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";
import {addTaskActionCreator, changeTaskActionCreator, deleteTaskActionCreator, setTasksActionCreator} from "./reducer";
import * as axios from "axios";
import {todoListAPI} from "./api";

class TodoList extends React.Component {


    state = {
        tasks: [
        ],

        filterValue: "All"
    };
    nextTaskId = 0;
    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('state-' + this.props.id, stateAsString)

    }
    restoreState = () => {
        // let state = {
        //     tasks: [],
        //     filterValue: 'All'
        // };
        // let stateAsString = localStorage.getItem('state-' + this.props.id);
        // if (stateAsString) {
        //     state = JSON.parse(stateAsString);
        // }
        // this.setState(state, () => {
        //     this.state.tasks.forEach(t => {
        //             if (t.id >= this.nextTaskId) {
        //                 this.nextTaskId = t.id + 1
        //             }
        //         }
        //     )
        // })

        todoListAPI.getTasks(this.props.id)
            .then(data => {
                if (!data.error) {
                    this.props.setTasks(this.props.id, data.items)
                }
            });

    }

    componentDidMount() {
        this.restoreState();
    }

    addTask = (newTitle) => {

        // let newTask = {
        //     id: this.nextTaskId,
        //     title: newTitle,
        //     isDone: false,
        //     priority: ""
        // };
        // this.nextTaskId++;
        // let newTasks = [...this.state.tasks, newTask];
        //
        // this.setState({
        //     tasks: newTasks
        // }, this.saveState);

        // this.props.addTask(this.props.id, newTask);

        todoListAPI.postTask(this.props.id, newTitle)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.addTask(this.props.id, data.data.item)
                }
            });


    }

    deleteTask = (taskId) => {
        // let newTasks = this.props.tasks.filter(t => {
        //     return t.id !== taskId;
        // });
        // this.setState({
        //     tasks: newTasks
        // }, this.saveState);

        // this.props.deleteTask(this.props.id, taskId)
        todoListAPI.delTask(this.props.id, taskId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.deleteTask(this.props.id, taskId)
                }
            });

    }


    changeFilter = (newFilterValue) => {
        debugger
        this.setState({
            filterValue: newFilterValue
        });
    }

    changeTask = (task) => {

        debugger
        // this.props.changeTask (this.props.id,taskId, obj )

        todoListAPI.updateTask(this.props.id,task.id,task)
            .then(data => {
                if (data.resultCode === 0) {
                    debugger
                    this.props.changeTask(data.data.item)
                }
            });
    }

    changeStatus = (task, status) => {

        this.changeTask({...task, status: status === true ? 2 : 0})

    }

    changeTitle = (task, title) => {
        debugger
        this.changeTask({...task, title: title})

    }

    changePriority = (task, priority) => {
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
                <TodoListTitle title={this.props.title}/> <span onClick={this.isTodoListDeleted}> <FontAwesomeIcon
                className='times-header' icon={faTimes}/></span>
                <AddNewItemForm title={this.props.title} addItem={this.addTask}/>
                <TodoListTasks changePriority={this.changePriority}
                               deleteTask={this.deleteTask} changeTitle={this.changeTitle} tasks={filteredTasks}
                               changeStatus={this.changeStatus}/>
                <TodoListFooter filerValue={this.state.filterValue} changeFilter={this.changeFilter}/>


            </div>
        );
    }
}


// const mapStateToProps = (state) => {
//     return {
//         tasks: state.todolists.tasks
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (todolistId, newTask) => {
            // let action = {
            //     type: 'ADD_TASK',
            //     newTask,
            //     todolistId
            //
            // }

            dispatch(addTaskActionCreator(todolistId, newTask))
        },
        changeTask: (task) => {
            // let action = {
            //     type: 'CHANGE_TASK',
            //     todolistId,
            //     taskId,
            //     obj
            //
            // }
            debugger
            dispatch(changeTaskActionCreator(task))
        },
        deleteTask: (todolistId, taskId) => {
            // let action = {
            //     type: 'DELETE_TASK',
            //     todolistId,
            //     taskId
            //
            // }

            dispatch(deleteTaskActionCreator(todolistId, taskId))
        },
        setTasks: (todolistId, tasks) => {
            dispatch(setTasksActionCreator(todolistId, tasks))
        }
    }
}

const ConnectedTodoList = connect(null, mapDispatchToProps)(TodoList)

export default ConnectedTodoList;

