import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        "rounded-xl font-semibold transition-all duration-300 flex items-center justify-center",

        // Sizes
        {
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },

        // Variants
        {
          "bg-primary text-white hover:bg-primary-dark":
            variant === "primary",

          "bg-secondary text-white hover:opacity-90":
            variant === "secondary",

          "border border-primary text-primary hover:bg-primary hover:text-white":
            variant === "outline",
        },

        // Disabled
        {
          "opacity-50 cursor-not-allowed":
            disabled || loading,
        }
      )}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;