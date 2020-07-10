import React, {ChangeEvent} from 'react';
import './App.css';
import TextField from "@material-ui/core/TextField";


type StateType = {
    isEditMode: boolean
    title: string
}

type OwnPropsType = {
    id: string
    title: string
    changeTodoListTitle: (id: string, title: string) => void
}


class TodoListTitle extends React.Component<OwnPropsType, StateType> {

    state = {
        isEditMode: false,
        title: this.props.title
    }

    onIsTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({title: e.currentTarget.value})
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
        this.props.changeTodoListTitle(this.props.id, this.state.title)

    }


    render = () => {


        return (
            <div className="todoList-title">
                {/*<h3 className="todoList-title__title">{this.props.title}</h3>*/}
                {this.state.isEditMode ?
                    <TextField onChange={this.onIsTitleChange} value={this.state.title} autoFocus={true}
                               onBlur={this.deActivatedEditMode}/> : <h3 onDoubleClick={this.activatedEditMode}>
                        {this.state.title}</h3>
                }
            </div>
        );
    }
}

export default TodoListTitle;

