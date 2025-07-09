import { Outlet } from "react-router-dom";
import AdminSidebar from "../pages/dashboard/admin/AdminSidebar";
import SellerSidebar from "../pages/dashboard/seller/SellerSidebar";

type TRole = 'admin' | 'seller'
export default function DashboardLayout() {

  const role: TRole = 'seller'
  return (
    <div className="flex gap-16">
      {/* Sidebar */}
      <div className="max-w-sm">
       {
        role === 'seller' ?   <SellerSidebar /> : <AdminSidebar />
       }
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}
