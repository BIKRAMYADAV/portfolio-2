import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const getLinkStyle = (path:any) =>
    location.pathname === path
      ? "underline decoration-red-500 decoration-2 text-gray-800 font-semibold"
      : "hover:text-gray-600";

  return (
    <nav className="border-b-2 border-gray-200 top-0 sticky w-full flex justify-center bg-white gap-4 pr-6 pt-5 pb-3 z-20">
      <Link to="/" className={getLinkStyle("/")}>
        profile
      </Link>
      <Link to="/skills" className={getLinkStyle("/skills")}>
        skills
      </Link>
      <Link to="/cp" className={getLinkStyle("/cp")}>
        CP
      </Link>
      <Link to="/projects" className={getLinkStyle("/projects")}>
        projects
      </Link>
      <a
        href="https://medium.com/@bikramyadav.11"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-600"
      >
        blogs
      </a>
      <Link to="/contact" className={getLinkStyle("/contact")}>
        contact
      </Link>
    </nav>
  );
}

export default Navbar;
