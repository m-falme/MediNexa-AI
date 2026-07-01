"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface Props {
  label: string;
  type?: string;
  placeholder: string;
}

export default function AuthInput({
  label,
  type = "text",
  placeholder,
}: Props) {
  const [show, setShow] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">{label}</label>

      <div className="relative">
        <input
          type={isPassword ? (show ? "text" : "password") : type}
          placeholder={placeholder}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-4 top-3"
          >
            {show ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}