import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const Industries = () => {
  const { t } = useTranslation();

  // Industry data
  const industries = [
    {
      id: 1,
      name: t("industries.item1.title", "PCB Manufacturing"),
      description: t(
        "industries.item1.description",
        "In modern electronics manufacturing, printed circuit boards (PCBs) have evolved into complex, multilayered platforms supporting high-density interconnects, microvias, and ultra-fine trace geometries. Ensuring dimensional integrity at this scale is critical—not only for electrical performance but also for downstream assembly, thermal reliability, and regulatory compliance.\n\nWhile optical metrology has become the industry's preferred approach for non-contact inspection, it still faces key limitations in high-mix production environments.",
      ),
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    },
    {
      id: 2,
      name: t("industries.item2.title", "ARVR and Personal Devices"),
      description: t(
        "industries.item2.description",
        "As augmented reality (AR), virtual reality (VR), and compact consumer electronics evolve, the demand for ultra-precise components has surged. From curved optical lenses and microdisplays to LiDAR assemblies and wearable sensors, dimensional accuracy directly impacts performance metrics such as latency, field of view, image clarity, and mechanical reliability.\n\nIn these high-precision form factors, even micron-level deviations can degrade optical alignment or compromise enclosure integrity. Metrology plays a crucial role in verifying that every component—from aspheric lenses to housing grooves—meets design intent.",
      ),
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    },
    {
      id: 3,
      name: t("industries.item3.title", "Aerospace"),
      description: t(
        "industries.item3.description",
        "In aerospace manufacturing, tolerances aren't just specifications—they're safety-critical. From turbine blades and fuselage panels to guidance components and composite structures, dimensional accuracy ensures aerodynamic performance, structural reliability, and mission success.\n\nOptical metrology plays a pivotal role in verifying parts with complex geometries, reflective surfaces, or thermal sensitivity—where contact-based measurement is often impractical. As aircraft and spacecraft incorporate more lightweight materials and complex assemblies, manufacturers are under growing pressure to inspect faster, with tighter accuracy, and across increasingly varied production environments.",
      ),
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    },
    {
      id: 4,
      name: t("industries.item4.title", "New Energy Automotives"),
      description: t(
        "industries.item4.description",
        "The rise of electric and hybrid vehicles has introduced new manufacturing demands centered on ultra-tight tolerances, high-volume battery assembly, and precision motor components. As performance, range, and safety hinge on component accuracy, metrology has become a critical enabler across EV powertrain and structural production lines.\n\nUnlike traditional combustion vehicles, new energy platforms rely on dense, thermally sensitive assemblies—like pouch cells, busbars, stators, and rotor housings—where even sub-millimeter deviations can lead to efficiency losses or safety risks. In this fast-evolving field, inspection systems must keep pace with high-throughput environments, rapid design iterations, and vertically integrated supply chains.",
      ),
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    },
  ];

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
              {t("industries.title", "Industries We Serve")}
            </h1>
            <p className="text-xl text-gray-100 text-center max-w-3xl mx-auto">
              {t(
                "industries.overview",
                "Fermi Vision provides cutting-edge computer vision solutions across multiple industries.",
              )}
            </p>
          </div>
        </section>

        {/* Industries List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 mb-20 last:mb-0 items-center`}
              >
                {/* Image */}
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg h-full">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover min-h-[600px]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">{industry.name}</h2>
                  <div className="text-lg text-gray-600 mb-6">
                    {industry.description
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p key={index} className={index > 0 ? "mt-4" : ""}>
                          {paragraph}
                        </p>
                      ))}
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-4">
                    <Button
                      className="bg-primary hover:bg-primary-700 text-white px-8 py-3 min-w-[160px]"
                      onClick={() => {
                        // Navigate to industry-specific pages
                        if (industry.id === 1) {
                          window.location.href =
                            "/industries/pcb-manufacturing";
                        } else if (industry.id === 2) {
                          window.location.href =
                            "/industries/arvr-personal-devices";
                        } else if (industry.id === 3) {
                          window.location.href = "/industries/aerospace";
                        } else if (industry.id === 4) {
                          window.location.href =
                            "/industries/new-energy-automotives";
                        } else {
                          // Placeholder for other industries
                          console.log(
                            `Navigate to ${industry.name} case study`,
                          );
                        }
                      }}
                    >
                      {t("common.learnMore", "Learn More")}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
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

export default Industries;
