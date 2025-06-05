import React, { useState } from 'react';
import { createTask } from '../../services/taskService';
import { useAuth } from '../../context/AuthContext';
import HomeButton from '../HomeButton/HomeButton.jsx';
import './TaskForm.css';

const TaskForm = ({ onTaskCreated }) => {
    const { token } = useAuth()
    const [description, setDescription] = useState('');

    const handleCreate = async () => {
        try {
            const result = await createTask(description, token)
            console.log('task create: ', result);
            setDescription('');
            onTaskCreated(result);
        }
        catch (error) {
            console.error('error: ', error);
        }
    };
    return (
        <div className="task-form">
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description of task"
            />
            <div className="task-form-buttons">
                <button className='clear' onClick={() => setDescription('')}>Limpar</button>
                <button className='create' onClick={handleCreate}>Create Task</button>
                <HomeButton />

            </div>
        </div>
    )
}

export default TaskForm;
