// src/pages/DashboardPage.jsx
import Home from "./home/Home";
import { useState } from "react";
import Assignment from "./Assignment";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Users from "./users/Users";
// import Products from "./products/Products";
import Navbar from "../components/navbar/NavbarDashboard";
// import Footer from "../components/footer/Footer";
import TeacherMenu from "../components/menu/TeacherMenu";
// import Login from "./login/Login";
import "../styles/global.scss";
// import User from "./user/User";
// import Product from "./student/Product";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

function PageTeacher() {
  const [selectedTab, setSelectedTab] = useState("Performance"); // State to manage selected tab

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      <Navbar />
      <TeacherMenu onSelectTab={handleTabSelect} />
      <div className="p-1 mt-20 sm:ml-60">
        <div className="p-41 dark:border-gray-700">
          {/* Router outlet to render components based on route */}
          {selectedTab === "Performance" && <Home />}
          {selectedTab === "Assignment" && <Assignment />}
        </div>
      </div>
    </div>
  );
}

export default PageTeacher;
