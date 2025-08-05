import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Breadcrumbs from "./layout/Breadcrumbs";
import { ArrowLeft } from "lucide-react";

const IndustryNewEnergy = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <Header
        logo="/images/FV_logo.png"
        navLinks={[
          { label: t("nav.products", "Products"), href: "/products" },
          { label: t("nav.industries", "Industries"), href: "/industries" },
          { label: t("nav.news", "News"), href: "/news" },
          { label: t("nav.about", "About"), href: "/about" },
          { label: t("nav.contact", "Contact"), href: "/contact" },
        ]}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: t("nav.industries", "Industries"), href: "/industries" },
          { label: t("industries.item4.title", "New Energy Automotives") },
        ]}
      />

      {/* Page Content */}
      <main className="flex-grow pt-[140px] pb-16">
        {/* Industry Header */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Industry Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {t("newEnergy.title", "New Energy Automotive")}
              </h1>

              {/* Industry Overview */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t(
                  "newEnergy.subtitle",
                  "Precision measurement solutions for electric and hybrid vehicle manufacturing and battery assembly.",
                )}
              </p>

              {/* Featured Image */}
              <div className="mb-12">
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80"
                  alt="New Energy Automotive"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industry Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-gray-700 leading-relaxed space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t(
                    "newEnergy.overviewTitle",
                    "Driving Precision in Electrification",
                  )}
                </h2>
                <p className="text-lg">
                  {t(
                    "newEnergy.overview1",
                    "The rise of electric and hybrid vehicles has introduced new manufacturing demands centered on ultra-tight tolerances, high-volume battery assembly, and precision motor components. As performance, range, and safety hinge on component accuracy, metrology has become a critical enabler across EV powertrain and structural production lines.",
                  )}
                </p>

                <p className="text-lg">
                  {t(
                    "newEnergy.overview2",
                    "Unlike traditional combustion vehicles, new energy platforms rely on dense, thermally sensitive assemblies—like pouch cells, busbars, stators, and rotor housings—where even sub-millimeter deviations can lead to efficiency losses or safety risks. In this fast-evolving field, inspection systems must keep pace with high-throughput environments, rapid design iterations, and vertically integrated supply chains.",
                  )}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
                  {t(
                    "newEnergy.challengesTitle",
                    "Challenges in EV and Hybrid Component Metrology",
                  )}
                </h2>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {t(
                        "newEnergy.challenge1Title",
                        "Battery Cell Uniformity",
                      )}
                    </h3>
                    <p className="text-lg">
                      {t(
                        "newEnergy.challenge1Desc",
                        "Tight control over electrode alignment, terminal positioning, and cell flatness is essential for thermal safety and energy efficiency.",
                      )}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {t(
                        "newEnergy.challenge2Title",
                        "Motor and Gear Component Precision",
                      )}
                    </h3>
                    <p className="text-lg">
                      {t(
                        "newEnergy.challenge2Desc",
                        "Stator slot width, rotor concentricity, and shaft alignment require micrometer-scale measurement at production speed.",
                      )}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {t(
                        "newEnergy.challenge3Title",
                        "Busbar and Connector Validation",
                      )}
                    </h3>
                    <p className="text-lg">
                      {t(
                        "newEnergy.challenge3Desc",
                        "These conductive elements must meet electrical clearance and mechanical fit standards, often with minimal margin for error.",
                      )}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {t(
                        "newEnergy.challenge4Title",
                        "Reflective & Mixed Materials",
                      )}
                    </h3>
                    <p className="text-lg">
                      {t(
                        "newEnergy.challenge4Desc",
                        "Copper, aluminum, ceramics, and polymer coatings present optical challenges for traditional inspection systems.",
                      )}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {t(
                        "newEnergy.challenge5Title",
                        "Fast-Cycle Inspection",
                      )}
                    </h3>
                    <p className="text-lg">
                      {t(
                        "newEnergy.challenge5Desc",
                        "Assembly lines for battery modules and drive units demand full-surface, in-line measurements without slowing production.",
                      )}
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
                  {t(
                    "newEnergy.industryLagsTitle",
                    "Where Conventional Metrology Falls Short",
                  )}
                </h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <p className="text-lg">
                    {t(
                      "newEnergy.industryLagsDesc",
                      "Most legacy systems are optimized for slower, rigid geometries and often lack the flexibility or speed needed for EV component inspection. Manual measurement workflows can't scale with gigafactory-level output, while traditional vision systems may fail to resolve fine details on reflective or layered surfaces.",
                    )}
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
                  {t(
                    "newEnergy.fermiApproachTitle",
                    "Fermi Vision's Advantage",
                  )}
                </h2>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <p className="text-lg font-medium">
                    {t(
                      "newEnergy.fermiApproach1",
                      "Fermi Vision offers high-speed, non-contact metrology systems equipped with adaptive optics, programmable illumination, and CAD-integrated workflows—ideal for the inspection of high-mix EV components.",
                    )}
                  </p>
                  <p className="text-lg mt-4">
                    {t(
                      "newEnergy.fermiApproach2",
                      "Our platforms support precision inspection of battery tabs, busbars, stator profiles, and more—delivering sub-second measurement cycles without compromising on accuracy. Whether in pilot lines or full-scale production, Fermi Vision empowers EV manufacturers to scale innovation with confidence and control.",
                    )}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/industries">
                    <Button variant="outline" className="w-full sm:w-auto">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      {t("common.backToIndustries", "Back to Industries")}
                    </Button>
                  </Link>

                  <Link to="/contact">
                    <Button className="w-full sm:w-auto bg-primary hover:bg-primary-700">
                      {t("common.contactUs", "Contact Us")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
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

export default IndustryNewEnergy;
