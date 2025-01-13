import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'

// Import the page components
import Dashboard from '../src/pages/dashboard1'
import Contact from '../src/pages/Contact'
import Blog from '../src/pages/Blog'
import About from '../src/pages/About'
import Property from '../src/pages/Property'

function App() {
  return (
    <Router>
      <div>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/property" element={<Property />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
