import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav
    className="border-b-2 border-gray-200 top-0 sticky w-full flex justify-center bg-white gap-4 pr-6 pt-5 pb-3 z-20"
    >
    
        <Link to="/" className="hover:text-gray-600">profile</Link>
        <Link to="/skills">skills</Link>
        <Link to="/cp">CP</Link>
        <Link to="/projects" className="hover:text-gray-600">projects</Link>
        <Link to="https://medium.com/@bikramyadav.11" className="hover:text-gray-600" target="_blank">blogs</Link>
        <Link to="/contact" className="hover:text-gray-600">contact</Link>
     
    </nav>
  )
}

export default Navbar