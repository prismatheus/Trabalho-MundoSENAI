import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Login from "./pages/Login/Login.jsx";
import { AuthProvider } from "./context/AuthContext";
import './App.css'
import Title from './components/Title/Title.jsx'
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import LogoutButton from "./components/LogoutButton/LogoutButton.jsx";
import Register from "./pages/Register/Register.jsx";
import Home from './pages/Home/Home.jsx'
import Tasks from './pages/Tasks/Tasks.jsx'
function App() {

  return (  
    <div className="app">
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          } />

          <Route path="/tasks" element={
            <PrivateRoute>
              <Tasks/>
            </PrivateRoute>
          } />

        </Routes>
      </Router>
    </AuthProvider>
    </div>
  )
}

export default App
