import { BrowserRouter , Routes, Route } from 'react-router'
import './App.css'
import Navbar from './components/Navbar/navbar.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Skills from './components/Skills/skills.jsx'
import Projects from './components/Projects/projects.jsx'
import Contact from './components/Contact/contact.jsx'
import NotFound from './components/NotFound/notfhound.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
