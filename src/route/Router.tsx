import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import App from "../App";
import AllPropertyPage from "../pages/property/all-property/AllPropertyPage";
import PropertyDetailsPage from "../pages/property/property-details/PropertyDetailsPage";
import AllCarsPage from "../pages/luxury-cars/all-car/AllCarsPage";
import CarDetailsPage from "../pages/luxury-cars/car-details/CarDetailsPage";
import AllYachtsPage from "../pages/luxury-yachts/all-yachts/AllYachtsPage";
import AllWatchPage from "../pages/luxury-watch/AllWatchPage";
import WatchDetailsPage from "../pages/luxury-watch/WatchDetailsPage";
import YachtsDetailsPage from "../pages/luxury-yachts/yachts-details/YachtsDetailsPage";
import AdminDashboard from "../pages/dashboard/admin/AdminDashboard";
import SellerDashboard from "../pages/dashboard/seller/SellerDashboard";
import AdminLayout from "../layout/AdminLayout";
import SellerLayout from "../layout/SellerLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            index: true,
            element: <App />
        },
        
        // Property Route
        {
            path: '/property',
            element: <AllPropertyPage />
        },
        {
            path: '/property/:id',
            element: <PropertyDetailsPage />
        },

        // Car Route
        {
            path: '/luxury-cars',
            element: <AllCarsPage />
        },
        {
            path: '/luxury-cars/:id',
            element: <CarDetailsPage />
        },

        // Yachts route
        {
            path: '/luxury-yachts',
            element: <AllYachtsPage />
        },
        {
            path: '/luxury-yachts/:id',
            element: <YachtsDetailsPage />
        },

        // Watch route
        {
            path: '/luxury-watch',
            element: <AllWatchPage />
        },
        {
            path: '/luxury-watch/:id',
            element: <WatchDetailsPage />
        },
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
        {
            path: '',
            element: <AdminDashboard />
        },
        
      
    ]
  },
  {
    path: '/seller',
    element: <SellerLayout />,
    children: [
        {
            path: '',
            element: <SellerDashboard />
        },
        
      
    ]
  }
]);