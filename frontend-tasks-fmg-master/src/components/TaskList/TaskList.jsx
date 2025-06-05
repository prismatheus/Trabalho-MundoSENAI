import React, { useEffect, useState } from "react";
import { getTasks, changeTaskStatus, deleteTask } from "../../services/taskService";
import { useAuth } from '../../context/AuthContext';
import TaskForm from '../TaskForm/TaskForm';
import './TaskList.css';
import { FaSpinner, FaCheckCircle, FaTrashAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ARRUMAR DELETE 

const TaskList = () => {

    const { token, user } = useAuth();
    const userID = user?.id;
    console.log("User ID:", userID);


    const [tasks, setTasks] = useState([]);

    const handleChangeStatus = async (taskId, newStatus, taskOwnerId) => {
        try {
            if (!userID) {
                toast.warn('User not authenticated!');
                return;
            }
            console.log("Comparando IDs -> taskOwnerId:", taskOwnerId, "userID:", userID, "Tipos:", typeof taskOwnerId, typeof userID);

            if (String(taskOwnerId) !== String(userID)) {
                toast.warn('You can only change the status of your own tasks.');
                return;
            }



            // Atualiza a tarefa diretamente na lista local
            setTasks(prevTasks => prevTasks.map(task =>
                task.id === taskId ? { ...task, status: newStatus } : task
            ));

            toast.success('Status changed successfully!');
        } catch (error) {
            console.error('Error changing task status:', error);
            toast.error('Error changing task status.');
        }
    };


    const handleAddTask = async () => {
        // Recarrega as tarefas do servidor
        const fetchTasks = async () => {
            try {
                const result = await getTasks(token);
                setTasks(result);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks(); // Atualiza a lista após adicionar a nova tarefa
        toast.success('Task created successfully!'); // Notifica o sucesso
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await deleteTask(taskId, token); // Deleta a tarefa
            const updatedTasks = tasks.filter(task => task.id !== taskId); // Remove a tarefa da lista
            setTasks(updatedTasks);
            toast.success('Task deleted successfully! :D');

        } catch (error) {
            toast.error('Error deleting task. :(');
            console.error('Erro ao deletar tarefa:', error);
        }
    };

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const result = await getTasks(token);
                
                const sortedTasks = result.sort((a, b) => a.id - b.id);
                setTasks(sortedTasks);
            } catch (error) {
                console.error('Error: ', error);
                toast.error('Error fetching tasks. :(');
            }
        };
        fetchTasks();
    }, [token]);

    return (
        <div className="task-list">
            <h2>List of tasks:</h2>

            <TaskForm onTaskCreated={handleAddTask} />

            {tasks.length === 0 ? <p>No tasks available</p> : (
                <table className="task-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ID_USER</th>
                            <th>USER</th>
                            <th>DESCRIPTION</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.user?.id}</td>
                                <td>{task.user?.name}</td>
                                <td className="desc">{task.description}</td>
                                <td>{task.status}</td>
                                <td>
                                    <div className="task-actions">
                                        <button onClick={() => handleChangeStatus(task.id, 'IN_PROGRESS', task.user?.id)}>
                                            <FaSpinner />
                                        </button>
                                        <button className="edit-button" onClick={() => handleChangeStatus(task.id, 'COMPLETED', task.user?.id)}>
                                            <FaCheckCircle />
                                        </button>

                                        <button className="delete-button" onClick={() => handleDeleteTask(task.id)}>
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            )}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                closeButton={false}
            />
        </div>
    );
};

export default TaskList;
