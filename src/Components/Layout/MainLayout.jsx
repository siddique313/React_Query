import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout() {
  return (
    <section className="w-full h-full bg-slate-950 text-white">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}

export default MainLayout;
