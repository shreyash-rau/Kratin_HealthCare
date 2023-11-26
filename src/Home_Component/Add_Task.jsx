import React, { useState } from 'react';
import Countdown from 'react-countdown';

function Add_Task() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskTime, setTaskTime] = useState('');

    const addTask = () => {
        setTasks([...tasks, { name: taskName, time: taskTime }]);
        setTaskName('');
        setTaskTime('');
    };

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>It's task time!</span>;
        } else {
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    };

    return (
        <div className='main-table'>
            <h2>It's {tasks.length > 0 ? tasks[tasks.length - 1].name : ""} Time</h2>
            <div className="m-table">
                <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Enter Next challenge" className="m-table1" />
                <input type="time" value={taskTime} onChange={(e) => setTaskTime(e.target.value)} className="m-table2" />

                <button onClick={addTask} className="m-table3">Add Task</button>
            </div>  <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>To Chore</th>
                        <th>Timer</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.time}</td>
                            <td>{task.name}</td>
                            <td>
                                <Countdown
                                    date={new Date(`2023-11-26T${task.time}:00`)}
                                    renderer={renderer}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Add_Task;
