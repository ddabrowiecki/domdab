import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { label: "About Me", path: "/" },
    { label: "Experience", path: "/eng_history" },
    { label: "Projects", path: "/eng_projects" },
    { label: "Previous Careers", path: "/previous_career"},
    { label: "Languages", path: "/languages" },
    { label: "Volunteer", path: "/volunteer" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-200 bg-opacity-90 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          DD
        </Link>

        <div className="flex gap-8 items-center">
          {navItems.map((item) => (
            <div key={item.path} className="relative group">
              <Link
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-gray-700"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {item.label}
              </Link>
              {location.pathname === item.path && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
