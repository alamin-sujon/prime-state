import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

export default function Main() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-420px)] my-12 container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
