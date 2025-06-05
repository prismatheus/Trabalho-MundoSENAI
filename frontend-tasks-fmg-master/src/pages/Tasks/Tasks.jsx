import React, { useState } from "react";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"; // Importa o Footer
import "./Tasks.css";

function Tasks() {
    const [tasks, setTasks] = useState([]);

    return (
        <div className="task-container">
            <div className="task-box">
                <Header title="Tasks" />
                <TaskList tasks={tasks} setTasks={setTasks} />
            </div>
            <Footer
                textColor="#fff"
                bgColor="#2d2d2d88"
                linkColor="#8f33d1"
            />
        </div>
    );
}

export default Tasks;
