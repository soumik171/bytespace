import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";

export default function LoginPage() {
  const [formData, setFormData] = useState({
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
      leftTitle="Sign in with ease"
      leftSubtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="w-full flex flex-col">
        {/* Category Label */}
        <span className="font-['Satoshi',sans-serif] text-[13px] sm:text-[14px] font-medium text-primary-600 block mb-1">
          Sign In
        </span>

        {/* Form Title */}
        <h1 className="font-['Poppins',sans-serif] text-[26px] sm:text-[30px] md:text-[32px] font-semibold text-neutral-950 leading-tight mb-5 sm:mb-6">
          Welcome Back
        </h1>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4">
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
              Sign In
            </button>
          </div>
        </form>

        {/* 'or' Divider */}
        <div className="relative flex py-4 sm:py-5 items-center">
          <div className="flex-grow border-t border-neutral-200" />
          <span className="flex-shrink mx-4 text-neutral-400 font-['Satoshi',sans-serif] text-[13px] sm:text-[13.5px]">
            or
          </span>
          <div className="flex-grow border-t border-neutral-200" />
        </div>

        {/* Social Authentication Buttons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {/* Facebook Button */}
          <button
            type="button"
            aria-label="Sign in with Facebook"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>

          {/* Google Button */}
          <button
            type="button"
            aria-label="Sign in with Google"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.28-2.1 3.66-5.2 3.66-9.12z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.26 21.36 7.34 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.13z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
              />
            </svg>
          </button>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-5 sm:mt-6 font-['Satoshi',sans-serif] text-[13px] sm:text-[13.5px] text-neutral-600">
          New user?{" "}
          <Link
            to="/signup"
            className="text-primary-600 hover:text-primary-700 font-semibold no-underline ml-1"
          >
            Create an account
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
