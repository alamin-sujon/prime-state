import { Outlet } from "react-router-dom";
import AdminSidebar from "../pages/dashboard/admin/AdminSidebar";


export default function AdminLayout() {
  return (
    <div>
      <AdminSidebar />
      <Outlet />
    </div>
  )
}
