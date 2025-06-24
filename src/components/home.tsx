import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Home = () => {
  const { t, ready } = useTranslation();

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
        logo="/logo.svg"
        navLinks={[
          { label: t("nav.products", "Products"), href: "/products" },
          { label: t("nav.industries", "Industries"), href: "/industries" },
          { label: t("nav.downloads", "Downloads"), href: "/downloads" },
          { label: t("nav.about", "About"), href: "/about" },
          { label: t("nav.contact", "Contact"), href: "/contact" },
        ]}
      />
      {/* Hero Section with Video Background */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Video background - fallback to image if video doesn't load */}
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80"
          >
            <source src="/videos/home-hero-video.mp4" type="video/mp4" />
            <img
              src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80"
              alt="Technology background"
              className="w-full h-full object-cover"
            />
          </video>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t("hero.title", "Pioneering the Future of Metrology Technology")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            {t(
              "hero.subtitle",
              "Industry-leading solutions with proprietary algorithms and advanced data processing",
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-700 text-white rounded-full w-[145] h-[45px] text-[18px]"
            >
              {t("hero.cta.learnMore", "Learn More")}
            </Button>
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
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            <img
              src="/images/home-partners-1-apple.jpg"
              alt="Apple"
              className="h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="/images/home-partners-2-foxconn.jpg"
              alt="Foxconn"
              className="h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
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
          <div className="relative overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{ transform: "translateX(0px)" }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0px)";
                // Reset all items opacity
                const items =
                  e.currentTarget.querySelectorAll(".industry-item");
                items.forEach((item) => {
                  item.style.opacity = "1";
                });
              }}
            >
              {[1, 2, 3, 4].map((item, index) => (
                <Link
                  key={`industry-${item}`}
                  to="/industries"
                  className="industry-item group flex-shrink-0 w-80 transition-all duration-1000 hover:scale-[1.3] hover:z-10 relative"
                  onMouseEnter={(e) => {
                    const container = e.currentTarget.parentElement;
                    const items = container.querySelectorAll(".industry-item");
                    const itemWidth = 330 + 32; // w-80 + gap-8 (increased from w-64)
                    const containerWidth = container.offsetWidth;
                    const centerOffset = containerWidth / 2 - itemWidth / 2;
                    const itemOffset = index * itemWidth;
                    const translateX = centerOffset - itemOffset;

                    // Smooth transition with debouncing
                    clearTimeout(container.transitionTimeout);
                    container.transitionTimeout = setTimeout(() => {
                      container.style.transform = `translateX(${translateX}px)`;
                    }, 150);

                    // Apply fade effect based on distance from hovered item
                    items.forEach((otherItem, otherIndex) => {
                      const distance = Math.abs(index - otherIndex);
                      let opacity = 1;

                      if (distance === 1) {
                        opacity = 0.6;
                      } else if (distance === 2) {
                        opacity = 0.3;
                      } else if (distance >= 3) {
                        opacity = 0.1;
                      }

                      otherItem.style.opacity = opacity.toString();
                    });
                  }}
                >
                  <div className="transition-all duration-1000">
                    <div className="overflow-visible rounded-lg shadow-md">
                      <img
                        src={`/images/home-industries-${item}.jpg`}
                        alt={t(
                          `industries.item${item}.alt`,
                          `Industry ${item}`,
                        )}
                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mt-5 mb-3 text-center transition-all duration-300 group-hover:text-2xl group-hover:text-primary">
                      {t(
                        `industries.item${item}.title`,
                        `Industry Category ${item}`,
                      )}
                    </h3>
                    <p className="text-gray-600 text-center text-base transition-all duration-300 group-hover:text-lg group-hover:invisible">
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
              ))}
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["U", "A", "F", "B"].map((series, index) => (
              <Link
                key={`product-${series}`}
                to={`/products?category=${series.toLowerCase()}_series`}
                className="group transition-all duration-300 hover:opacity-90"
              >
                <div className="overflow-hidden rounded-lg shadow-md bg-white relative">
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-bold py-1 px-3 rounded-full">
                    {series}
                  </div>
                  <img
                    src={`/images/home-products-${index + 1}.jpg`}
                    alt={t(
                      `products.featured.item${index + 1}.alt`,
                      `Vision Series ${series}`,
                    )}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-2 text-center">
                  {t(
                    `products.featured.item${index + 1}.title`,
                    `Vision Series ${series}`,
                  )}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(
                    `products.featured.item${index + 1}.description`,
                    `Advanced vision technology for precision applications`,
                  )}
                </p>
              </Link>
            ))}
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
                      src={`/images/home-news-${item}.jpg`}
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
