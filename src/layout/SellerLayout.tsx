import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Package,
  User,
  Plus,
  ExternalLink,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";

const SellerLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigationItems = [
    {
      path: "/seller",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      path: "/seller/total-listed",
      label: "Total Listed",
      icon: Package,
    },
    {
      path: "/seller/my-profile",
      label: "My Profile",
      icon: User,
    },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsSidebarOpen(false); // Close sidebar on mobile after navigation
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg flex flex-col transform transition-transform duration-300 ease-in-out
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        {/* Logo Section */}
        <div className="p-5 border-b bg-[#CBA65F] border-gray-200">
          <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#CBA65F] to-[#B8954A] rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Privé Estates
              </span>
            </div>
            {/* Close button for mobile */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Action
            </h3>
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#CBA65F]/10 to-[#B8954A]/10 text-[#CBA65F] border-l-4 border-[#CBA65F]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-[#CBA65F]" : "text-gray-400"
                    }`}
                  />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => handleNavigation("/seller/create")}
              className="w-full bg-gradient-to-r from-[#CBA65F] to-[#B8954A] text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:from-[#B8954A] hover:to-[#A6843D] transition-all duration-200 shadow-lg hover:shadow-xl mt-5"
            >
              <Plus className="w-5 h-5" />
              <span className="font-semibold">Post New</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <header className="bg-gradient-to-r from-[#CBA65F] to-[#B8954A] text-white shadow-lg">
          <div className="px-4 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button
                onClick={toggleSidebar}
                className="lg:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Menu className="w-6 h-6 text-white" />
              </button>

              <div className=" md:hidden w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div className="md:hidden block">
                <h1 className="text-xl lg:text-2xl font-bold">Privé Estates</h1>
                <p className="text-[#CBA65F]/80 text-sm hidden sm:block">
                  Seller Dashboard
                </p>
              </div>
            </div>

            <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-3 lg:px-4 py-2 rounded-lg transition-all duration-200">
              <span className="font-medium hidden sm:inline">
                Visit Website
              </span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerLayout;
