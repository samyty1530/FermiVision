import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  series?: string;
}

const Products = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const location = useLocation();

  // Product categories
  const categories = [
    {
      id: "u_series",
      name: t("products.categories.u_series", "Imaging Solutions"),
    },
    {
      id: "a_series",
      name: t("products.categories.a_series", "Automated Metrology Solutions"),
    },
    {
      id: "f_series",
      name: t(
        "products.categories.f_series",
        "Advanced Optical Metrology Solutions",
      ),
    },
    {
      id: "accessories",
      name: t("products.categories.accessories", "Accessories & Components"),
    },
  ];

  // Sample products for each category
  const products: Record<string, Product[]> = {
    u_series: [
      {
        id: 1,
        name: "Vision Series U",
        series: "U",
        description: "Compact sensor for real-time object detection",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80",
      },
      {
        id: 2,
        name: "Vision Series U Pro",
        series: "U",
        description: "Advanced 3D scanning technology for complex objects",
        image:
          "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&q=80",
      },
    ],
    a_series: [
      {
        id: 4,
        name: "Vision Series A - A5",
        series: "A",
        description: "Comprehensive software for image processing and analysis",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80",
      },
      {
        id: 5,
        name: "Vision Series A - Recognition",
        series: "A",
        description: "Cloud-based API for real-time object recognition",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80",
      },
    ],
    f_series: [
      {
        id: 6,
        name: "Vision Series F - Factory",
        series: "F",
        description: "End-to-end vision system for manufacturing environments",
        image:
          "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&q=80",
      },
      {
        id: 7,
        name: "Vision Series F - Navigation",
        series: "F",
        description: "Integrated vision system for autonomous vehicles",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80",
      },
    ],
    accessories: [
      {
        id: 8,
        name: "Precision Lens Kit",
        description: "High-quality lenses for vision cameras",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80",
      },
      {
        id: 9,
        name: "Mounting Solutions",
        description: "Versatile mounting options for vision hardware",
        image:
          "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&q=80",
      },
    ],
  };

  // Parse search query and category from URL when component mounts or URL changes
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get("search");
    const category = searchParams.get("category");

    if (search) {
      setSearchTerm(search);
    } else {
      setSearchTerm("");
    }

    if (category) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  // Get products for the selected category or all products if no category is selected
  const getDisplayedProducts = () => {
    // Get all products or filtered by category
    let filteredProducts = selectedCategory
      ? products[selectedCategory as keyof typeof products] || []
      : Object.values(products).flat();

    // Further filter by search term if present
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term),
      );
    } else if (!selectedCategory) {
      // If no search term and no category, show only featured products
      return Object.values(products).flat().slice(0, 6);
    }

    return filteredProducts;
  };

  const displayedProducts = getDisplayedProducts();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <Header
        logo="/images/FV_logo_250625.png"
        navLinks={[
          { label: t("nav.products", "Products"), href: "/products" },
          { label: t("nav.industries", "Industries"), href: "/industries" },
          { label: t("nav.downloads", "Downloads"), href: "/downloads" },
          { label: t("nav.news", "News"), href: "/news" },
          { label: t("nav.about", "About"), href: "/about" },
          { label: t("nav.contact", "Contact"), href: "/contact" },
        ]}
      />

      {/* Page Content */}
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#098fc8] via-[#0772a0] to-[#00365c] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4 text-white">
              {searchTerm
                ? t("products.searchResults", "Search Results for ") +
                  `"${searchTerm}"`
                : t("products.pageTitle", "Our Products")}
            </h1>
            <p className="text-xl text-gray-100 text-center max-w-3xl mx-auto">
              {searchTerm
                ? t(
                    "products.searchSubtitle",
                    "Showing products matching your search criteria",
                  )
                : t(
                    "products.pageSubtitle",
                    "Discover our comprehensive range of computer vision and optical solutions.",
                  )}
            </p>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="border-b border-gray-200 pb-4">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  className="min-w-[120px]"
                >
                  {t("common.viewAll", "View All")}
                </Button>

                {/* Category Dropdown for Mobile */}
                <div className="md:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        {selectedCategory
                          ? categories.find(
                              (cat) => cat.id === selectedCategory,
                            )?.name
                          : t(
                              "products.categories.title",
                              "Product Categories",
                            )}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {categories.map((category) => (
                        <DropdownMenuItem
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          {category.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Category Buttons for Desktop */}
                <div className="hidden md:flex flex-wrap items-center gap-4">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={
                        selectedCategory === category.id ? "default" : "outline"
                      }
                      onClick={() => setSelectedCategory(category.id)}
                      className="min-w-[120px]"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative"
                >
                  {product.series && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-sm font-bold py-1 px-3 rounded-full">
                      {product.series}
                    </div>
                  )}
                  <div className="h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Button className="w-full bg-primary hover:bg-primary-700 text-white">
                      {t("common.learnMore", "Learn More")}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        companyName="Fermi Vision"
        companyAddress="Shenzhen, China"
        companyPhone="+86 158 8956 4803"
        companyEmail="sales@fermivision.com"
        socialLinks={{
          linkedin: "https://linkedin.com",
        }}
      />
    </div>
  );
};

export default Products;
