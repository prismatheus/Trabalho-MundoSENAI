import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    useEffect(() => {
        console.log("Verificando localStorage...");
        const storedToken = localStorage.getItem('token');
        const storedUserId = localStorage.getItem('userId');
        const storedEmail = localStorage.getItem('email');

        console.log("Token:", storedToken);
        console.log("UserId:", storedUserId);
        console.log("Email:", storedEmail);

        if (storedToken && storedUserId) {
            setUser({ email: storedEmail, id: storedUserId });
            setToken(storedToken);
        } else {
            console.log("Nenhum usuário autenticado encontrado.");
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:3131/user/login', { email, password });
            
            // Log da resposta completa
            console.log("Resposta completa da API:", response.data);
    
            const { token, userID } = response.data;  // Aqui estamos assumindo que 'userID' está na resposta
    
            console.log("Login bem-sucedido:", response.data);
    
            setUser({ email, id: userID });
            setToken(token);
    
            // Salvando no localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            localStorage.setItem('userId', userID); // Verifique se 'userID' é realmente o nome correto
            
            // Verificando se os dados foram realmente salvos no localStorage
            console.log("Dados salvos no localStorage:");
            console.log("Token:", localStorage.getItem('token'));
            console.log("Email:", localStorage.getItem('email'));
            console.log("UserId:", localStorage.getItem('userId'));
    
            return true;
        } catch (error) {
            console.error("Falha no login", error);
            return false;
        }
    };
    

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('userId');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
export { AuthProvider };
