import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";

class TodoListFooter extends React.Component {
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
                <Button color='default'  onClick={this.onAllFilterClick} variant={classForAll}>All</Button>
                <Button color='primary'  onClick={this.onCompletedFilterClick} variant={classForCompleted}>Completed</Button>
                <Button color='secondary' onClick={this.onActiveFilterClick} variant={classForActive}>Active</Button>
            </div>}


                {!this.state.isHidden && <span onClick={this.onHideFiltersClick}>hide</span>}
                {this.state.isHidden && <span onClick={this.onShowFiltersClick}>show</span>}
        </div>

        );
    }
}
TodoListFooter.propTypes = {
    filterValue: PropTypes.string
}

export default TodoListFooter;

