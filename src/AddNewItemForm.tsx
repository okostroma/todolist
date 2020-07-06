import React, {ChangeEvent} from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import {AddBox} from '@material-ui/icons';


type OunPropsType = {
    addItem: (newTitle: string) => void
}

type StateType = {
    error: boolean
    title: string
}

class AddNewItemForm extends React.Component<OunPropsType, StateType> {


    state: StateType = {
        error: false,
        title: ''
    }

    onAddItemClick = () => {
        let newTitle = this.state.title.trim();
        if (newTitle === '') {
            this.setState({error: true})
        } else {
            this.setState({title: '', error: false})
            this.props.addItem(newTitle)
        }

    }
    onTitleChanged = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    }
    onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            this.onAddItemClick();
        }

    }

    render = () => {
        let error = this.state.error ? 'error' : ''
        return (


            <div className="todoList-newTaskForm">


                <TextField variant='outlined'
                           error={!!error}
                       value={this.state.title} onChange={this.onTitleChanged}
                       onKeyPress={this.onKeyPress}
                       type="text" label="title"/>
                {/*<button onClick={this.onAddItemClick}>Add</button>*/}
                <IconButton color='primary' onClick={this.onAddItemClick}><AddBox /></IconButton>


            </div>

        );
    }
}

export default AddNewItemForm;

