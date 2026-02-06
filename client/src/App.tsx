import { useState } from 'react'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import './App.css'
import { BrowserRouter, Navigate, Routes, Route, Link } from 'react-router-dom';

function App() {
  // recovery isConfigured from LocalStorage
  const isConfig = localStorage.getItem('apiKey') !== null;
  const [isConfigured, setIsConfigured] = useState(isConfig)

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={isConfigured ? <Dashboard /> : <Navigate to="/settings" />}
        />
        <Route
          path="/settings"
          element={<Settings onFinish={() => setIsConfigured(true)} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App