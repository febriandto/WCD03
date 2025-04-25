// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Detail from './pages/Detail'
import './index.css'

function App() {
  return (
    <div className="font-neue">
      <div className="min-h-screen text-white p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card/:id" element={<Detail />} /> {/* Route detail card */}
        </Routes>
      </div>
    </div>
  )
}

export default App
