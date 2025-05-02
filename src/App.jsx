import { BrowserRouter , Routes, Route } from 'react-router'
import './App.css'
import Navbar from './components/Navbar/navbar.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Skills from './components/Skills/skills.jsx'
import Projects from './components/Projects/projects.jsx'
import techshop from './assets/techshop.png'
import Contact from './components/Contact/contact.jsx'
import NotFound from './components/NotFound/notfhound.jsx'
import ProjectItemDetails from './components/ProjectItemDetails/projectitemdetails.jsx'

// const p={
//   id:'1',
//   title:'TechShop',
//   description:'This is a tech shop website where you can buy tech products. It is built using React This is a tech shop website where you can buy tech products. It is built using React This is a tech shop website where you can buy tech products. It is built using React',
//   image:techshop,
//   link:'https://techshop.niat.tech/',
//   features:[
//     'The website has a simple, user-friendly interface for smooth browsing.',
//     'Users can add items to the cart, with dynamic updates based on selections.',
//     'Built using React components for better scalability and code organization.',
//     'The layout adjusts smoothly across devices for a consistent user experience.'
//   ],
//   technologies:['HTML','CSS','JavaScript','React','Node.js']
// }


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
        <Route path="/projects/:id" element={<ProjectItemDetails/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
