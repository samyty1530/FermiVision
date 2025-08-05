import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Breadcrumbs from "./layout/Breadcrumbs";
import { ArrowLeft } from "lucide-react";

const IndustryARVR = () => {
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
          { label: t("industries.item2.title", "AR/VR & Personal Devices") },
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
                {t(
                  "arvr.title",
                  "AR/VR & Personal Devices: Precision in the Age of Miniaturization",
                )}
              </h1>

              {/* Industry Overview */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t(
                  "arvr.subtitle",
                  "As augmented reality (AR), virtual reality (VR), and compact consumer electronics evolve, the demand for ultra-precise components has surged.",
                )}
              </p>

              {/* Featured Image */}
              <div className="mb-12">
                <img
                  src="/images/home_industries-2.jpg"
                  alt="AR/VR and Personal Devices"
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
                                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {t("arvr.overviewTitle", "Industry Overview")}
                  </h2>
                <p className="text-lg">
                                      {t(
                      "arvr.overview1",
                      "From curved optical lenses and microdisplays to LiDAR assemblies and wearable sensors, dimensional accuracy directly impacts performance metrics such as latency, field of view, image clarity, and mechanical reliability.",
                    )}
                </p>

                <p className="text-lg">
                                      {t(
                      "arvr.overview2",
                      "In these high-precision form factors, even micron-level deviations can degrade optical alignment or compromise enclosure integrity. Metrology plays a crucial role in verifying that every component—from aspheric lenses to housing grooves—meets design intent.",
                    )}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                                      {t(
                      "arvr.challengesTitle",
                      "Common Challenges in AR/VR & Personal Device Metrology",
                    )}
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                              {t(
                          "arvr.challenge1Title",
                          "Tight Tolerances Across Multi-Material Assemblies",
                        )}
                      </h3>
                      <p className="text-lg">
                        {t(
                          "arvr.challenge1Desc",
                          "Devices often integrate glass, plastic, and metal—each with different manufacturing behaviors, requiring adaptive inspection strategies.",
                        )}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                              {t(
                          "arvr.challenge2Title",
                          "Complex Freeform Surfaces",
                        )}
                      </h3>
                      <p className="text-lg">
                        {t(
                          "arvr.challenge2Desc",
                          "Optical elements such as curved lenses and waveguides introduce 2.5D and 3D geometry that traditional edge-based systems struggle to measure accurately.",
                        )}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t(
                          "arvr.challenge3Title",
                          "Miniaturization with No Room for Error",
                        )}
                      </h3>
                      <p className="text-lg">
                        {t(
                          "arvr.challenge3Desc",
                          "As components shrink, manual inspection becomes impractical and automation must scale without sacrificing accuracy.",
                        )}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t(
                          "arvr.challenge4Title",
                          "Low Volume, High Mix Production",
                        )}
                      </h3>
                      <p className="text-lg">
                        {t(
                          "arvr.challenge4Desc",
                          "Especially in AR/VR prototyping or early product runs, inspection systems must accommodate frequent design iterations.",
                        )}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t(
                          "arvr.challenge5Title",
                          "Visual Artifacts & Cosmetic QA",
                        )}
                      </h3>
                      <p className="text-lg">
                        {t(
                          "arvr.challenge5Desc",
                          "Consumer-facing parts demand surface uniformity and consistency, requiring not just dimensional inspection but advanced imaging techniques.",
                        )}
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                                      {t(
                      "arvr.industryLagsTitle",
                      "Where the Industry Lags",
                    )}
                  </h2>
                  <p className="text-lg">
                    {t(
                      "arvr.industryLagsDesc",
                      "Despite high commercial stakes, many metrology platforms in this space are optimized for flat or large-scale parts. They lack the versatility to handle mixed geometries, or the resolution-to-field-of-view balance needed for miniature components. Programming for new parts is often slow and manual, hampering agility for fast-paced R&D teams or design houses.",
                    )}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                                      {t(
                      "arvr.fermiApproachTitle",
                      "Fermi Vision's Approach",
                    )}
                  </h2>
                  <p className="text-lg">
                    {t(
                      "arvr.fermiApproachDesc",
                    "Fermi Vision addresses these constraints by combining high-magnification optics with flexible imaging workflows—including dual-lens configurations and programmable lighting. Our platform supports freeform and 2.5D measurement, rapid CAD-based programming, and hybrid scan modes that maintain speed without losing precision. Whether you're validating lens profiles for an AR headset or ensuring the fit of a smartwatch button enclosure, we deliver high-throughput precision at micrometer scale.",
                  )}
                </p>
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

export default IndustryARVR;
