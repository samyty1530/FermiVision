import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Breadcrumbs from "./layout/Breadcrumbs";
import { ArrowLeft } from "lucide-react";

const IndustryPCB = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <Header
        logo="/images/FV_logo_250625.png"
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
          { label: t("industries.item1.title", "PCB Manufacturing") },
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
                  "industries.pcb.title",
                  "PCB Manufacturing: The State of Optical Metrology",
                )}
              </h1>

              {/* Industry Overview */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t(
                  "industries.pcb.subtitle",
                  "Advanced metrology solutions for modern printed circuit board manufacturing processes.",
                )}
              </p>

              {/* Featured Image */}
              <div className="mb-12">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                  alt="PCB Manufacturing"
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
              <div className="text-gray-700 leading-relaxed space-y-8">
                <div>
                  <p className="text-lg mb-6">
                    {t(
                      "industries.pcb.overview1",
                      "In modern electronics manufacturing, printed circuit boards (PCBs) have evolved into complex, multilayered platforms supporting high-density interconnects, microvias, and ultra-fine trace geometries. Ensuring dimensional integrity at this scale is critical—not only for electrical performance but also for downstream assembly, thermal reliability, and regulatory compliance.",
                    )}
                  </p>

                  <p className="text-lg">
                    {t(
                      "industries.pcb.overview2",
                      "While optical metrology has become the industry's preferred approach for non-contact inspection, it still faces key limitations in high-mix production environments:",
                    )}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {t(
                      "industries.pcb.challengesTitle",
                      "Common Challenges in PCB Optical Inspection",
                    )}
                  </h2>

                  <div className="space-y-5">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t(
                          "industries.pcb.challenge1Title",
                          "Manual Programming Bottlenecks:",
                        )}
                      </h3>
                      <p className="text-lg">
                        {t(
                          "industries.pcb.challenge1Desc",
                          "Most systems still rely on time-consuming, manual feature selection and alignment workflows, which scale poorly with diverse board types.",
                        )}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t(
                          "industries.pcb.challenge2Title",
                          "Limited CAD Integration:",
                        )}
                      </h3>
                      <p className="text-lg">
                        {t(
                          "industries.pcb.challenge2Desc",
                          "Inspection systems often operate in isolation from upstream design tools, forcing duplication of effort and increasing the risk of oversight.",
                        )}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t(
                          "industries.pcb.challenge3Title",
                          "Rigid Standards Support:",
                        )}
                      </h3>
                      <p className="text-lg">
                        {t(
                          "industries.pcb.challenge3Desc",
                          "Some equipment lacks flexibility to support different international dimensional standards or composite fitting benchmarks.",
                        )}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t(
                          "industries.pcb.challenge4Title",
                          "Measurement Throughput:",
                        )}
                      </h3>
                      <p className="text-lg">
                        {t(
                          "industries.pcb.challenge4Desc",
                          "High-resolution imaging over large boards with thousands of features can lead to long cycle times—especially when multiple machines are required.",
                        )}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t(
                          "industries.pcb.challenge5Title",
                          "Complex Feature Interpretation:",
                        )}
                      </h3>
                      <p className="text-lg">
                        {t(
                          "industries.pcb.challenge5Desc",
                          "Features like curved traces, irregular pads, or gold-powdered terminals present challenges for traditional edge-detection and measurement algorithms.",
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {t(
                      "industries.pcb.industryLagsTitle",
                      "Where the Industry Lags",
                    )}
                  </h2>
                  <p className="text-lg">
                    {t(
                      "industries.pcb.industryLagsDesc",
                      "Despite advances in imaging hardware, many PCB inspection tools are constrained by legacy software architectures that limit their adaptability, automation potential, and integration into modern production workflows. As a result, inspection becomes a rate-limiting step—slowing new product introductions (NPI), increasing operational overhead, and introducing quality risks.",
                    )}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {t(
                      "industries.pcb.fermiApproachTitle",
                      "Fermi Vision's Approach",
                    )}
                  </h2>
                  <p className="text-lg">
                    {t(
                      "industries.pcb.fermiApproachDesc",
                      "Fermi Vision addresses these gaps by rethinking the relationship between hardware precision and software intelligence. With support for CAD-driven auto-programming, dynamic multi-standard tolerancing, and hybrid scan workflows (e.g., pre-scan + fly-capture), we help manufacturers unlock new levels of inspection speed, accuracy, and flexibility—without scaling floor space or increasing headcount.",
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

export default IndustryPCB;
