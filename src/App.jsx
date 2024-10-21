


import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'

import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Nav from './components/Nav'
import Projects from './components/Projects'
import ProjectPage from './pages/ProjectPage'
import Contact from './pages/Contact'

function App() {


  return (
   <main>   
		  <header className="sticky-top ">
	
			  <Nav />
   </header>
  
   <Routes>
    
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/projects" element={<Projects/>}></Route>
    <Route path="/project-page" element={<ProjectPage/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>


   </Routes>

   <Footer />
  
   

 </main>
  )
}

export default App
