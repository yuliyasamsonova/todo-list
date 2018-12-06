import React from 'react';
import './addtask.css';

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask:''
        }
    }
    handleInputChange = (event)=> {
        this.setState({newTask: event.target.value});
    };

    handleEnter = (event)=> {if (event.key==='Enter'){
        this.props.onButtonClick((this.state.newTask));
    }
    };
    render() {
        const {onButtonClick}=this.props;
        return(
            <div className="AddTask-input">
                <input className="myinput" onKeyDown={this.handleEnter} type="text" value={this.state.newTask} onChange={this.handleInputChange}/>
                <button className="button" onClick={() => {onButtonClick(this.state.newTask)}}>Add</button>

            </div>
        )
    }
}
export default AddTask;