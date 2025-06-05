import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function PrivateRoute({ children }) {
  const { token } = useAuth();

  if (!token) {
    // Se n tiver token, redireciona para a página de login
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;