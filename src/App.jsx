import "./App.css";

import Navbar from "./components/Navbar";

import Activity1 from "./pages/Activity1";
import Activity2 from "./pages/Activity2";
import Activity3 from "./pages/Activity3";
import Activity4 from "./pages/Activity4";
import Activity5 from "./pages/Activity5";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">
        Welcome to React Activity Portal
      </h1>

      <p className="text-lg text-gray-600">
        Select an activity from the navigation bar to get started.
      </p>
    </div>
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