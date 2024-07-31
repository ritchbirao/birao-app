import React, { useState } from "react";
import SearchFilter from "./SearchFilter";

export default function Tasks() {
    const [tasks, setTasks] = useState([
        { name: 'HOMEPAGE DESIGN', assignee: 'John', deadline: '', status: 'Completed' },
        { name: 'LOGIN DESIGN', assignee: 'Jane', deadline: '', status: 'Completed' },
        { name: 'SIGNUP DESIGN', assignee: 'Mike', deadline: '07-30-24', status: 'Pending' },
        { name: 'CONTACT DESIGN', assignee: 'Lisa', deadline: '', status: 'Completed' },
        { name: 'BUTTON DESIGN', assignee: 'Mike', deadline: '', status: 'Completed' },
        { name: 'APPLICATION DESIGN', assignee: 'John', deadline: '07-30-24', status: 'Completed' },
        { name: 'IMAGE DESIGN', assignee: 'Mike', deadline: '07-30-24', status: 'Pending' },
        { name: 'USER DESIGN', assignee: 'John', deadline: '07-30-24', status: 'Pending' },
        { name: 'ABOUT-US DESIGN', assignee: 'Jane', deadline: '07-30-24', status: 'Pending' },
        { name: 'PROFILE DESIGN', assignee: 'Jane', deadline: '07-30-24', status: 'Pending' },
    ]);

    const [searchQuery, setSearchQuery] = useState('');

    const filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.assignee.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleStatus = (index) => {
        setTasks(tasks.map((task, i) => {
            if (i === index) {
                return {
                    ...task,
                    status: task.status === 'Pending' ? 'Completed' : 'Pending'
                };
            }
            return task;
        }));
    };

    return (
        <div>
            <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Task Description</th>
                        <th>Assignee</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTasks.map((task, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{task.name}</td>
                            <td>{task.assignee}</td>
                            <td>{task.status === 'Pending' ? task.deadline : ''}</td>
                            <td>{task.status}</td>
                            <td>
                                <button onClick={() => toggleStatus(index)}>Toggle Status</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
