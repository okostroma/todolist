import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addList, changeListTitle, deleteList, getList,} from "./reducer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class App extends React.Component {
    state = {
        todolists: [
            // {id:1, title:'What to learn?'},
            // {id:2, title:'Week tasks'},
            // {id:3, title:'Year tasks'}
        ]
    }

    nextTodoListId = 0;
    // saveState = () => {
    //     let stateAsString = JSON.stringify(this.state);
    //     localStorage.setItem('todolists', stateAsString)
    //
    // }
    // restoreState = () => {
    //     let state = {
    //         todolists: []
    //     };
    //     let stateAsString = localStorage.getItem('todolists');
    //     if (stateAsString) {
    //         state = JSON.parse(stateAsString);
    //     }
    //     this.setState(state, () => {
    //         this.state.todolists.forEach(t => {
    //                 if (t.id >= this.nextTodoListId) {
    //                     this.nextTodoListId = t.id + 1
    //                 }
    //             }
    //         )
    //     })
    // }


    restoreState = () => {
        // todoListAPI.getTodoLists()
        //     .then(data => {
        //         this.props.setTodoLists(data);
        //     });

        this.props.getList();
    }

    componentDidMount() {
        this.restoreState();
    }

    addTodoList = (title) => {
        // let newTodoList = {
        //     id: this.nextTodoListId,
        //     title: title,
        //     tasks: []
        // }
        // this.nextTodoListId++;
        // let newTodoList = [...this.state.todolists, todoList];
        // this.setState({
        //     todolists: newTodoList
        // },this.saveState)
        // this.props.createTodolist(newTodoList)

        // todoListAPI.postTodoList(title)
        //     .then(data => {
        //         let todolists = data.data.item;
        //         this.props.addTodoList(todolists);
        //     });
        this.props.addList(title)


    }

    deleteTodoList = (todolistId) => {

        // let newTodoList = this.props.todolists.filter(t => {
        //     return t.id !== todolistId;
        // });

        // this.props.deleteTodolist(todolistId)
        // this.setState({
        //     todolists: newTodoList
        // }, this.saveState);

        // todoListAPI.deleteList(todolistId)
        //     .then(data => {
        //         if (data.resultCode === 0) {
        //             this.props.deleteTodoList(todolistId)
        //         }
        //     });

        this.props.deleteList(todolistId)


    }

    changeTodoListTitle = (todolistId, todoListTitle) => {

        //  todoListAPI.updateTodoList.then(data => {
        //     if (data.resultCode === 0) {
        //         this.props.todoListTitle(todolistId, todoListTitle)
        //     }
        //
        // })

        this.props.changeListTitle(todolistId, todoListTitle)


    }

    render = () => {
        const todolist = this.props.todolists.map(tl => <Grid item> <Paper style={{padding: '10px'}}> <TodoList
            key={tl.id} tasks={tl.tasks}
            deleteTodoList={this.deleteTodoList} id={tl.id}
            title={tl.title} changeTodoListTitle={this.changeTodoListTitle}/> </Paper> </Grid>)

        return (<div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className='menuButton' color="inherit" aria-label="menu">
                            <Menu/>
                        </IconButton>
                        <Typography variant="h6" className='title'>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Container fixed>
                    <Grid container style={{padding: '20px'}}>

                        <AddNewItemForm addItem={this.addTodoList}/>
                    </Grid>
                    <Grid container spacing={3}>

                        {todolist}

                    </Grid>
                </Container>
            </div>
        )


    }
}


const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
    }
}


const ConnectedApp = connect(mapStateToProps, {
    changeListTitle,
    getList,
    addList,
    deleteList
})(App);
export default ConnectedApp;


