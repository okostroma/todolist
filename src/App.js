import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import TodoList from "./TodoList";

import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";

class App extends React.Component {
    state = {
        todolists: [
            // {id:1, title:'What to learn?'},
            // {id:2, title:'Week tasks'},
            // {id:3, title:'Year tasks'}
        ]
    }

    nextTodoListId = 0;

    addTodoList = (title) => {
        let todoList = {
            id: this.nextTodoListId,
            title: title
        }
        this.nextTodoListId++;
        let newTodoList = [...this.state.todolists, todoList];
        this.setState({
            todolists: newTodoList
        })
    }

    render = () => {
       const todolist = this.state.todolists.map(tl => <TodoList key={tl.id} id={tl.id} title={tl.title} />)

        return (<div>
                <AddNewItemForm addItem={this.addTodoList}/>
            <div className="App">
                {todolist}

            </div>
            </div>
        )


    }
}


export default App;


