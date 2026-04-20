import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="p-4">{children}</div>
    </div>
  );
}