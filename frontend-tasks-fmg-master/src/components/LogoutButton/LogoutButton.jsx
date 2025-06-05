import { useAuth } from '../../context/AuthContext';
import './LogoutButton.css';
import { useNavigate } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';


function LogoutButton() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login'); // Redireciona para o login 
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            <FiPower className="logout-icon" />
        </button>
    );
}

export default LogoutButton;