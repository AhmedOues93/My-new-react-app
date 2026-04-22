import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 px-6 py-4 flex justify-center gap-8">

      <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : ""}>
        🌍 Countries
      </NavLink>

      <NavLink to="/movies" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : ""}>
        🎬 Movies
      </NavLink>

      <NavLink to="/news" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : ""}>
        📰 News
      </NavLink>

      <NavLink to="/currency" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : ""}>
        💱 Currency
      </NavLink>

    </nav>
  );
}