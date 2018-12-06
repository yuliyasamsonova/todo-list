import React, {Component} from 'react';
import './task.css';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            editMode: false,
        }
    }
    toggleEditMode = () => {
        this.setState((state) => ({editMode: !state.editMode}));
    };
    handleTitleChange = (event)=> {
        this.setState({title: event.target.value});
    };
    applyNewTitle = () => {
        this.props.applyNewTitle(this.state.title);
        this.toggleEditMode();
    };
    render() {
        const {title, done, onButtonClick, taskDelete} = this.props;
        return (
            <div className="task-blok">
                <div className="title">
                {this.state.editMode ? (<input className="myinput" type="text" value={this.state.title} onChange={this.handleTitleChange}/>) :(<div className={done ? 'green' : 'red'} onClick={onButtonClick}>{title}</div>)}
                </div>
                <div className="buttons">
                <button className="button2" onClick={taskDelete}>Delete</button>
                {this.state.editMode ? (<button className="button3" onClick={this.applyNewTitle}>Apply</button>) : (<button className="button3" onClick={this.toggleEditMode}>Edit</button>)}
                </div>
            </div>
        )
    };
}

export default Task;
