// Navbar.jsx

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
    <nav className="sticky top-0 z-50 w-full bg-[#f4f7fc]/95 px-3 py-3 backdrop-blur-md md:px-6">

      <div className="flex min-h-[72px] w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 shadow-md md:px-8">

        {/* LOGO */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
        >

          {/* NU BLUE LOGO */}
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#003b7a] text-sm font-extrabold text-white shadow-md">
            RA
          </div>

          <div className="hidden leading-tight sm:block">

            <h1 className="text-lg font-extrabold tracking-tight text-[#003b7a]">
              React<span className="text-[#f5c400]">Activity</span>
            </h1>

            <p className="text-[10px] font-medium text-slate-400">
              Student Portal
            </p>

          </div>

        </Link>

        {/* NAVIGATION */}
        <div className="hidden flex-1 items-center justify-center gap-1 px-6 lg:flex">

          {navItems.map((item) => {

            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  rounded-full px-5 py-3 text-sm font-semibold
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#e7eef8] text-[#003b7a] shadow-sm"
                      : "text-slate-600 hover:bg-[#f4f7fc] hover:text-[#003b7a]"
                  }
                `}
              >
                {item.name}
              </Link>
            );

          })}

        </div>

        {/* PROFILE BUTTON */}
        <Link
          to="/"
          className="shrink-0 rounded-full bg-[#003b7a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#002b5c] hover:shadow-md"
        >
          👤 <span className="hidden sm:inline">Student</span>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;