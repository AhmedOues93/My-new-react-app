import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">

      <Navbar />

      <main className="flex-1 p-6 max-w-6xl mx-auto w-full">
        <Outlet />
      </main>

    </div>
  );
}