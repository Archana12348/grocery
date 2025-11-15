import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const sectionStyle = {
    backgroundImage:
      'url("/hero/hero_shape_1_4.svg"), url("/shape/vector_shape_12.png"), url("/hero/hero_arrow.svg")',
    backgroundPosition: "top left, center, top right",
    backgroundSize: "auto 100%, auto, auto 10%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 bg-green-100 relative overflow-hidden"
      style={sectionStyle}
    >
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Login
        </h2>

        <form className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Forgot password link */}
          <div className="text-right -mt-3">
            <Link
              to="/forgot-password"
              className="text-sm text-green-600  hover:text-[#FF9C00] font-semibold hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button className="w-full bg-green-600  text-white py-3 rounded-xl font-semibold hover:bg-[#FF9C00] transition-all">
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-green-600 hover:text-[#FF9C00] font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
