import { useState } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";

const navLinks = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-border">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Left icon */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="hidden lg:block">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="2" fill="currentColor" fillOpacity="0.1" />
              <path d="M6 8h4v4H6zM12 8h4v4h-4zM18 8h4v4h-4zM6 14h4v4H6zM12 14h4v4h-4zM18 14h4v4h-4zM6 20h4v4H6zM12 20h4v4h-4z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-widest uppercase text-foreground">
          LOGO
        </h1>

        {/* Right icons */}
        <div className="flex items-center gap-3 md:gap-4">
          <button aria-label="Search" className="hidden md:block"><Search size={18} /></button>
          <button aria-label="Wishlist"><Heart size={18} /></button>
          <button aria-label="Cart"><ShoppingBag size={18} /></button>
          <button aria-label="Account" className="hidden md:block"><User size={18} /></button>
          <span className="hidden md:inline text-xs text-muted-foreground">ENG ▾</span>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex justify-center gap-8 pb-4 text-sm tracking-wider">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-foreground hover:underline underline-offset-4 transition-all"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border px-6 py-4 flex flex-col gap-4 text-sm tracking-wider">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-foreground">
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
