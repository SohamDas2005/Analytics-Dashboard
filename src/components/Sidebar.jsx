import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItem = (to, label) => (
    <li
      className={`border-b border-gray-300 last:border-b-0
                  ${
                    location.pathname === to
                      ? "bg-gray-100 font-semibold"
                      : "hover:bg-gray-50"
                  }`}
    >
      <Link
        to={to}
        className="block px-4 py-3 text-gray-700 hover:text-blue-600"
      >
        {label}
      </Link>
    </li>
  );

  return (
    <aside className="hidden md:block w-64 bg-white border-r border-gray-300 min-h-screen">
      
  
      <div className="px-4 py-4 border-b border-blue-300">
        <h2 className="text-xl font-bold">Dashboard</h2>
      </div>

  
      <ul className="text-gray-600">
        {menuItem("/", "Home")}
        {menuItem("/charts", "Charts")}
        {menuItem("/tables", "Tables")}
        {menuItem("/login", "Log in")}
      </ul>
    </aside>
  );
}
