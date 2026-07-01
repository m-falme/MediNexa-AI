"use client";

import { Mail, Lock } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-primary">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Login to your MediNexa AI account
        </p>

        <form className="space-y-5">

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
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3"
              >
                👁️
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <a
              href="/pages/forgot-password"
              className="text-primary font-medium"
            >
              Forgot Password?
            </a>
          </div>

          <button className="w-full rounded-xl bg-primary py-3 text-white font-semibold hover:opacity-90 transition">
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-gray-500">
          Don't have an account?

          <a
            href="/pages/register"
            className="ml-2 text-primary font-semibold"
          >
            Register
          </a>
        </p>

      </div>
    </main>
  );
}