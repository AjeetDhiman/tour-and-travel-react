import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";

const Layout = () => {
  return (
    <div className="font-dm-sans flex min-h-screen flex-col antialiased">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
