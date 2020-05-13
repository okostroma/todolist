import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class TodoListFooter extends React.Component {
    state = {
        isHidden: false
    }



    onAllFilterClick = () => {this.props.changeFilter("All")}
    onCompletedFilterClick = () => {this.props.changeFilter("Completed")}
    onActiveFilterClick = () => {this.props.changeFilter("Active")}
    onShowFiltersClick = () => {
        this.setState({isHidden: false})

    }
    onHideFiltersClick = () => {
        this.setState({isHidden: true})
    }



    render = () => {
        let classForAll = this.props.filerValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filerValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filerValue === "Active" ? "filter-active" : "";


        return (
            <div className="todoList-footer">
                { !this.state.isHidden && <div>
                <button onClick={this.onAllFilterClick} className={classForAll}>All</button>
                <button onClick={this.onCompletedFilterClick} className={classForCompleted}>Completed</button>
                <button onClick={this.onActiveFilterClick} className={classForActive}>Active</button>
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

