import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function FrontLayout() {
  return (
    <div>
      <header className="bg-green-600 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Grocery Store</h1>
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="p-6">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white text-center p-3 mt-10">
        © 2025 Grocery Store
      </footer>
    </div>
  );
}
