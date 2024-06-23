// src/pages/DashboardPage.jsx
import Home from "./home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Users from "./users/Users";
// import Products from "./products/Products";
import Navbar from "../components/navbar/NavbarDashboard";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";
// import Login from "./login/Login";
import "../styles/global.scss";
// import User from "./user/User";
import Product from "./product/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function DashboardPageTeacher() {
  return (
    <div>
      <Navbar />
      <Menu />
      <div className="main">
        <div className="container">
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPageTeacher;
