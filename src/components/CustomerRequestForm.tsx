import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CustomerRequestForm = () => {
  const { t } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    description: "",
    interests: {
      priceRequest: false,
      applicationConsultation: false,
      applicationTesting: false,
      generalInquiry: false,
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: {
        ...prev.interests,
        [interest]: checked,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      description: "",
      interests: {
        priceRequest: false,
        applicationConsultation: false,
        applicationTesting: false,
        generalInquiry: false,
      },
    });
  };

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
        {/* Navigation */}
        <section className="py-8 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("common.backToProducts", "Back to Products")}
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#098fc8] via-[#098fc8] to-transparent py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">
              {t("customerRequest.title", "Customer Request Form")}
            </h1>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <h2 className="text-2xl font-bold text-green-800 mb-4">
                    {t(
                      "customerRequest.successTitle",
                      "Request Submitted Successfully!",
                    )}
                  </h2>
                  <p className="text-green-700 mb-6">
                    {t(
                      "customerRequest.successMessage",
                      "Thank you for your request. Our technical experts will review your requirements and send you the product catalog along with personalized recommendations shortly.",
                    )}
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-primary hover:bg-primary-700 text-white"
                  >
                    {t(
                      "customerRequest.submitAnother",
                      "Submit Another Request",
                    )}
                  </Button>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8">
                  <p className="text-lg font-bold text-gray-900 mb-8 text-left">
                    Complete the form below to receive our products catalog and
                    our technical experts can help you select the best solution
                    for your specific application.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        {t("customerRequest.form.name", "Your Name")}{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <Label htmlFor="company">
                        {t("customerRequest.form.company", "Company")}{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        placeholder="Acme Corporation"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {t("customerRequest.form.email", "Company Email")}{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john.doe@company.com"
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description">
                        {t(
                          "customerRequest.form.description",
                          "Short description of what you want to solve",
                        )}{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        placeholder={t(
                          "customerRequest.form.descriptionPlaceholder",
                          "Ex - Want solution to check for GD&T for small holes and SMT components on a PCB panel in the 50 um range, pcb panel size is ~40x40cm, accuracy tolerance X um",
                        )}
                        rows={4}
                      />
                    </div>

                    {/* Interests Checkboxes */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold">
                        {t(
                          "customerRequest.form.interests",
                          "Please check the item(s) you are interested in:",
                        )}
                      </Label>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="priceRequest"
                            checked={formData.interests.priceRequest}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange("priceRequest", !!checked)
                            }
                          />
                          <Label htmlFor="priceRequest" className="font-normal">
                            {t(
                              "customerRequest.form.priceRequest",
                              "Price request",
                            )}
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="applicationConsultation"
                            checked={formData.interests.applicationConsultation}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange(
                                "applicationConsultation",
                                !!checked,
                              )
                            }
                          />
                          <Label
                            htmlFor="applicationConsultation"
                            className="font-normal"
                          >
                            {t(
                              "customerRequest.form.applicationConsultation",
                              "Application consultation",
                            )}
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="applicationTesting"
                            checked={formData.interests.applicationTesting}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange(
                                "applicationTesting",
                                !!checked,
                              )
                            }
                          />
                          <Label
                            htmlFor="applicationTesting"
                            className="font-normal"
                          >
                            {t(
                              "customerRequest.form.applicationTesting",
                              "Application testing",
                            )}
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="generalInquiry"
                            checked={formData.interests.generalInquiry}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange("generalInquiry", !!checked)
                            }
                          />
                          <Label
                            htmlFor="generalInquiry"
                            className="font-normal"
                          >
                            {t(
                              "customerRequest.form.generalInquiry",
                              "General inquiry",
                            )}
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-700 text-white py-3 text-lg"
                    >
                      {t(
                        "customerRequest.form.submit",
                        "Request Product Catalog",
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Representatives Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                {t(
                  "customerRequest.representatives.title",
                  "Would you like to connect with one of our technical representatives?",
                )}
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* WeChat */}
                <div className="bg-white rounded-lg p-6 shadow-md flex items-center gap-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">
                      {t("customerRequest.representatives.wechat", "WeChat")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t(
                        "customerRequest.representatives.wechatId",
                        "ID: FermiVision2024",
                      )}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-lg p-6 shadow-md flex items-center gap-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">
                      {t("customerRequest.representatives.phone", "Phone")}
                    </h3>
                    <p className="text-gray-600 text-sm">+86 189 2346 0852</p>
                  </div>
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

export default CustomerRequestForm;
