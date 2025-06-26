import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Download, FileText, Code } from "lucide-react";

const Downloads = () => {
  const { t } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    reason: "",
  });

  // Download categories and items
  const downloadCategories = [
    {
      id: "software",
      name: t("downloads.categories.software", "Software Downloads"),
      items: [
        {
          id: 1,
          name: "Vision Analytics Suite v2.5",
          description: "Latest version of our analytics software",
          size: "245 MB",
          date: "2023-05-15",
          icon: <Code className="h-6 w-6 text-primary" />,
          imageUrl:
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80",
        },
        {
          id: 2,
          name: "Object Recognition SDK",
          description: "Developer toolkit for object recognition integration",
          size: "180 MB",
          date: "2023-04-22",
          icon: <Code className="h-6 w-6 text-primary" />,
          imageUrl:
            "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&q=80",
        },
        {
          id: 3,
          name: "Vision Control Panel v3.1",
          description: "Control software for Vision Series hardware",
          size: "125 MB",
          date: "2023-06-01",
          icon: <Code className="h-6 w-6 text-primary" />,
          imageUrl:
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80",
        },
      ],
    },
    {
      id: "documentation",
      name: t("downloads.categories.documentation", "Product Catalog"),
      items: [
        {
          id: 4,
          name: "Vision Series X User Manual",
          description: "Complete user guide for Vision Series X",
          size: "8.5 MB",
          date: "2023-03-10",
          icon: <FileText className="h-6 w-6 text-primary" />,
          imageUrl:
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80",
        },
        {
          id: 5,
          name: "API Documentation",
          description: "Technical documentation for Vision API",
          size: "3.2 MB",
          date: "2023-05-20",
          icon: <FileText className="h-6 w-6 text-primary" />,
          imageUrl:
            "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&q=80",
        },
        {
          id: 6,
          name: "Integration Guide",
          description:
            "Guide for integrating Vision products with existing systems",
          size: "5.7 MB",
          date: "2023-04-15",
          icon: <FileText className="h-6 w-6 text-primary" />,
          imageUrl:
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80",
        },
      ],
    },
    {
      id: "certifications",
      name: t("downloads.categories.certifications", "Certifications"),
      items: [
        {
          id: 7,
          name: "Vision Camera X1 Firmware v1.2",
          description: "Latest firmware for Vision Camera X1",
          size: "18.3 MB",
          date: "2023-06-05",
          icon: <Download className="h-6 w-6 text-primary" />,
          imageUrl:
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80",
        },
        {
          id: 8,
          name: "Vision Sensor S2 Driver Package",
          description: "Drivers for Vision Sensor S2",
          size: "45.1 MB",
          date: "2023-05-12",
          icon: <Download className="h-6 w-6 text-primary" />,
          imageUrl:
            "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&q=80",
        },
        {
          id: 9,
          name: "3D Scanner Pro Calibration Tool",
          description: "Calibration software for 3D Scanner Pro",
          size: "32.7 MB",
          date: "2023-04-30",
          icon: <Download className="h-6 w-6 text-primary" />,
          imageUrl:
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80",
        },
      ],
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, product: value }));
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
      company: "",
      product: "",
      reason: "",
    });
    // In a real app, you would handle success/error states
  };

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
              {t("downloads.title", "Downloads")}
            </h1>
            <p className="text-xl text-gray-100 text-center max-w-3xl mx-auto">
              {t(
                "downloads.subtitle",
                "Access product documentation, software updates, and technical resources.",
              )}
            </p>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {downloadCategories.map((category) => (
              <div key={category.id} className="mb-16 last:mb-0">
                <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-200">
                  {category.name}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-start mb-4">
                        <div className="mr-4">{item.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {item.description}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <span className="mr-4">Size: {item.size}</span>
                            <span>Updated: {item.date}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary-700 text-white flex items-center justify-center gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Request Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-2 text-center">
              {t("downloads.requestForm.title", "Request Additional Resources")}
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              {t(
                "downloads.requestForm.subtitle",
                "Complete the form below to request access to additional resources",
              )}
            </p>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-700 font-medium">
                  {t(
                    "downloads.requestForm.success",
                    "Your request has been submitted successfully. We will contact you shortly.",
                  )}
                </p>
                <Button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 bg-primary hover:bg-primary-700 text-white"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-8 rounded-lg shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {t("downloads.requestForm.name", "Full Name")}{" "}
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
                      {t("downloads.requestForm.email", "Email Address")}{" "}
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
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company">
                    {t("downloads.requestForm.company", "Company Name")}{" "}
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

                {/* Product of Interest */}
                <div className="space-y-2">
                  <Label htmlFor="product">
                    {t("downloads.requestForm.product", "Product of Interest")}{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.product}
                    onValueChange={handleSelectChange}
                    required
                  >
                    <SelectTrigger id="product">
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vision-series-x">
                        Vision Series X
                      </SelectItem>
                      <SelectItem value="vision-series-y">
                        Vision Series Y
                      </SelectItem>
                      <SelectItem value="vision-series-z">
                        Vision Series Z
                      </SelectItem>
                      <SelectItem value="vision-analytics">
                        Vision Analytics Suite
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Reason for Request */}
                <div className="space-y-2">
                  <Label htmlFor="reason">
                    {t("downloads.requestForm.reason", "Reason for Request")}{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    required
                    placeholder="Please describe why you need access to these resources..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-700 text-white"
                >
                  {t("downloads.requestForm.submit", "Submit Request")}
                </Button>
              </form>
            )}
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

export default Downloads;
