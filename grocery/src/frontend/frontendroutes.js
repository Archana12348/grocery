import { Route } from "react-router-dom";
import FrontLayout from "./layout/FrontLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AboutUsPage from "./pages/aboutus/AboutUs";

export const FrontendRoutes = (
  <>
    {/* 🔹 FRONT LAYOUT ROUTES */}
    <Route path="/" element={<FrontLayout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="aboutus" element={<AboutUsPage />} />
    </Route>

    {/* 🔹 LOGIN / SIGNUP OUTSIDE FRONT LAYOUT */}
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </>
);
