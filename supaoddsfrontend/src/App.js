import React from "react";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./features/header/Navbar";

import Home from "./pages/Home.js";
import Footer from "./features/footer/Footer";
import LeagueTable from "./features/header/LeagueTable";
import Admin from "./features/admin/Admin.js";
import Predictions from "./features/admin/Predictions";
import Sidebar from "./features/admin/Sidebar";
import Accumulat from "./features/admin/Accumulat";
import UpdatePredictions from "./features/admin/UpdatePredictions";

function App() {
  const Layout = () => {
    return (
      <>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Outlet />
        </div>
      </>
    );
  };

  return (
    <section className="body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="leaguetable" element={<LeagueTable />} />
        <Route path="admin/" element={<Layout />}>
          <Route index element={<Admin />} />
          {/* Removed leaguetable route path from here and placed it under home route, why? it was a double child route */}

          <Route path="predictions" element={<Predictions />} />
          <Route path="accumulat" element={<Accumulat />} />
          <Route path="updatepredictions" element={<UpdatePredictions />} />
        </Route>
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
