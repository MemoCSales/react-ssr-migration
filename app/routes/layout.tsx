import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="global-layout">
      <Header />

      <div className="g-layout global-content">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}