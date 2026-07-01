"use client";

import { User, Mail, Lock } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-primary">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Join MediNexa AI
        </p>

        <form className="space-y-5">

          <div>
            <label className="mb-2 block font-medium">
              Full Name
            </label>

            <div className="relative">
              <User
                size={20}
                className="absolute left-3 top-3.5 text-gray-400"
              />

              <input
                type="text"
                placeholder="Faith Kerubo"
                className="w-full rounded-xl border pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-3 top-3.5 text-gray-400"
              />

              <input
                type="email"
                placeholder="faith@gmail.com"
                className="w-full rounded-xl border pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Password
            </label>

            <div className="relative">
              <Lock
                size={20}
                className="absolute left-3 top-3.5 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full rounded-xl border pl-10 pr-12 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                className="absolute right-4 top-3"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                👁️
              </button>
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Confirm Password
            </label>

            <div className="relative">
              <Lock
                size={20}
                className="absolute left-3 top-3.5 text-gray-400"
              />

              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full rounded-xl border pl-10 pr-12 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                className="absolute right-4 top-3"
                onClick={() =>
                  setShowConfirm(!showConfirm)
                }
              >
                👁️
              </button>
            </div>
          </div>

          <button
            className="w-full rounded-xl bg-primary py-3 font-semibold text-white hover:opacity-90 transition"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-gray-500">
          Already have an account?

          <a
            href="/pages/login"
            className="ml-2 text-primary font-semibold"
          >
            Login
          </a>
        </p>

      </div>
    </main>
  );
}