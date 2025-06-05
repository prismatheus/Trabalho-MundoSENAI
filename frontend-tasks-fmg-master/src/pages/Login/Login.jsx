import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (email === '' || !password) {
            setError('Please fill in all fields'); // Mostra erro caso de ruim o login
            return;
        }
        const success = await login(email, password);

        if (success) {
            navigate('/'); // Manda para home caso de boa o login
        }
        else {
            setError('Invalid email or password'); // Mostra erro caso de ruim o login
        }
    }
    return (
        <div className="login-container">
            <div className="login-page">
                <Header title="TaskManager 3000" />

                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder='Email'
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder='Password'
                            />

                        </div>

                        <div className="button-group">
                            <button
                                className="register-button"
                                type="button"
                                onClick={() => navigate('/register')}
                            >
                                Register
                            </button>

                            <button
                                className='login-button'
                                type="submit"
                            >
                                Login
                            </button>
                        </div>

                        <div className="space-erro">
                            <p className={`error ${error ? 'visible' : ''}`}>{error || '\u00A0'}</p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer
                textColor="#fff"
                bgColor="#2d2d2d88"    
                linkColor="#f4721e" 
            />

        </div>
    );


}

export default Login;




