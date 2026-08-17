import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Activity 1", path: "/activity1" },
    { name: "Activity 2", path: "/activity2" },
    { name: "Activity 3", path: "/activity3" },
    { name: "Activity 4", path: "/activity4" },
    { name: "Activity 5", path: "/activity5" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-[#0b1120]">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-8 lg:px-12">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="group flex items-center gap-4"
        >
          {/* Logo Icon */}
          <div
            className="flex h-12 w-12 items-center justify-center
                       rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600
                       text-base font-bold text-white
                       shadow-lg shadow-blue-500/20
                       transition-all duration-300
                       group-hover:scale-105
                       group-hover:shadow-blue-500/40"
          >
            RA
          </div>

          {/* Logo Text */}
          <div className="leading-tight">
            <h1
              className="text-lg font-bold tracking-wide
                         text-white transition-colors
                         group-hover:text-blue-400"
            >
              React Activity
            </h1>

            <p className="mt-1 text-xs font-medium text-slate-400">
              Student Portal
            </p>
          </div>
        </Link>

        {/* ================= NAVIGATION ================= */}
        <div
          className="flex items-center rounded-xl
                     border border-slate-700/70
                     bg-slate-900/70 p-1.5"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative rounded-lg px-5 py-3
                  text-sm font-semibold
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }
                `}
              >
                {item.name}
                {/* Active Indicator */}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-1/2
                               h-0.5 w-6
                               -translate-x-1/2
                               rounded-full bg-blue-400"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;