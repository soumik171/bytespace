import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthLayout
      leftTitle="Sign up and come in"
      leftSubtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <div className="w-full flex flex-col">
        {/* Category Label */}
        <span className="font-['Satoshi',sans-serif] text-[13px] sm:text-[14px] font-medium text-primary-600 block mb-1">
          Create an Account
        </span>

        {/* Form Title */}
        <h1 className="font-['Poppins',sans-serif] text-[26px] sm:text-[30px] md:text-[32px] font-semibold text-neutral-950 leading-tight mb-5 sm:mb-6">
          Welcome to
          <br />
          ByteSpace
        </h1>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="fullName"
              className="font-['Satoshi',sans-serif] text-[13px] sm:text-[13.5px] font-medium text-neutral-700"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              placeholder="Jamie Davis"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-[#fcfcfd] border border-neutral-200 rounded-[12px] sm:rounded-[14px] px-4 py-2.5 sm:py-3 text-[14px] sm:text-[14.5px] text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-primary-600 focus:bg-white focus:ring-2 focus:ring-primary-600/15 transition-all font-['Satoshi',sans-serif]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="font-['Satoshi',sans-serif] text-[13px] sm:text-[13.5px] font-medium text-neutral-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="designer@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#fcfcfd] border border-neutral-200 rounded-[12px] sm:rounded-[14px] px-4 py-2.5 sm:py-3 text-[14px] sm:text-[14.5px] text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-primary-600 focus:bg-white focus:ring-2 focus:ring-primary-600/15 transition-all font-['Satoshi',sans-serif]"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="font-['Satoshi',sans-serif] text-[13px] sm:text-[13.5px] font-medium text-neutral-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-[#fcfcfd] border border-neutral-200 rounded-[12px] sm:rounded-[14px] px-4 py-2.5 sm:py-3 text-[14px] sm:text-[14.5px] text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-primary-600 focus:bg-white focus:ring-2 focus:ring-primary-600/15 transition-all font-['Satoshi',sans-serif]"
            />
          </div>

          {/* Submit Button (Aligned Right as in design) */}
          <div className="flex justify-end mt-2 sm:mt-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center font-['Satoshi',sans-serif] font-medium text-[14.5px] sm:text-[15px] text-neutral-950 bg-[#cbfc01] hover:bg-[#b8e600] active:scale-[0.98] px-7 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(203,252,1,0.35)] cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <div className="text-center mt-6 sm:mt-7 font-['Satoshi',sans-serif] text-[13px] sm:text-[13.5px] text-neutral-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary-600 hover:text-primary-700 font-semibold no-underline ml-1"
          >
            Login
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
