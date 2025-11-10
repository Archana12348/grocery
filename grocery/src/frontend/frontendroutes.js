import { Route } from "react-router-dom";
import FrontLayout from "./layout/FrontLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

export const FrontendRoutes = (
  <Route path="/" element={<FrontLayout />}>
    <Route index element={<Home />} />
    <Route path="shop" element={<Shop />} />
    <Route path="contact" element={<Contact />} />
  </Route>
);
