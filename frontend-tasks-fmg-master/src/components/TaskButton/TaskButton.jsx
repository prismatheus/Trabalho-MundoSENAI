import './TaskButton.css';
import { useNavigate } from 'react-router-dom';

function TaskButton() {
    const navigate = useNavigate();

    const handleButton = async () => {
        navigate('/tasks'); 
    };

    return (
        <button className="task-button" onClick={handleButton}>
            Tasks
        </button>
    );
}

export default TaskButton;