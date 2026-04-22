import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex gap-6 justify-center">

      <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400" : ""}>
        Countries
      </NavLink>

      <NavLink to="/movies" className={({ isActive }) => isActive ? "text-blue-400" : ""}>
        Movies
      </NavLink>

      <NavLink to="/news" className={({ isActive }) => isActive ? "text-blue-400" : ""}>
        News
      </NavLink>

      <NavLink to="/currency" className={({ isActive }) => isActive ? "text-blue-400" : ""}>
        Currency
      </NavLink>

    </nav>
  );
}