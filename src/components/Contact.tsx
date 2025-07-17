import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    // In a real app, you would handle success/error states
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
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#098fc8] via-[#098fc8] to-transparent py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">
              {t("contact.title", "Contact Us")}
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              {t("contact.subtitle", "Get in touch with our team.")}
            </p>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  {t("contact.form.title", "Send Us a Message")}
                </h2>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <p className="text-green-700 font-medium">
                      {t(
                        "contact.form.success",
                        "Your message has been sent successfully. We will get back to you soon.",
                      )}
                    </p>
                    <Button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 bg-primary hover:bg-primary-700 text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        {t("contact.form.name", "Full Name")}{" "}
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

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {t("contact.form.email", "Email Address")}{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john.doe@example.com"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">
                        {t("contact.form.subject", "Subject")}{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Product Inquiry"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {t("contact.form.message", "Message")}{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Your message here..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-700 text-white"
                    >
                      {t("contact.form.submit", "Send Message")}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  {t("contact.info.title", "Contact Information")}
                </h2>

                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {t("contact.info.address", "Address")}
                        </h3>
                        <p className="text-gray-600">
                          Quanzhi Technology Innovation Center
                        </p>
                        <p className="text-gray-600">Kechuang Building 9C</p>
                        <p className="text-gray-600">
                          Houting Community, Shajing Sub-district, Bao'an
                          District
                        </p>
                        <p className="text-gray-600">
                          Shenzhen City, Guangdong Province, China
                        </p>
                        <p className="text-gray-600">Zip Code: 518104</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {t("contact.info.phone", "Phone")}
                        </h3>
                        <p className="text-gray-600">+86 189 2346 0852</p>
                        <p className="text-gray-600">xxx</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {t("contact.info.email", "Email")}
                        </h3>

                        <p className="text-gray-600">sales@fermivision.com</p>
                      </div>
                    </div>

                    {/* Business Hours */}
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 rounded-lg overflow-hidden shadow-md h-64 bg-gray-200">
                  {/* In a real application, you would embed a Google Map or similar here */}
                  <div className="w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                      alt="Office Location Map"
                      className="w-full h-full object-cover"
                    />
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

export default Contact;
