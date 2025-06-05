import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await axios.post('https://trabalho-mundosenai.onrender.com/register',  {
                name,
                email,
                password
            });

            if (response.status === 201 || response.status === 200) {
                setSuccess('User created successfully! :)');
                setError(null);
                setTimeout(() => navigate('/login'), 2000);
            }
        } catch (err) {
            setError(err.response?.data?.mensagem || 'Error creating user :(');
            setSuccess(null);
        }
    }

    return (
        <div className="register-container">
            <div className="register-page">
                <Header title="Create account" />

                <div className="register-box">
                    <h2>Register your account</h2>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">

                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit">Register</button>
                        <div className="space-erro">
                            {error && <p className="register-error">{error}</p>}
                            {success && <p className="register-success">{success}</p>}
                            {!error && !success && <p className="error">&nbsp;</p>}
                        </div>
                    </form>
                </div >

            </div >
            <Footer
                textColor="#fff"
                bgColor="#2d2d2d88"    
                linkColor="#397fdb" 
            />
        </div >
    );
};
export default Register;