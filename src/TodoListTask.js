import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";


class TodoListTask extends React.Component {
    state = {
        isEditMode: false,
        title: this.props.task.title
    }
    activatedEditMode = () => {
        this.setState({
            isEditMode: true
        })

    }

    deActivatedEditMode = () => {
        this.setState({
            isEditMode: false
        })
        this.props.changeTitle(this.props.task, this.state.title)

    }


    onIsDoneChanged = (e) => {
       this.props.changeStatus(this.props.task, e.currentTarget.checked)
    }

    onIsTitleChange = (e) => {
        this.setState(({title:e.currentTarget.value }))
    }
    isTaskDeleted = () => {
        this.props.deleteTask(this.props.task.id);
    }

    onIsPriorityChanged = (e) => {
        this.props.changePriority(this.props.task, e.currentTarget.value)

    }



    render = () => {
        const priority = [{id: 0, priority: 'high'}, {id: 1, priority: 'medium'}, {id: 2, priority: 'low'}];
        let items = priority.map(item => <option key={item.id} value={item.priority}> {item.priority} </option>)
        let status = this.props.task.status;
        let checked = status === 2 ? 'done' : ''
        let priorityInt = this.props.task.priority
        return (
            <div className= {`todoList-task + ${checked}`}>
                <Checkbox color="primary" checked={status === 2} onChange={this.onIsDoneChanged}/>
                {this.state.isEditMode ? <TextField  onChange={this.onIsTitleChange} value={this.state.title} autoFocus={true}
                                                onBlur={this.deActivatedEditMode}/> : <span onDoubleClick={this.activatedEditMode}>
                   {this.props.task.title}</span>
                }
                 ,
                {/*<span>priority: {this.props.task.priority}</span>*/}

                <span > priority:
                        <select onChange={this.onIsPriorityChanged} value={priorityInt === 2 ? 'high' : priorityInt === 1 ? 'medium' : 'low' }>
                            {/*<option value={this.state.priority[0]} >{this.state.priority[0]}</option>*/}
                            {/*<option value={this.state.priority[1]} >{this.state.priority[1]}</option>*/}
                            {/*<option value={this.state.priority[2]}>{this.state.priority[2]}</option>*/}

                            {items}
                        </select>
                    {/*{this.props.task.priority}*/}
                    </span>
                <span onClick={this.isTaskDeleted}> <FontAwesomeIcon className='times' icon={faTimes}/> </span>
            </div>
        );
    }
}
TodoListTask.propTypes = {
    title: PropTypes.string,
    isDone: PropTypes.bool,
    priority: PropTypes.string
}

export default TodoListTask;





