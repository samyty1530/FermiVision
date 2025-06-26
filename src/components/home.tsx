import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Link } from "react-router-dom";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  const { t, ready } = useTranslation();
  const [currentIndustryIndex, setCurrentIndustryIndex] = useState(1);
  const [currentProductIndex, setCurrentProductIndex] = useState(1);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isUserControlled, setIsUserControlled] = useState(false);
  const industries = [1, 2, 3, 4];
  const products = ["U", "A", "F", "B"];

  // Hero backgrounds data
  const heroBackgrounds = [
    {
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
      title: "Revolutionary Vision Technology",
      subtitle:
        "Breakthrough algorithms achieving 99.9% defect detection accuracy",
      newsId: "1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80",
      title: "Global Expansion Initiative",
      subtitle:
        "Expanding across Asia-Pacific with localized support and services",
      newsId: "2",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&q=80",
      title: "Strategic Industry Partnership",
      subtitle:
        "Collaborating with leading semiconductor manufacturers for next-gen solutions",
      newsId: "3",
    },
  ];

  const moveToIndustry = (index: number) => {
    // Only allow centering on 2nd or n-1 industry (index 1 or 2 for 4 items)
    if (index >= 1 && index <= industries.length - 2) {
      setCurrentIndustryIndex(index);
    }
  };

  const movePrevious = () => {
    setCurrentIndustryIndex((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const moveNext = () => {
    setCurrentIndustryIndex((prev) =>
      prev < industries.length - 2 ? prev + 1 : prev,
    );
  };

  const moveToProduct = (index: number) => {
    // Only allow centering on 2nd or n-1 product (index 1 or 2 for 4 items)
    if (index >= 1 && index <= products.length - 2) {
      setCurrentProductIndex(index);
    }
  };

  const moveProductPrevious = () => {
    setCurrentProductIndex((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const moveProductNext = () => {
    setCurrentProductIndex((prev) =>
      prev < products.length - 2 ? prev + 1 : prev,
    );
  };

  // Hero navigation functions
  const goToHeroSlide = (index: number) => {
    setCurrentHeroIndex(index);
    setIsUserControlled(true);
  };

  const goToPreviousHero = () => {
    setCurrentHeroIndex((prev) =>
      prev === 0 ? heroBackgrounds.length - 1 : prev - 1,
    );
    setIsUserControlled(true);
  };

  const goToNextHero = () => {
    setCurrentHeroIndex((prev) =>
      prev === heroBackgrounds.length - 1 ? 0 : prev + 1,
    );
    setIsUserControlled(true);
  };

  // Auto-scroll effect for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isUserControlled) {
        setCurrentHeroIndex((prev) =>
          prev === heroBackgrounds.length - 1 ? 0 : prev + 1,
        );
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isUserControlled, heroBackgrounds.length]);

  // Reset user control after 6 seconds
  useEffect(() => {
    if (isUserControlled) {
      const timeout = setTimeout(() => {
        setIsUserControlled(false);
      }, 6000);

      return () => clearTimeout(timeout);
    }
  }, [isUserControlled, currentHeroIndex]);

  // Show a simple loading state if translations aren't ready yet
  if (!ready) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

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
      {/* Hero Section with Scrolling Backgrounds */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        {heroBackgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <img
              src={bg.image}
              alt={bg.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Content */}
        <div className="container mx-auto px-4 z-20 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {heroBackgrounds[currentHeroIndex].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            {heroBackgrounds[currentHeroIndex].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={`/news#news-${heroBackgrounds[currentHeroIndex].newsId}`}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-700 text-white rounded-full w-[145] h-[45px] text-[18px]"
              >
                {t("hero.cta.learnMore", "Learn More")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-8 z-30 flex flex-col items-start gap-4">
          {/* Indicator Dots */}
          <div className="flex gap-2">
            {heroBackgrounds.map((_, index) => (
              <button
                key={index}
                onClick={() => goToHeroSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentHeroIndex
                    ? "bg-white shadow-lg"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={goToPreviousHero}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-white group-hover:text-white" />
            </button>
            <button
              onClick={goToNextHero}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-white group-hover:text-white" />
            </button>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-8">
            {t(
              "partners.title",
              "Our products have helped create industry-leading products from around the world.",
            )}
          </h2>
          <div className="flex justify-center items-center gap-8 md:gap-16">
            <img
              src="/images/home_partners-foxconn.jpg"
              alt="Foxconn"
              className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="/images/home_partners-multek.png"
              alt="Multek"
              className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="/images/home_partners-huawei.png"
              alt="Huawei"
              className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="/images/home_partners-dongxun.png"
              alt="Dongxun"
              className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="/images/home_partners-fangzheng.png"
              alt="Fangzheng"
              className="h-5 md:h-6 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>
      {/* Industries Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            {t("industries.title", "Explore Applicable Industries")}
          </h2>
          <div className="flex justify-center mb-12">
            <div className="relative max-w-lg ml-auto mr-0 md:mr-auto md:ml-[50%]">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-blue-100 rounded-lg z-0"></div>
              <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-blue-200 rounded-lg z-0"></div>
              <p className="text-lg text-gray-600 italic relative z-10 bg-white px-6 py-3 rounded-lg shadow-sm">
                {t("industries.subtitle", "We solve problems big and small")}
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden px-24">
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(50% - ${currentIndustryIndex * (384 + 32) + 192}px))`,
              }}
            >
              {industries.map((item, index) => (
                <div
                  key={`industry-${item}`}
                  className="industry-item group flex-shrink-0 w-96 transition-all duration-500 cursor-pointer"
                  onClick={() => moveToIndustry(index)}
                >
                  <Link to="/industries" className="block">
                    <div className="transition-all duration-500">
                      <div className="overflow-visible rounded-lg shadow-md">
                        <img
                          src={`/images/home_industries-${item}.jpg`}
                          alt={t(
                            `industries.item${item}.alt`,
                            `Industry ${item}`,
                          )}
                          className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mt-5 mb-3 text-center transition-all duration-300 hover:text-2xl hover:text-primary">
                        {t(
                          `industries.item${item}.title`,
                          `Industry Category ${item}`,
                        )}
                      </h3>
                      <p className="text-gray-600 text-center text-base transition-all duration-300">
                        {t(
                          `industries.item${item}.subtitle`,
                          item === 1
                            ? "Specialized vision solutions for PCB manufacturing"
                            : item === 2
                              ? "Solutions for a wide range of personal electronics"
                              : item === 3
                                ? "Elevating safety and performance with advanced metrology solutions"
                                : "Driving electric innovation with precision optical measurement",
                        )}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8 px-4">
              <Button
                variant="outline"
                size="icon"
                onClick={movePrevious}
                disabled={currentIndustryIndex <= 1}
                className="rounded-full bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border-2"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={moveNext}
                disabled={currentIndustryIndex >= industries.length - 2}
                className="rounded-full bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border-2"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Product Series */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            {t("products.featured.title", "Product Series")}
          </h2>
          <div className="flex justify-center mb-12">
            <div className="relative max-w-lg ml-auto mr-0 md:mr-auto md:ml-[50%]">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-blue-100 rounded-lg z-0"></div>
              <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-blue-200 rounded-lg z-0"></div>
              <p className="text-lg text-gray-600 italic relative z-10 bg-white px-6 py-3 rounded-lg shadow-sm">
                {t(
                  "products.featured.subtitle",
                  "Tailored to your specific manufacturing needs",
                )}
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden px-24">
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(50% - ${currentProductIndex * (320 + 32) + 160}px))`,
              }}
            >
              {products.map((series, index) => (
                <div
                  key={`product-${series}`}
                  className="product-item group flex-shrink-0 w-80 transition-all duration-500 cursor-pointer"
                  onClick={() => moveToProduct(index)}
                >
                  <Link
                    to={`/products?category=${series.toLowerCase()}_series`}
                    className="block transition-all duration-300 hover:opacity-90"
                  >
                    <div className="overflow-hidden rounded-lg shadow-md bg-white relative">
                      <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-bold py-1 px-3 rounded-full">
                        {series}
                      </div>
                      <img
                        src={`/images/home-products-1-${series === "U" ? "U" : series === "A" ? "A8" : series === "F" ? "F5" : "B"}.jpg`}
                        alt={t(
                          `products.featured.item${index + 1}.alt`,
                          `Vision Series ${series}`,
                        )}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-center transition-all duration-300 hover:text-2xl hover:text-primary">
                      {t(
                        `products.featured.item${index + 1}.title`,
                        `Vision Series ${series}`,
                      )}
                    </h3>
                    <p className="text-gray-600 text-center transition-all duration-300">
                      {t(
                        `products.featured.item${index + 1}.description`,
                        `Advanced vision technology for precision applications`,
                      )}
                    </p>
                  </Link>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8 px-4">
              <Button
                variant="outline"
                size="icon"
                onClick={moveProductPrevious}
                disabled={currentProductIndex <= 1}
                className="rounded-full bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border-2"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={moveProductNext}
                disabled={currentProductIndex >= products.length - 2}
                className="rounded-full bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border-2"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* News & Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t("news.title", "News & Events")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[1, 2].map((item) => (
              <div
                key={`news-${item}`}
                className="flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img
                      src={`https://images.unsplash.com/photo-${item === 1 ? "1581091226033-b5875c1b8b29" : "1581091226033-b5875c1b8b29"}?w=400&q=80`}
                      alt={t(`news.item${item}.alt`, `News Item ${item}`)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-3">
                    {t(`news.item${item}.title`, `Latest Announcement ${item}`)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t(
                      `news.item${item}.description`,
                      `Fermi Vision announces new developments in vision technology that will revolutionize the industry with unprecedented precision and reliability.`,
                    )}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t(`news.item${item}.date`, `June ${item}, 2023`)}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 text-primary border-primary hover:bg-accent-50"
                  >
                    {t("news.readMore", "Read More")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Search functionality is now handled in the Header component */}
      {/* Footer */}
      <Footer
        companyName="Fermi Vision"
        companyAddress="Shenzhen, China"
        companyPhone="+86 158 8956 4803"
        companyEmail="sales@fermivision.com"
        socialLinks={{
          linkedin: "https://linkedin.com",
          // WeChat doesn't have a direct URL, but we'll include it for the icon
          // The actual WeChat QR code would be shown on click in a real implementation
        }}
      />
    </div>
  );
};

export default Home;
