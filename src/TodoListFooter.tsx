import React from 'react';
import './App.css';

import Button from "@material-ui/core/Button";

type StateType = {
    isHidden: boolean
}

type OwnPropsType = {
    changeFilter: (newFilterValue: string) => void
    filerValue: string
}


class TodoListFooter extends React.Component<OwnPropsType, StateType> {
    state = {
        isHidden: false
    }



    onAllFilterClick = () => {
        this.props.changeFilter("All")}
    onCompletedFilterClick = () => {this.props.changeFilter("Completed")}
    onActiveFilterClick = () => {this.props.changeFilter("Active")}
    onShowFiltersClick = () => {
        this.setState({isHidden: false})

    }
    onHideFiltersClick = () => {
        this.setState({isHidden: true})
    }



    render = () => {
        let classForAll = this.props.filerValue === "All" ? "contained" : "";
        let classForCompleted = this.props.filerValue === "Completed" ? "contained" : "";
        let classForActive = this.props.filerValue === "Active" ? "contained" : "";


        return (
            <div className="todoList-footer">
                { !this.state.isHidden && <div>
                <Button color='default'  onClick={this.onAllFilterClick} variant='contained'>All</Button>
                <Button color='primary'  onClick={this.onCompletedFilterClick} variant='contained'>Completed</Button>
                <Button color='secondary' onClick={this.onActiveFilterClick} variant='contained'>Active</Button>
            </div>}


                {!this.state.isHidden && <span onClick={this.onHideFiltersClick}>hide</span>}
                {this.state.isHidden && <span onClick={this.onShowFiltersClick}>show</span>}
        </div>

        );
    }
}


export default TodoListFooter;

