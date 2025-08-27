import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Breadcrumbs from "./layout/Breadcrumbs";
import { Link } from "react-router-dom";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { MEDIA, getProductImage, getIndustryImage } from "@/constants/media";

const Home = () => {
  const { t, ready, i18n } = useTranslation();
  
  // Debug translation loading
  useEffect(() => {
    console.log('Home component - Translation ready:', ready);
    console.log('Home component - Current language:', i18n.language);
    console.log('Home component - Available languages:', i18n.languages);
    console.log('Home component - Test translation:', t('nav.home'));
  }, [ready, i18n.language, t]);
  

  const [currentIndustryIndex, setCurrentIndustryIndex] = useState(2);
  const [currentProductIndex, setCurrentProductIndex] = useState(2);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isUserControlled, setIsUserControlled] = useState(false);
  const industries = [1, 2, 3, 4];
  const products = ["A", "B", "F", "U", "accessories"];

  // Hero backgrounds data
  const heroBackgrounds = [
    {
      image: MEDIA.HERO.ENGINEERING_BREAKTHROUGH,
      title:
        "Engineering Breakthrough: Cutting PCB Programming Time from Hours to Minutes",
      subtitle:
        "How a leading multilayer PCB factory in Shenzhen streamlined full-panel inspections with Fermi Vision, reducing programming time from hours to minutes.",
      newsId: "1",
      slug: "engineering-breakthrough-pcb-programming-efficiency",
    },
    {
      image: MEDIA.HERO.ADAPTIVE_METROLOGY,
      title: "Adaptive Metrology for Export-Grade PCB Compliance",
      subtitle:
        "A Zhuhai PCB factory adopts Fermi Vision to ensure compliance across new and legacy U.S. standards with unmatched speed.",
      newsId: "2",
      slug: "adaptive-metrology-export-grade-pcb-compliance",
    },
    {
      image: MEDIA.NEWS.ANTENNA_BOARD_INSPECTION,
      title: "8000 Dimensions, 3 Minutes, One Machine",
      subtitle:
        "How an international PCB trader hit telecom-grade inspection standards without scaling floor space",
      newsId: "3",
      slug: "unlocking-high-volume-antenna-board-inspection",
    },
    {
      image: MEDIA.HERO.SK_HYNIX,
      title: "Fermi Vision Powers Semiconductor Efficiency Leap at SK Hynix",
      subtitle:
        "Precision algorithms and ultra-fast imaging reduce inspection time from 50+ minutes to under 3",
      newsId: "4",
      slug: "sk-hynix-semiconductor-efficiency-leap",
    },
    {
      image: MEDIA.NEWS.MANUAL_PIN_GAUGING,
      title: "Fermi Vision Replaces Manual Pin Gauging with CAD-Driven Optical Inspection",
      subtitle:
        "Thousands of press-fit holes measured in seconds with a physically simulated contact algorithm (PGA)",
      newsId: "5",
      slug: "fermi-vision-replaces-manual-pin-gauging-cad-driven-optical-inspection",
    },
  ];

  const moveToIndustry = (index: number) => {
    // Allow centering on any industry except the first and last
    if (index >= 0 && index < industries.length) {
      setCurrentIndustryIndex(index);
    }
  };

  const movePrevious = () => {
    setCurrentIndustryIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const moveNext = () => {
    setCurrentIndustryIndex((prev) =>
      prev < industries.length - 1 ? prev + 1 : prev,
    );
  };

  const moveToProduct = (index: number) => {
    // Allow centering on any product
    if (index >= 0 && index < products.length) {
      setCurrentProductIndex(index);
    }
  };

  const moveProductPrevious = () => {
    setCurrentProductIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const moveProductNext = () => {
    setCurrentProductIndex((prev) =>
      prev < products.length - 1 ? prev + 1 : prev,
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
    }, 5000);

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



  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <Header
        logo={MEDIA.LOGO.PRIMARY}
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
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden mt-[80px]">
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-2">
            {t(
              `news.articles.${currentHeroIndex + 1}.title`,
              heroBackgrounds[currentHeroIndex].title,
            )}
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            {t(
              `news.articles.${currentHeroIndex + 1}.excerpt`,
              heroBackgrounds[currentHeroIndex].subtitle,
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Link to={`/news/${heroBackgrounds[currentHeroIndex].slug}`}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-700 text-white rounded-full text-sm md:text-base px-6 py-2 md:px-8 md:py-3"
              >
                {t("hero.cta.learnMore", "Learn More")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 z-30 flex flex-col items-start gap-3 md:gap-4">
          {/* Indicator Dots */}
          <div className="flex gap-1.5 md:gap-2">
            {heroBackgrounds.map((_, index) => (
              <button
                key={index}
                onClick={() => goToHeroSlide(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentHeroIndex
                    ? "bg-white shadow-lg"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-1.5 md:gap-2">
            <button
              onClick={goToPreviousHero}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-white group-hover:text-white" />
            </button>
            <button
              onClick={goToNextHero}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-white group-hover:text-white" />
            </button>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 px-4">
            {t(
              "partners.title",
              "Our products have helped create industry-leading products from around the world.",
            )}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-16 px-4">
            <img
              src={MEDIA.PARTNERS.FOXCONN}
              alt="Foxconn"
              className="h-8 md:h-10 lg:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src={MEDIA.PARTNERS.MULTEK}
              alt="Multek"
              className="h-8 md:h-10 lg:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src={MEDIA.PARTNERS.HUAWEI}
              alt="Huawei"
              className="h-8 md:h-10 lg:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src={MEDIA.PARTNERS.UNIMICRON}
              alt="Unimicron"
              className="h-8 md:h-10 lg:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src={MEDIA.PARTNERS.CHONGDA}
              alt="Chongda"
              className="h-8 md:h-10 lg:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src={MEDIA.PARTNERS.SK}
              alt="SK"
              className="h-8 md:h-10 lg:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>
      {/* Industries Section */}
      <section className="py-8 md:py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-900 px-4">
            {t("industries.title", "Explore Applicable Industries")}
          </h2>
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative max-w-lg ml-auto mr-0 md:mr-auto md:ml-[50%]">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-blue-100 rounded-lg z-0"></div>
              <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-blue-200 rounded-lg z-0"></div>
              <p className="text-base md:text-lg text-gray-600 italic relative z-10 bg-white px-4 md:px-6 py-3 rounded-lg shadow-sm">
                {t("industries.subtitle", "We solve problems big and small")}
              </p>
            </div>
          </div>
          
          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="space-y-6 px-4">
              {industries.map((item, index) => (
                <div
                  key={`industry-mobile-${item}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <Link to="/industries" className="block">
                    <div className="relative">
                      <img
                        src={getIndustryImage(item)}
                        alt={t(
                          `industries.item${item}.alt`,
                          item === 1
                            ? "PCB Manufacturing Industry"
                            : item === 2
                              ? "AR/VR Industry"
                              : item === 3
                                ? "Aerospace Industry"
                                : "New Energy Automobiles Industry",
                        )}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        {t(
                          `industries.item${item}.title`,
                          `Industry Category ${item}`,
                        )}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
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
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="relative overflow-hidden px-8 md:px-24 py-8">
              {/* Fade gradients */}
              <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              <div
                className="flex gap-6 md:gap-8 transition-transform duration-700 ease-out"
                style={{
                  transform: currentIndustryIndex === 0 
                    ? 'translateX(calc(-1 * (384 + 24)px + 50%))' 
                    : `translateX(calc(-${currentIndustryIndex * (384 + 24)}px + 50%))`,
                }}
              >
                {industries.map((item, index) => (
                  <div
                    key={`industry-desktop-${item}`}
                    className={`industry-item group flex-shrink-0 w-96 transition-all duration-500 cursor-pointer ${
                      currentIndustryIndex === index 
                        ? 'scale-105 z-20' 
                        : 'scale-95 opacity-80'
                    }`}
                    onClick={() => moveToIndustry(index)}
                  >
                    <Link to="/industries" className="block">
                      <div className="transition-all duration-500 pb-4">
                        <div className="overflow-hidden rounded-xl shadow-lg bg-white relative group-hover:shadow-xl">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <img
                            src={getIndustryImage(item)}
                            alt={t(
                              `industries.item${item}.alt`,
                              item === 1
                                ? "PCB Manufacturing Industry"
                                : item === 2
                                  ? "AR/VR Industry"
                                  : item === 3
                                    ? "Aerospace Industry"
                                    : "New Energy Automobiles Industry",
                            )}
                            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <h3 className="text-xl font-semibold mt-5 mb-3 text-center transition-all duration-300 hover:text-2xl hover:text-primary">
                          {t(
                            `industries.item${item}.title`,
                            `Industry Category ${item}`,
                          )}
                        </h3>
                        <p className="text-gray-600 text-center text-sm leading-relaxed transition-all duration-300">
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
            </div>

            {/* Navigation Buttons - Desktop only */}
            <div className="flex justify-center gap-6 mt-12 px-8">
              <Button
                variant="outline"
                size="icon"
                onClick={movePrevious}
                disabled={currentIndustryIndex <= 0}
                className="rounded-full bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border-2 shadow-lg hover:shadow-xl transition-all duration-300 w-10 h-10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2 items-center">
                {industries.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => moveToIndustry(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndustryIndex === index 
                        ? 'bg-blue-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={moveNext}
                disabled={currentIndustryIndex >= industries.length - 1}
                className="rounded-full bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border-2 shadow-lg hover:shadow-xl transition-all duration-300 w-10 h-10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Product Series */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-900 px-4">
            {t("products.featured.title", "Product Series")}
          </h2>
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative max-w-lg ml-auto mr-0 md:mr-auto md:ml-[50%]">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-blue-100 rounded-lg z-0"></div>
              <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-blue-200 rounded-lg z-0"></div>
              <p className="text-base md:text-lg text-gray-600 italic relative z-10 bg-white px-4 md:px-6 py-3 rounded-lg shadow-sm">
                {t(
                  "products.featured.subtitle",
                  "Tailored to your specific manufacturing needs",
                )}
              </p>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="space-y-6 px-4">
              {products.map((series, index) => (
                <div
                  key={`product-mobile-${series}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <Link
                    to={`/products/${series.toLowerCase()}`}
                    className="block"
                  >
                    <div className="relative">
                      <img
                        src={getProductImage(series)}
                        alt={t(
                          `products.featured.item${index + 1}.alt`,
                          `Vision Series ${series}`,
                        )}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        {t(
                          `products.series.${series.toLowerCase()}.title`,
                          `Vision Series ${series}`,
                        )}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {t(
                          `products.series.${series.toLowerCase()}.description`,
                          `Advanced vision technology for precision applications`,
                        )}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="relative overflow-hidden px-8 md:px-24 py-8">
              {/* Fade gradients */}
              <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
              <div
                className="flex gap-6 md:gap-8 transition-transform duration-700 ease-out"
                style={{
                  transform: currentProductIndex === 0 
                    ? 'translateX(calc(-1 * (320 + 24)px + 50%))' 
                    : `translateX(calc(-${currentProductIndex * (320 + 24)}px + 50%))`,
                }}
              >
                {products.map((series, index) => (
                  <div
                    key={`product-desktop-${series}`}
                    className={`product-item group flex-shrink-0 w-80 transition-all duration-500 cursor-pointer ${
                      currentProductIndex === index 
                        ? 'scale-105 z-20' 
                        : 'scale-95 opacity-80'
                    }`}
                    onClick={() => moveToProduct(index)}
                  >
                    <Link
                      to={`/products/${series.toLowerCase()}`}
                      className="block"
                    >
                      <div className="transition-all duration-500">
                        <div className="overflow-hidden rounded-xl shadow-lg bg-white relative group-hover:shadow-xl">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <img
                            src={getProductImage(series)}
                            alt={t(
                              `products.featured.item${index + 1}.alt`,
                              `Vision Series ${series}`,
                            )}
                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="mt-4 pb-4">
                          <h3 className="text-xl font-semibold mb-2 text-center text-gray-900">
                            {t(
                              `products.series.${series.toLowerCase()}.title`,
                              `Vision Series ${series}`,
                            )}
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-600 text-center">
                            {t(
                              `products.series.${series.toLowerCase()}.description`,
                              `Advanced vision technology for precision applications`,
                            )}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons - Desktop only */}
            <div className="flex justify-center gap-6 mt-12 px-8">
              <Button
                variant="outline"
                size="icon"
                onClick={moveProductPrevious}
                disabled={currentProductIndex <= 0}
                className="rounded-full bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border-2 shadow-lg hover:shadow-xl transition-all duration-300 w-10 h-10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2 items-center">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => moveToProduct(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentProductIndex === index 
                        ? 'bg-blue-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={moveProductNext}
                disabled={currentProductIndex >= products.length - 1}
                className="rounded-full bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border-2 shadow-lg hover:shadow-xl transition-all duration-300 w-10 h-10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* News & Events Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900 px-4">
            {t("news.title", "Fermi Vision News & Events")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
              <div className="h-48 md:h-56">
                <img
                  src={MEDIA.NEWS.ANTENNA_BOARD_INSPECTION}
                  alt={t("news.articles.3.title", "8000 Dimensions, 3 Minutes, One Machine")}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                  {t("news.articles.3.title", "8000 Dimensions, 3 Minutes, One Machine")}
                </h3>
                <p className="text-sm text-gray-600 mb-3 md:mb-4">
                  {t("news.articles.3.excerpt", "How an international PCB trader hit telecom-grade inspection standards without scaling floor space")}
                </p>
                <p className="text-xs text-gray-500 mb-3 md:mb-4">{t("news.articles.3.date", "April 11, 2024")}</p>
                <div className="mt-auto">
                  <Link to="/news/unlocking-high-volume-antenna-board-inspection">
                    <Button
                      variant="outline"
                      className="text-primary border-primary hover:bg-accent-50 text-sm"
                    >
                      {t("news.readMore", "Read More")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
              <div className="h-48 md:h-56">
                <img
                  src={MEDIA.NEWS.SK_HYNIX}
                  alt={t("news.articles.4.title", "Fermi Vision Powers Semiconductor Efficiency Leap at SK Hynix")}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                  {t("news.articles.4.title", "Fermi Vision Powers Semiconductor Efficiency Leap at SK Hynix")}
                </h3>
                <p className="text-sm text-gray-600 mb-3 md:mb-4">
                  {t("news.articles.4.excerpt", "Precision algorithms and ultra-fast imaging reduce inspection time from 50+ minutes to under 3")}
                </p>
                <p className="text-xs text-gray-500 mb-3 md:mb-4">{t("news.articles.4.date", "September 9, 2024")}</p>
                <div className="mt-auto">
                  <Link to="/news/sk-hynix-semiconductor-efficiency-leap">
                    <Button
                      variant="outline"
                      className="text-primary border-primary hover:bg-accent-50 text-sm"
                    >
                      {t("news.readMore", "Read More")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
              <div className="h-48 md:h-56">
                <img
                  src={MEDIA.NEWS.MANUAL_PIN_GAUGING}
                  alt={t("news.articles.5.title", "Fermi Vision Replaces Manual Pin Gauging with CAD-Driven Optical Inspection")}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                  {t("news.articles.5.title", "Fermi Vision Replaces Manual Pin Gauging with CAD-Driven Optical Inspection")}
                </h3>
                <p className="text-sm text-gray-600 mb-3 md:mb-4">
                  {t("news.articles.5.excerpt", "Thousands of press-fit holes measured in seconds with a physically simulated contact algorithm (PGA)")}
                </p>
                <p className="text-xs text-gray-500 mb-3 md:mb-4">{t("news.articles.5.date", "February 1, 2025")}</p>
                <div className="mt-auto">
                  <Link to="/news/fermi-vision-replaces-manual-pin-gauging-cad-driven-optical-inspection">
                    <Button
                      variant="outline"
                      className="text-primary border-primary hover:bg-accent-50 text-sm"
                    >
                      {t("news.readMore", "Read More")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Search functionality is now handled in the Header component */}
      {/* Footer */}
      <Footer
        companyName="Fermi Vision"
        companyAddress="Shenzhen, China"
        companyPhone="+86 189 2346 0852"
        companyEmail="sales@fermivision.com"
        socialLinks={{
          linkedin: "https://www.linkedin.com/company/fermi-vision/",
          // WeChat doesn't have a direct URL, but we'll include it for the icon
          // The actual WeChat QR code would be shown on click in a real implementation
        }}
      />
    </div>
  );
};

export default Home;
