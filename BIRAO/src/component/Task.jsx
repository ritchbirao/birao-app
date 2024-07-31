import React from 'react';

const Task = ({ index, task, toggleStatus }) => {
    return (
        <li>
            <span>{index + 1}</span>
            <span>{task.description}</span>
            <span>{task.assignee}</span>
            {task.status === 'Pending' && <span>{task.deadline}</span>}
            <span>{task.status}</span>
            <button onClick={toggleStatus}>Toggle Status</button>
        </li>
    );
};

export default Task;