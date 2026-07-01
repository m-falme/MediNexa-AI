"use client";

import { Lock } from "lucide-react";
import { useState } from "react";

export default function ResetPasswordPage() {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (

    <main className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center">
          Reset Password
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Create a new password.
        </p>

        <form className="space-y-5">

          <div>

            <label className="block mb-2">
              New Password
            </label>

            <div className="relative">

              <Lock className="absolute left-3 top-3.5"/>

              <input
                type={show1 ? "text":"password"}
                placeholder="New Password"
                className="w-full border rounded-xl py-3 pl-10 pr-12"
              />

              <button
                type="button"
                className="absolute right-4 top-3"
                onClick={()=>setShow1(!show1)}
              >
                👁️
              </button>

            </div>

          </div>

          <div>

            <label className="block mb-2">
              Confirm Password
            </label>

            <div className="relative">

              <Lock className="absolute left-3 top-3.5"/>

              <input
                type={show2 ? "text":"password"}
                placeholder="Confirm Password"
                className="w-full border rounded-xl py-3 pl-10 pr-12"
              />

              <button
                type="button"
                className="absolute right-4 top-3"
                onClick={()=>setShow2(!show2)}
              >
                👁️
              </button>

            </div>

          </div>

          <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold">
            Reset Password
          </button>

        </form>

      </div>

    </main>

  );

}