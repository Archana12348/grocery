import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const sectionStyle = {
    backgroundImage:
      'url("/hero/hero_shape_1_4.svg"), url("/shape/vector_shape_12.png"), url("/hero/hero_arrow.svg")',
    backgroundPosition: "top left, center, top right",
    backgroundSize: "auto 100%, auto, auto 10%",
    backgroundRepeat: "no-repeat",
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
    address: "",
    gst: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    console.log("Validating form data:", formData.phone);
    debugger;
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    const rawPhone = formData.phone.replace(/\s/g, ""); // remove spaces

    if (!rawPhone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(rawPhone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    if (!formData.confirm_password) {
      newErrors.confirm_password = "Confirm password is required";
    } else if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!validate()) return;

    // Remove confirm_password & add user_type
    const { confirm_password, ...rest } = formData;

    const payload = {
      ...rest,
      user_type: "user", // 👈 added
    };

    try {
      const response = await fetch(
        "https://pos.premierwebtechservices.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Registration successful");
        // navigate("/login"); // optional
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-green-100 relative overflow-hidden"
      style={sectionStyle}
    >
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Create Your Account
        </h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          onSubmit={handleSubmit}
        >
          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* phone */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>

            <div className="flex">
              {/* Country Code */}
              <span className="flex items-center px-3 mt-1 border border-r-0 rounded-l-lg bg-gray-100 text-gray-700">
                +91
              </span>

              {/* Phone Input */}
              <input
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="98765 43210"
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, ""); // only digits

                  if (value.length > 10) return;

                  // Auto format: 98765 43210
                  if (value.length > 5) {
                    value = value.slice(0, 5) + " " + value.slice(5);
                  }

                  setFormData({ ...formData, phone: value });
                }}
                onPaste={(e) => {
                  e.preventDefault();
                  const pasted = e.clipboardData
                    .getData("text")
                    .replace(/\D/g, "");

                  if (pasted.length !== 10) {
                    setErrors({
                      ...errors,
                      phone: "Please paste a valid 10 digit number",
                    });
                    return;
                  }

                  const formatted = pasted.slice(0, 5) + " " + pasted.slice(5);

                  setFormData({ ...formData, phone: formatted });
                  setErrors({ ...errors, phone: "" });
                }}
                className="w-full mt-1 p-2.5 border rounded-r-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email – FULL WIDTH */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 p-2.5 border rounded-lg pr-10 focus:ring-2 focus:ring-green-500"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              className="w-full mt-1 p-2.5 border rounded-lg pr-10 focus:ring-2 focus:ring-green-500"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </span>
            {errors.confirm_password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirm_password}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* GST */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              GST Number (Optional)
            </label>
            <input
              name="gst"
              value={formData.gst}
              onChange={handleChange}
              className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
