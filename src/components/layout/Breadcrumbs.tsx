import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const { t } = useTranslation();

  // Always include Home as the first item
  const allItems = [{ label: t("nav.home", "Home"), href: "/" }, ...items];

  return (
    <nav className="bg-gray-50 border-b border-gray-200 fixed top-[80px] left-0 right-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <ol className="flex items-center space-x-2 text-sm">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            const isFirst = index === 0;

            return (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                )}
                {isLast ? (
                  <span className="text-gray-900 font-medium">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href!}
                    className="text-primary hover:text-primary-700 transition-colors flex items-center"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
