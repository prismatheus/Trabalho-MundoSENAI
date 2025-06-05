import './HomeButton.css';
import { useNavigate } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
function HomeButton() {
    const navigate = useNavigate();

    const handleButton = async () => {
        navigate('/'); 
    };

    return (
        <button className="home-button" onClick={handleButton}>
            <IoMdHome />   
        </button>
    );
}

export default HomeButton;

// MUDAR COR DO BOTAO E ESTILO DA PAGINA