import { Routes, Route, Navigate } from 'react-router'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

// Ruta privada básica: ajusta la lógica cuando integres auth real
function PrivateRoute({ children }) {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
    return isAuthenticated ? children : <Navigate to="/login" replace />
}

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
            </Route>
        </Routes>
    )
}

export default App
