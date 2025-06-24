import React, { useState, KeyboardEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
// Import the default export from LanguageSwitcher
import LanguageSwitcher from "../LanguageSwitcher";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  logo?: string;
  navLinks?: Array<{ label: string; href: string }>;
}

const Header = ({
  logo = "/logo.svg",
  navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Solutions", href: "/solutions" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo || "/images/logo.svg"}
            alt="Fermi Vision"
            className="h-8"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/logo-fallback.png";
            }}
          />
          <span className="ml-2 text-xl font-bold text-gray-900">
            Fermi Vision
          </span>
        </Link>

        {/* Search Bar */}
        <div className="relative order-3 md:order-none w-full md:w-auto md:max-w-4xl md:min-w-[500px] flex-grow md:flex-grow-0 mt-2 md:mt-0">
          <div className="relative flex items-center">
            <Input
              type="text"
              placeholder="Search products..."
              className="pr-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
            <Search className="absolute right-2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative flex items-center py-2">
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="pr-8 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                />
                <Search className="absolute right-2 h-4 w-4 text-gray-400" />
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-600 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="py-2">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
