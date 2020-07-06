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
import { AppStateType } from './store';
import {TodolistType} from "./types/entities";

type MapStateToPropsType = {
    todolists: Array<TodolistType>
}

type MapDispatchToPropsType = {
    getList: () => void
    addList: (title: string) => void
    deleteList: (todolistId: string) => void
    changeListTitle: (todolistId: string, todoListTitle: string) => void
}


class App extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {


    restoreState = () => {

        this.props.getList();
    }

    componentDidMount() {
        this.restoreState();
    }

    addTodoList = (title: string) => {

        this.props.addList(title)


    }

    deleteTodoList = (todolistId: string) => {

        this.props.deleteList(todolistId)

    }

    changeTodoListTitle = (todolistId: string, todoListTitle: string) => {

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
                            {/*<Menu />*/}
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


const mapStateToProps = (state: AppStateType) : MapStateToPropsType  => {
    return {
        todolists: state.todolistReducer.todolists
    }
}


const ConnectedApp = connect<MapStateToPropsType, MapDispatchToPropsType, {} , AppStateType>(mapStateToProps, {
    changeListTitle,
    getList,
    addList,
    deleteList
})(App);
export default ConnectedApp;


