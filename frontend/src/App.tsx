import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import CPDashboard from "./pages/CP"
import Hero from "./pages/Hero"
import Projects from "./pages/Project"
import Skills from "./pages/Skills"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"

function App() {


  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/skills" element={ <Skills/>}/>
        <Route path="/cp" element={<CPDashboard/>}/>
        <Route path="/projects" element={ <Projects/>}/>
        <Route path="/contact" element={ <Contact/>}/>
    </Routes>
    </Router>
     </>
  )
}

export default App
