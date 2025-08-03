import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Breadcrumbs from "./layout/Breadcrumbs";

interface Product {
  series: string;
  title: string;
  description: string;
  image: string;
}

const Products = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Fixed product offerings
  const fixedProducts: Product[] = [
    {
      series: "c",
      title: t("products.series.c.title", "Vision Series C"),
      description: t(
        "products.series.c.description",
        "High-precision optical measurement system for complex industrial applications",
      ),
      image: "/images/product-series/vision-c.jpg",
    },
    {
      series: "a",
      title: t("products.series.a.title", "Vision Series A"),
      description: t(
        "products.series.a.description",
        "Automated metrology solution designed for high-volume manufacturing environments",
      ),
      image: "/images/product-series/vision-a.jpg",
    },
    {
      series: "f",
      title: t("products.series.f.title", "Vision Series F"),
      description: t(
        "products.series.f.description",
        "Specialized optical metrology system for fine feature measurement",
      ),
      image: "/images/product-series/vision-f.jpg",
    },
    {
      series: "b",
      title: t("products.series.b.title", "Vision Series B"),
      description: t(
        "products.series.b.description",
        "Robust inspection system for harsh industrial environments",
      ),
      image: "/images/product-series/vision-b.jpg",
    },
    {
      series: "u",
      title: t("products.series.u.title", "Vision Series U"),
      description: t(
        "products.series.u.description",
        "Versatile imaging solution for general-purpose quality control applications",
      ),
      image: "/images/product-series/vision-u.jpg",
    },
    {
      series: "accessories",
      title: t("products.series.accessories.title", "Accessories & Components"),
      description: t(
        "products.series.accessories.description",
        "Enhance the capabilities of your Fermi Vision systems with our range of specialized accessories",
      ),
      image: "/images/product-series/accessories.jpg",
    },
  ];

  // Load products from JSON file based on language
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const language = i18n.language.startsWith("zh") ? "zh" : "en";
        const response = await fetch(`/data/products-${language}.json`);

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          // Fallback to fixed products if JSON fetch fails
          setProducts(fixedProducts);
        }
      } catch (error) {
        console.error("Error loading products:", error);
        // Fallback to fixed products on error
        setProducts(fixedProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [i18n.language]);

  // Parse search query from URL when component mounts or URL changes
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get("search");

    if (search) {
      setSearchTerm(search);
    } else {
      setSearchTerm("");
    }
  }, [location.search]);

  // Filter products by search term if present
  const displayedProducts = searchTerm
    ? products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : products;

  // Fallback image handler
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src =
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80";
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <Header
        logo="/images/FV_logo.png"
        navLinks={[
          { label: t("nav.products", "Products"), href: "/products" },
          { label: t("nav.industries", "Industries"), href: "/industries" },
          { label: t("nav.downloads", "Downloads"), href: "/downloads" },
          { label: t("nav.news", "News"), href: "/news" },
          { label: t("nav.about", "About"), href: "/about" },
          { label: t("nav.contact", "Contact"), href: "/contact" },
        ]}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: t("nav.products", "Products") }]} />

      {/* Page Content */}
      <main className="flex-grow pt-[132px] pb-16">
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

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <p className="text-xl">{t("common.loading", "Loading...")}</p>
              </div>
            ) : displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProducts.map((product) => (
                  <Link
                    to={`/products/${product.series}`}
                    key={product.series}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={handleImageError}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <Button className="w-full bg-primary hover:bg-primary-700 text-white">
                        {t("common.learnMore", "Learn More")}
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold mb-4">
                  {t("products.noResults", "No products found")}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t(
                    "products.tryDifferentSearch",
                    "Please try a different search term",
                  )}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        companyName="Fermi Vision"
        companyAddress="Shenzhen, China"
        companyPhone="+86 189 2346 0852"
        companyEmail="sales@fermivision.com"
        socialLinks={{
          linkedin: "https://linkedin.com",
        }}
      />
    </div>
  );
};

export default Products;
