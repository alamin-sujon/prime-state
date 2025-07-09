import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import App from "../App";
import DashboardLayout from "../layout/DashboardLayout";
import AllPropertyPage from "../pages/property/AllPropertyPage";
import PropertyDetailsPage from "../pages/property/PropertyDetailsPage";
import AllCarsPage from "../pages/luxury-cars/AllCarsPage";
import CarDetailsPage from "../pages/luxury-cars/CarDetailsPage";
import AllYachtsPage from "../pages/luxury-yachts/AllYachtsPage";
import AllWatchPage from "../pages/luxury-watch/AllWatchPage";
import WatchDetailsPage from "../pages/luxury-watch/WatchDetailsPage";
import YachtsDetailsPage from "../pages/luxury-yachts/YachtsDetailsPage";


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
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
        {
            path: '',
            element: <App />
        }
    ]
  }
]);