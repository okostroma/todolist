import React from 'react';
import './App.css';
import AddNewItemForm from "./AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";

class TodoList extends React.Component {


    state = {
        tasks: [
            // {id: 0, title: "JS", isDone: true, priority: "high"},
            // {id: 1,title: "HTML", isDone: false, priority: "low"},
            // {id: 2,title: "CSS", isDone: false, priority: "medium"},
            // {id: 3,title: "React", isDone: true, priority: "high"}
        ],

        filterValue: "All"
    };
    nextTaskId = 0;
    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('state-' + this.props.id, stateAsString)

    }
    restoreState = () => {
        let state = {
            tasks: [],
            filterValue: 'All'
        };
        let stateAsString = localStorage.getItem('state-' + this.props.id);
        if (stateAsString) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state, () => {
            this.state.tasks.forEach(t => {
                    if (t.id >= this.nextTaskId) {
                        this.nextTaskId = t.id + 1
                    }
                }
            )
        })
    }

    componentDidMount() {
        this.restoreState();
    }

    addTask = (newTitle) => {

        let newTask = {
            id: this.nextTaskId,
            title: newTitle,
            isDone: false,
            priority: ""
        };
        this.nextTaskId++;
        // let newTasks = [...this.state.tasks, newTask];
        //
        // this.setState({
        //     tasks: newTasks
        // }, this.saveState);

        this.props.addTask(this.props.id, newTask);

    }

    deleteTask = (taskId) => {
        // let newTasks = this.props.tasks.filter(t => {
        //     return t.id !== taskId;
        // });
        // this.setState({
        //     tasks: newTasks
        // }, this.saveState);

        this.props.deleteTask(this.props.id, taskId)

    }


    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    }

    changeTask = (taskId, obj) => {
        // let newTasks = this.state.tasks.map(t => {
        //     if (t.id !== taskId) {
        //         return t;
        //     } else {
        //         return {...t, ...obj};
        //     }
        // });
        // this.setState({
        //     tasks: newTasks
        // }, this.saveState);

        this.props.changeTask (this.props.id,taskId, obj )
    }

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})

    }

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})

    }

    changePriority = (taskId, priority) => {
        this.changeTask(taskId, {priority: priority})
    }

    isTodoListDeleted = () => {
        this.props.deleteTodoList(this.props.id);
    }



    render = () => {
        let filteredTasks = this.props.tasks.filter(t => {
            switch (this.state.filterValue) {
                case "Active":
                    return t.isDone === false;
                case "Completed":
                    return t.isDone === true;
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
            let action = {
                type: 'ADD_TASK',
                newTask,
                todolistId

            }

            dispatch(action)
        },
        changeTask: (todolistId, taskId, obj ) => {
            let action = {
                type: 'CHANGE_TASK',
                todolistId,
                taskId,
                obj

            }

            dispatch(action)
        },
        deleteTask: (todolistId, taskId) => {
            let action = {
                type: 'DELETE_TASK',
                todolistId,
                taskId

            }

            dispatch(action)
        }
    }
}

const ConnectedTodoList = connect(null, mapDispatchToProps)(TodoList)

export default ConnectedTodoList;

