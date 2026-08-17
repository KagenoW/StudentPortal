import "./App.css";

import Navbar from "./components/Navbar";

import Activity1 from "./pages/Activity1";
import Activity2 from "./pages/Activity2";
import Activity3 from "./pages/Activity3";
import Activity4 from "./pages/Activity4";
import Activity5 from "./pages/Activity5";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  const activities = [
    {
      number: 1,
      title: "Login Authentication",
      description:
        "Validate a username and password against sample credentials and manage login/logout state.",
      path: "/activity1",
    },
    {
      number: 2,
      title: "Student Grade Evaluation",
      description:
        "Enter a student's score and get an automatic remark based on grade ranges.",
      path: "/activity2",
    },
    {
      number: 3,
      title: "Password Strength Checker",
      description:
        "Check password length and receive live feedback on how strong it is.",
      path: "/activity3",
    },
    {
      number: 4,
      title: "Electricity Bill Calculator",
      description:
        "Calculate a customer's electricity bill based on kWh consumption and tiered rates.",
      path: "/activity4",
    },
    {
      number: 5,
      title: "Employee Attendance Checker",
      description:
        "Check an employee's time-in and determine whether they are on time, late, or very late.",
      path: "/activity5",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-100 px-6 py-16 md:px-10 md:py-16">

      {/* ================= HEADER ================= */}
      <div className="mx-auto max-w-6xl text-center">

        <h1 className="text-5xl font-extrabold tracking-tight text-[#000080] md:text-6xl">
          React Activity Portal
        </h1>

        <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-slate-500 md:text-lg">
          Five interactive React activities demonstrating state, events,
          conditional logic, validation, and calculations.
        </p>

      </div>

      {/* ================= ACTIVITY CARDS ================= */}
      <div
        className="
          mx-auto mt-14 grid max-w-6xl
          grid-cols-1 gap-7
          md:grid-cols-2
          lg:grid-cols-3
        "
      >

        {activities.map((activity) => (
          <div
            key={activity.number}
            className="
              flex min-h-[270px] flex-col
              rounded-2xl
              border border-slate-200
              bg-white
              p-7
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >

            {/* ================= NUMBER ================= */}
            <div
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-lg
                bg-blue-50
                text-base font-bold
                text-[#000080]
              "
            >
              {activity.number}
            </div>

            {/* ================= TITLE ================= */}
            <h2 className="mt-6 text-xl font-bold text-slate-900">
              {activity.title}
            </h2>

            {/* ================= DESCRIPTION ================= */}
            <p className="mt-3 text-sm leading-6 text-slate-500 md:text-base">
              {activity.description}
            </p>

            {/* ================= BUTTON ================= */}
            <Link
              to={activity.path}
              className="
                mt-auto block
                rounded-lg
                bg-[#000080]
                px-5 py-3.5
                text-center
                text-sm font-semibold
                text-white
                transition-all duration-200
                hover:bg-[#000066]
                hover:shadow-md
                active:scale-[0.98]
              "
            >
              Open Activity
            </Link>

          </div>
        ))}

      </div>

    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* Navigation stays visible on every page */}
        <Navbar />

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity1" element={<Activity1 />} />
          <Route path="/activity2" element={<Activity2 />} />
          <Route path="/activity3" element={<Activity3 />} />
          <Route path="/activity4" element={<Activity4 />} />
          <Route path="/activity5" element={<Activity5 />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;