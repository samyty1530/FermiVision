import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ArrowLeft } from "lucide-react";

const IndustryAerospace = () => {
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

      {/* Page Content */}
      <main className="flex-grow pt-24 pb-16">
        {/* Back Navigation */}
        <section className="py-8 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("common.backToIndustries", "Back to Industries")}
            </Link>
          </div>
        </section>

        {/* Industry Header */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Industry Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Aerospace: Precision Under Extreme Demands
              </h1>

              {/* Industry Overview */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                In aerospace manufacturing, tolerances aren't just
                specifications—they're safety-critical. From turbine blades and
                fuselage panels to guidance components and composite structures,
                dimensional accuracy ensures aerodynamic performance, structural
                reliability, and mission success.
              </p>

              {/* Featured Image */}
              <div className="mb-12">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
                  alt="Aerospace"
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
                <p className="text-lg">
                  Optical metrology plays a pivotal role in verifying parts with
                  complex geometries, reflective surfaces, or thermal
                  sensitivity—where contact-based measurement is often
                  impractical. As aircraft and spacecraft incorporate more
                  lightweight materials and complex assemblies, manufacturers
                  are under growing pressure to inspect faster, with tighter
                  accuracy, and across increasingly varied production
                  environments.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Core Challenges in Aerospace Metrology
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Complex 3D Geometries:
                    </h3>
                    <p className="text-lg">
                      Many aerospace parts feature freeform surfaces or tight
                      internal cavities that traditional CMMs or edge-detection
                      tools cannot easily inspect.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Large Component Sizes with Micron-Level Tolerance:
                    </h3>
                    <p className="text-lg">
                      Full-field measurement is difficult when large structural
                      elements require both macro alignment and micro-scale
                      verification.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Material Variety & Reflectivity:
                    </h3>
                    <p className="text-lg">
                      Aerospace often uses mixed-material assemblies—aluminum
                      alloys, titanium, composites—each of which behaves
                      differently under optical inspection.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      High Documentation Standards:
                    </h3>
                    <p className="text-lg">
                      Traceability and compliance (e.g., AS9100, NADCAP) require
                      repeatable, audit-ready measurement systems.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Low-Volume, High-Cost Production:
                    </h3>
                    <p className="text-lg">
                      Prototypes and short-run assemblies demand flexible
                      inspection tools that minimize setup time without
                      sacrificing rigor.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Where Traditional Systems Fall Behind
                </h2>
                <p className="text-lg">
                  Legacy metrology platforms may be precise but lack the
                  flexibility to rapidly adapt to new parts, complex surfaces,
                  or edge-case material behaviors. Long programming cycles,
                  limited data visualization, and sensitivity to surface
                  finishes reduce usability on the shop floor—especially during
                  time-critical assembly or final inspection phases.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Fermi Vision's Differentiation
                </h2>
                <p className="text-lg">
                  Fermi Vision systems integrate high-resolution imaging with
                  programmable lighting and multi-angle lensing to capture both
                  small features and sweeping surfaces. Our software supports
                  CAD-based measurement planning, composite material analysis,
                  and real-time feedback to operators—all critical for aerospace
                  manufacturers pushing for higher reliability with lower lead
                  times. Whether it's verifying the concentricity of an engine
                  component or the edge profile of a composite panel, we deliver
                  precision at the pace of production.
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

export default IndustryAerospace;
