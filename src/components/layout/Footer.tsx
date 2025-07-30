import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  companyName?: string;
  companyAddress?: string;
  companyPhone?: string;
  companyEmail?: string;
  socialLinks?: {
    linkedin?: string;
  };
}

const Footer = ({
  companyName = "Fermi Vision",
  companyAddress = "Shenzhen, China",
  companyPhone = "+86 189 2346 0852",
  companyEmail = "sales@fermivision.com",
  socialLinks = {
    linkedin: "https://linkedin.com",
  },
}: FooterProps) => {
  const { i18n } = useTranslation();
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{companyName}</h3>
            <p className="mb-4 text-sm">
              Pioneering the future of technology with innovative solutions for
              tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary transition-colors text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-primary transition-colors text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="hover:text-primary transition-colors text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/news"
                  className="hover:text-primary transition-colors text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/customer-request"
                  className="hover:text-primary transition-colors text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Customer Request Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span className="text-sm">{companyAddress}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-sm">{companyPhone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <a
                  href={`mailto:${companyEmail}`}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {companyEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link
              to="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              {i18n.language === "en" ? "Privacy Policy" : "隐私政策"}
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-primary transition-colors"
            >
              {i18n.language === "en" ? "Terms of Service" : "使用条款"}
            </Link>
            <Link
              to="/sitemap"
              className="hover:text-primary transition-colors"
            >
              {i18n.language === "en" ? "Sitemap" : "网站地图"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
