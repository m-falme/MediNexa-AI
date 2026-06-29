"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, HeartPulse } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "How It Works",
    href: "#how-it-works",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="bg-primary/10 p-2 rounded-full">
            <HeartPulse
              size={28}
              className="text-primary"
            />
          </div>

          <div>
            <h1 className="font-bold text-xl text-primary">
              MediNexa AI
            </h1>

            <p className="text-xs text-muted">
              AI Healthcare Platform
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          <Button variant="outline">
            Login
          </Button>

          <Button variant="primary">
            Get Started
          </Button>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-primary"
        >
          {mobileMenuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>

      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (

        <div className="lg:hidden border-t border-border bg-background">

          <div className="flex flex-col px-6 py-5 gap-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium hover:text-primary transition"
              >
                {link.name}
              </Link>
            ))}

            <Button variant="outline">
              Login
            </Button>

            <Button variant="primary">
              Get Started
            </Button>

          </div>

        </div>

      )}
    </header>
  );
}