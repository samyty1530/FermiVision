import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const About = () => {
  const { t } = useTranslation();

  // Product series data
  const productSeries = [
    {
      id: "b-series",
      name: t("about.products.bSeries.name", "B Series"),
      description: t(
        "about.products.bSeries.description",
        "Massive micro-size targets measurement devices",
      ),
    },
    {
      id: "f-series",
      name: t("about.products.fSeries.name", "F Series"),
      description: t(
        "about.products.fSeries.description",
        "Strobe fly-through measurement instruments",
      ),
    },
    {
      id: "a-series",
      name: t("about.products.aSeries.name", "A Series"),
      description: t(
        "about.products.aSeries.description",
        "High-efficiency full-image scanning and stitching measurement instruments",
      ),
    },
    {
      id: "u-series",
      name: t("about.products.uSeries.name", "U Series"),
      description: t(
        "about.products.uSeries.description",
        "2.5D general-purpose machine vision inspection instruments",
      ),
    },
    {
      id: "accessories",
      name: t("about.products.accessories.name", "Metrology Accessories"),
      description: t(
        "about.products.accessories.description",
        "Metrology accessories and components",
      ),
    },
  ];

  // Applications data
  const applications = [
    t("about.applications.item1", "Silicon-based carrier boards"),
    t("about.applications.item2", "Micro-holes"),
    t("about.applications.item3", "Line widths and spacings"),
    t("about.applications.item4", "Mini LEDs"),
    t("about.applications.item5", "IC carrier boards"),
    t("about.applications.item6", "Photovoltaics"),
    t("about.applications.item7", "New energy industry components"),
  ];

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

      {/* Page Content */}
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section with Gradient Background */}
        <section className="bg-gradient-to-r from-[#098fc8] via-[#0772a0] to-[#00365c] py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">
              {t("about.title", "About Fermi Vision")}
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              {t(
                "about.subtitle",
                "Leading the future of machine vision measurement technology.",
              )}
            </p>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">
                {t("about.overview.title", "Company Overview")}
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {t(
                    "about.overview.content",
                    "Shenzhen Fermi Vision Co., Ltd. is a high-tech enterprise specializing in the development of proprietary machine vision measurement systems, holding full intellectual property rights (IPRs) over key innovations. Committed to designing industry-leading solutions, our product suite delivers metrology-grade accuracy, real-time processing speed, and customized industrial solutions to meet the specific needs of our clients.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Portfolio Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              {t("about.products.title", "Product Portfolio")}
            </h2>
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-12">
                {t(
                  "about.products.description",
                  "The product portfolio includes a diverse array of cutting-edge instruments, combining metrology-grade accuracy and real-time reading speeds:",
                )}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productSeries.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              {t("about.applications.title", "Main Product Applications")}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {t(
                    "about.applications.description",
                    "Our instruments allow for comprehensive inspection and measurement of high-density and high-precision products, including:",
                  )}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {applications.map((application, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-700">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Excellence Section */}
        <section className="py-16 bg-gradient-to-r from-gray-50 via-accent-50 to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-primary">
                {t("about.excellence.title", "Industry Excellence")}
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t(
                    "about.excellence.content",
                    "Each series of inspection instruments has been meticulously designed to achieve superior levels of precision and speed. This positions the company's offerings at the forefront of the industry, enabling them to effectively compete with imported instruments.",
                  )}
                </p>
              </div>
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

export default About;
