import React from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import {AddBox} from '@material-ui/icons';


class AddNewItemForm extends React.Component {


    state = {
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
    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    }
    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.onAddItemClick();
        }

    }

    render = () => {
        let error = this.state.error === true ? 'error' : ''
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

