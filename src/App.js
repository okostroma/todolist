import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import TodoList from "./TodoList";

import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";

class App extends React.Component {
    state = {
        todolists: [
            // {id:1, title:'What to learn?'},
            // {id:2, title:'Week tasks'},
            // {id:3, title:'Year tasks'}
        ]
    }

    nextTodoListId = 0;
    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('todolists', stateAsString)

    }
    restoreState = () => {
        let state = {
            todolists: []
        };
        let stateAsString = localStorage.getItem('todolists');
        if (stateAsString) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state, () => {
            this.state.todolists.forEach(t => {
                    if (t.id >= this.nextTodoListId) {
                        this.nextTodoListId = t.id + 1
                    }
                }
            )
        })
    }

    componentDidMount() {
        this.restoreState();
    }

    addTodoList = (title) => {
        let newTodoList = {
            id: this.nextTodoListId,
            title: title,
            tasks: []
        }
        this.nextTodoListId++;
        // let newTodoList = [...this.state.todolists, todoList];
        // this.setState({
        //     todolists: newTodoList
        // },this.saveState)
        this.props.createTodolist(newTodoList)

    }

    deleteTodoList = (todolistId) => {

        // let newTodoList = this.props.todolists.filter(t => {
        //     return t.id !== todolistId;
        // });

        this.props.deleteTodolist(todolistId)
        // this.setState({
        //     todolists: newTodoList
        // }, this.saveState);


    }

    render = () => {
        const todolist = this.props.todolists.map(tl => <TodoList key={tl.id} tasks={tl.tasks}
                                                                  deleteTodoList={this.deleteTodoList} id={tl.id}
                                                                  title={tl.title}/>)

        return (<div>
                <AddNewItemForm addItem={this.addTodoList}/>
                <div className="App">
                    {todolist}

                </div>
            </div>
        )


    }
}


const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTodolist: (newTodoList) => {
            let action = {
                type: 'ADD_TODOLIST',
                newTodoList: newTodoList

            }
            dispatch(action)

        },
        deleteTodolist: (todolistId) => {
            let action = {
                type: 'DELETE_TODOLIST',
                 todolistId

            }
            dispatch(action)
        }
    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;


