import React from 'react';
import './taskslist.css';
import Task from'../Task/Task' ;
const Taskslist = ({tasks,changeTaskState,taskDelete,changeTaskTitle}) => {
    return (
        <div>
            {tasks.map((task) => {
                return (<Task
                    done={task.done}
                    title={task.title}
                    onButtonClick={() => {
                        changeTaskState(task.id)
                    }}
                    taskDelete={() => {
                        taskDelete(task.id)
                    }}
                    applyNewTitle={(newTitle) => {
                        changeTaskTitle(newTitle,task.id)
                    }}
                />)
            })}
        </div>
    )
};

export default Taskslist;