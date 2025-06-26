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
        "Specialized vision solutions for PCB manufacturing",
        "Metrology guarantees the integrity of microscopic traces and vias, essential for reliable signal transmission. By monitoring critical dimensions and detecting defects, metrology supports the mass production of highly intricate boards used in everything from consumer electronics to advanced industrial systems.",
      ),
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      challenges: [
        "Quality control and defect detection",
        "Process optimization",
        "Automated inspection",
        "Worker safety monitoring",
      ],
      solutions: [
        "High-speed inspection systems",
        "Defect classification AI",
        "Production line monitoring",
        "Predictive maintenance",
      ],
    },
    {
      id: 2,
      name: t("industries.item2.title", "ARVR and Personal Devices"),
      description: t(
        "industries.item2.description",
        "Solutions for a wide range of personal electronics",
        "In augmented reality (AR) and virtual reality (VR) technologies, metrology ensures the accuracy of components like lenses, sensors, and microdisplays. Precise measurements enable seamless integration, reducing latency and improving user experience. For personal devices, metrology aids in miniaturization, ensuring tight tolerances for compact and efficient designs.",
      ),
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
      challenges: [
        "Diagnostic accuracy",
        "Patient monitoring",
        "Surgical assistance",
        "Medical imaging analysis",
      ],
      solutions: [
        "AI-powered diagnostic tools",
        "Real-time patient monitoring",
        "Surgical navigation systems",
        "Medical image enhancement",
      ],
    },
    {
      id: 3,
      name: t("industries.item3.title", "Aerospace"),
      description: t(
        "industries.item3.description",
        "Elevating safety and performance with advanced metrology solutions",
        "Accuracy is indispensable for achieving extreme precision in manufacturing aircraft and spacecraft components. It ensures tight tolerances for aerodynamic surfaces, engine parts, and structural elements. Advanced metrology tools verify alignment and assembly, enhancing safety and performance. By enabling innovations in lightweight materials and propulsion systems, metrology drives progress in one of the most demanding engineering fields.",
      ),
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
      challenges: [
        "Perimeter security",
        "Threat detection",
        "Access control",
        "Surveillance in challenging environments",
      ],
      solutions: [
        "Intelligent surveillance systems",
        "Facial recognition technology",
        "Behavior analysis",
        "Low-light vision systems",
      ],
    },
    {
      id: 4,
      name: t("industries.item4.title", "New Energy Automotives"),
      description: t(
        "industries.item4.description",
        "Driving electric innovation with precision optical measurement",
        "The transition to electric and hybrid vehicles depends heavily on precise battery cell manufacturing and electric motor components. Metrology ensures uniformity in battery cell assembly, critical for performance and safety. It also supports aerodynamic optimization and efficient drivetrain production through accurate measurements.",
      ),
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
      challenges: [
        "Object detection and tracking",
        "Lane detection",
        "Environmental perception",
        "All-weather operation",
      ],
      solutions: [
        "Advanced driver assistance systems",
        "360° perception systems",
        "LiDAR integration",
        "Night vision capabilities",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <Header
        logo="/images/temp_FV_logo.png"
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
                  <p className="text-lg text-gray-600 mb-6">
                    {industry.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Challenges */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        Challenges
                      </h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        Our Solutions
                      </h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
        companyPhone="+86 158 8956 4803"
        companyEmail="sales@fermivision.com"
        socialLinks={{
          linkedin: "https://linkedin.com",
        }}
      />
    </div>
  );
};

export default Industries;
