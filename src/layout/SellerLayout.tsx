import { Outlet } from "react-router-dom";
import SellerSidebar from "../pages/dashboard/seller/SellerSidebar";

export default function SellerLayout() {
  return (
    <div>
      <SellerSidebar />
      <Outlet />
    </div>
  )
}
