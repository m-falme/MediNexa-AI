"use client";

import { Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center">
          Forgot Password
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Enter your email to receive a reset link.
        </p>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <div className="relative">

              <Mail
                className="absolute left-3 top-3.5 text-gray-400"
                size={20}
              />

              <input
                type="email"
                placeholder="faith@gmail.com"
                className="w-full border rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

          </div>

          <button className="w-full bg-primary text-white rounded-xl py-3 font-semibold">
            Send Reset Link
          </button>

        </form>

      </div>
    </main>
  );
}