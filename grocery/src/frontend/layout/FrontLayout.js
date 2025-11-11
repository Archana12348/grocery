import { useLocation } from "react-router-dom";
import Header from "../layout/navbar/Header";
import Footer from "../layout/navbar/Footer";

export default function MainLayout({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Header />
      <main>{children}</main>

      {isHomePage && <></>}

      <Footer />
    </>
  );
}
