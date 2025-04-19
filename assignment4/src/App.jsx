// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'
import './index.css'

function App() {
  return (
    <div className="font-neue">
      <LandingPage/>
    </div>
  )
}

// function App() {
//   return (
//     <div className="font-sans container mx-auto px-2">
//       <Navbar />

//       {/* Nav link */}
//       <nav className="bg-gray-100 p-4 flex justify-center gap-4 shadow-md">
//         <Link to="/" className="text-blue-600 hover:underline">Landing</Link>
//         <span>|</span>
//         <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
//       </nav>

//       {/* Routes */}
//       <main className="p-8">
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//         </Routes>
//       </main>
//     </div>
//   )
// }

export default App
