import React, { useState, KeyboardEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
// Import the default export from LanguageSwitcher
import LanguageSwitcher from "../LanguageSwitcher";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  logo?: string;
  navLinks?: Array<{ label: string; href: string }>;
}

const Header = ({
  logo = "/images/FV_logo.png",
  navLinks = [
    { label: "Products", href: "/products" },
    { label: "Industries", href: "/industries" },
    { label: "News", href: "/news" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
}: HeaderProps) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Filter out Downloads from navLinks and ensure Contact shows as Contact Us
  const filteredNavLinks = navLinks
    .filter(
      (link) =>
        !link.href.includes("/downloads") &&
        !link.label.toLowerCase().includes("download"),
    )
    .map((link) => {
      if (link.href === "/contact" && link.label === "Contact") {
        return { ...link, label: "Contact Us" };
      }
      return link;
    });

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
      <div className="container mx-auto px-4 py-1 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Fermi Vision"
            className="h-20"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/FV_logo.png";
            }}
          />
        </Link>

        {/* Search Bar */}
        <div className="relative order-3 md:order-none w-full md:flex-1 md:mx-8 mt-2 md:mt-0">
          <div className="relative flex items-center">
            <Input
              type="text"
              placeholder={t("search.placeholder", "Search products...")}
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
          {filteredNavLinks.map((link) => (
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
              {filteredNavLinks.map((link) => (
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
