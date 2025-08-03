import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ArrowLeft, Check, Play, Image } from "lucide-react";
import Breadcrumbs from "./layout/Breadcrumbs";

interface ProductData {
  series: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const ProductDetail = () => {
  const { series } = useParams<{ series: string }>();
  const { t, i18n } = useTranslation();
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const language = i18n.language.startsWith("zh") ? "zh" : "en";
        const response = await fetch(`/data/products-${language}.json`);

        if (!response.ok) {
          throw new Error(`Failed to fetch product data: ${response.status}`);
        }

        const data: ProductData[] = await response.json();
        const productData = data.find((item) => item.series === series);

        if (productData) {
          setProduct(productData);
          setError(null);
        } else {
          setError("Product not found");
          setProduct(null);
        }
      } catch (err) {
        console.error("Error fetching product data:", err);
        setError("Failed to load product data");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [series, i18n.language]);

  // Fallback image if the specified image doesn't exist
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src =
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80";
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
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
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="text-xl">{t("common.loading", "Loading...")}</div>
        </main>
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
  }

  if (error || !product) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
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
        <Breadcrumbs
          items={[
            { label: t("nav.products", "Products"), href: "/products" },
            { label: "Product Not Found" },
          ]}
        />

        <main className="flex-grow pt-[140px] pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <h1 className="text-3xl font-bold mb-4 text-gray-900">
                {t("products.notFound", "Product Not Found")}
              </h1>
              <p className="text-gray-600 mb-8">
                {error ||
                  t(
                    "products.notFoundMessage",
                    "The requested product could not be found.",
                  )}
              </p>
              <Link to="/products">
                <Button className="bg-primary hover:bg-primary-700 text-white">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t("products.backToProducts", "Back to Products")}
                </Button>
              </Link>
            </div>
          </div>
        </main>
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
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
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

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: t("nav.products", "Products"), href: "/products" },
          { label: product?.title || "Product" },
        ]}
      />

      <main className="flex-grow pt-[140px] pb-16">
        {/* Product Header */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product Media */}
              <div className="space-y-4">
                {/* Main Media Window */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                  {showVideo ? (
                    <div className="relative bg-gray-900 aspect-video flex items-center justify-center">
                      <div className="text-center text-white">
                        <Play className="h-16 w-16 mx-auto mb-4 opacity-70" />
                        <p className="text-lg">
                          {t("products.videoPlaceholder", "Product Video")}
                        </p>
                        <p className="text-sm opacity-70 mt-2">
                          {t("products.videoComingSoon", "Video coming soon")}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto object-cover"
                      onError={handleImageError}
                    />
                  )}
                </div>

                {/* Media Thumbnails */}
                <div className="flex gap-3">
                  {/* Image Thumbnail */}
                  <button
                    onClick={() => setShowVideo(false)}
                    className={`rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      !showVideo
                        ? "border-primary opacity-100"
                        : "border-gray-300 opacity-60 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={`${product.title} thumbnail`}
                      className="w-20 h-16 object-cover"
                      onError={handleImageError}
                    />
                  </button>

                  {/* Video Thumbnail */}
                  <button
                    onClick={() => setShowVideo(true)}
                    className={`rounded-lg overflow-hidden border-2 transition-all duration-200 relative ${
                      showVideo
                        ? "border-primary opacity-100"
                        : "border-gray-300 opacity-60 hover:opacity-80"
                    }`}
                  >
                    <div className="w-20 h-16 bg-gray-900 flex items-center justify-center">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-4xl font-bold mb-6 text-gray-900">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {t("products.keyFeatures", "Applications & Key Features")}
                  </h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10">
                  <Link to="/customer-request">
                    <Button className="bg-primary hover:bg-primary-700 text-white px-8 py-6 text-lg">
                      {t(
                        "products.downloadCatalog",
                        "Download Product Catalog",
                      )}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              {t(
                "products.technicalSpecifications",
                "Technical Specifications",
              )}
            </h2>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
              <p className="text-center text-gray-600 mb-8">
                {t(
                  "products.specificationMessage",
                  "For detailed technical specifications and customization options, please contact our sales team.",
                )}
              </p>
              <div className="flex justify-center">
                <Link to="/customer-request">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary-50"
                  >
                    {t(
                      "products.requestSpecs",
                      "Request Detailed Specifications",
                    )}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Our Technical Solution Process Section */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
                {t(
                  "products.technicalProcess.title",
                  "Our Technical Solution Process",
                )}
              </h3>
              <p className="text-center text-primary font-bold mb-8 text-base">
                {t(
                  "products.technicalProcess.subtitle",
                  "We value your time and offer a streamlined, expert-driven process to ensure you receive the optimal solution for your inspection needs.",
                )}
              </p>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  {t(
                    "products.technicalProcess.stepsTitle",
                    "Here's how our standard support process works:",
                  )}
                </h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h5 className="font-bold text-gray-900">
                      {t(
                        "products.technicalProcess.step1Title",
                        "1. Submit Your Requirements",
                      )}
                    </h5>
                    <p className="text-gray-700">
                      {t(
                        "products.technicalProcess.step1",
                        "Let us know what you're looking to inspect — including product type, dimensions, required accuracy, and any specific conditions or constraints.",
                      )}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-gray-900">
                      {t(
                        "products.technicalProcess.step2Title",
                        "2. Initial Consultation",
                      )}
                    </h5>
                    <p className="text-gray-700">
                      {t(
                        "products.technicalProcess.step2",
                        "A technical representative will contact you to schedule a quick video meeting or call to better understand your application.",
                      )}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-gray-900">
                      {t(
                        "products.technicalProcess.step3Title",
                        "3. Sample Testing",
                      )}
                    </h5>
                    <p className="text-gray-700">
                      {t(
                        "products.technicalProcess.step3",
                        "If one of our systems looks like a good fit, we'll ask you to send a sample part for evaluation.",
                      )}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-gray-900">
                      {t(
                        "products.technicalProcess.step4Title",
                        "4. Performance Verification",
                      )}
                    </h5>
                    <p className="text-gray-700">
                      {t(
                        "products.technicalProcess.step4",
                        "We'll conduct testing and provide a detailed report demonstrating the system's capabilities on your sample.",
                      )}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-gray-900">
                      {t(
                        "products.technicalProcess.step5Title",
                        "5. Quotation & Purchase",
                      )}
                    </h5>
                    <p className="text-gray-700">
                      {t(
                        "products.technicalProcess.step5",
                        "Once performance is confirmed, our sales team will assist with finalizing a purchase order.",
                      )}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-gray-900">
                      {t(
                        "products.technicalProcess.step6Title",
                        "6. Optional Customization",
                      )}
                    </h5>
                    <p className="text-gray-700">
                      {t(
                        "products.technicalProcess.step6",
                        "We offer tailored upgrades — such as specialized optics, lighting systems, or software features — based on your unique requirements.",
                      )}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-gray-900">
                      {t(
                        "products.technicalProcess.step7Title",
                        "7. Ongoing Technical Support",
                      )}
                    </h5>
                    <p className="text-gray-700">
                      {t(
                        "products.technicalProcess.step7",
                        "Our team provides installation guidance, user training, and continued technical support throughout the warranty period.",
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link to="/customer-request">
                  <Button className="bg-primary hover:bg-primary-700 text-white px-8 py-3">
                    {t(
                      "products.technicalProcess.startProcess",
                      "Start Your Technical Evaluation",
                    )}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              {t("products.relatedProducts", "Related Products")}
            </h2>
            <div className="text-center">
              <Link to="/products">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary-50"
                >
                  {t("products.viewAllProducts", "View All Products")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

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

export default ProductDetail;
