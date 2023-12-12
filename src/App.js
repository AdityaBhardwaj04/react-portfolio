import './App.scss'
import About from './components/About'
import Home from './components/Home'
import Layout from './components/Layout'
import Portfolio from './components/Project'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
