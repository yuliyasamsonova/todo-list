import React, {Component} from 'react';
import './App.css';
import AddTask from'./AddTask/AddTask' ;
import TasksList from'./TasksList/TasksList' ;
import uniqid from 'uniqid';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    changeTaskState = (id) => {
        let tasks = [...this.state.tasks];
        let index = tasks.findIndex(task => task.id === id);
        tasks[index].done = !tasks[index].done;
        this.setState({tasks});
    };
    addTask = (newTask) => {
        this.setState((state) => ({tasks: [...state.tasks, {title:newTask,done:false,id:uniqid()}]}));
    };
    taskDelete = (id) => {
        let tasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({tasks});
    };
    changeTaskTitle = (newTitle,id) => {
        let tasks = [...this.state.tasks];
        let index = tasks.findIndex(task => task.id === id);
        tasks[index].title = newTitle;
        this.setState({tasks});
    };
    render() {
        const {tasks} = this.state;
        return (
            <div className="App">
                <div>
                    <TasksList
                        changeTaskState={this.changeTaskState}
                        tasks={tasks}
                        taskDelete={this.taskDelete}
                        changeTaskTitle={this.changeTaskTitle}
                    />
                </div>
                <div>
                    <AddTask
                        onButtonClick={this.addTask}
                    />
                </div>
            </div>
        );
    }
}

export default App;
