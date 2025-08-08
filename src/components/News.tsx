import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { newsArticles } from "@/data/news-articles";
import Breadcrumbs from "./layout/Breadcrumbs";

const News = () => {
  const { t } = useTranslation();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Use news articles from the data file
  const newsItems = newsArticles;

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <Header
        logo="/images/FV_logo.png"
        navLinks={[
          { label: t("nav.products", "Products"), href: "/products" },
          { label: t("nav.industries", "Industries"), href: "/industries" },
          { label: t("nav.downloads", "Downloads"), href: "/downloads" },
          { label: t("nav.news", "News"), href: "/news" },
          { label: t("nav.about", "About"), href: "/about" },
          { label: t("nav.contact", "Contact"), href: "/contact" },
        ]}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: t("nav.news", "News") }]} />

      {/* Page Content */}
      <main className="flex-grow pt-[132px] pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#098fc8] via-[#0772a0] to-[#00365c] py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">
              {t("news.title", "News & Events")}
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              {t(
                "news.subtitle",
                "Stay updated with the latest developments, announcements, and insights from Fermi Vision.",
              )}
            </p>
          </div>
        </section>

        {/* News Articles Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {newsItems.map((item) => {
                  const isExpanded = expandedItems.has(item.id);
                  return (
                    <article
                      key={item.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      {/* Article Header */}
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-primary font-medium">
                              {t(`news.articles.${item.id}.date`, item.date)}
                            </span>
                          </div>
                          <h2 className="text-2xl font-bold mb-3 text-gray-900">
                            {t(`news.articles.${item.id}.title`, item.title)}
                          </h2>
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {t(
                              `news.articles.${item.id}.excerpt`,
                              item.excerpt,
                            )}
                          </p>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-4">
                            <Button
                              onClick={() => toggleExpanded(item.id)}
                              variant="outline"
                              className="flex items-center gap-2"
                            >
                              {t("common.learnMore", "Learn More")}
                              {isExpanded ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </Button>

                            <Link to={`/news/${item.slug}`}>
                              <Button
                                variant="default"
                                className="flex items-center gap-2 bg-primary hover:bg-primary-700"
                              >
                                {t(
                                  "common.readFullArticle",
                                  "Read Full Article",
                                )}
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <div className="pt-6">
                            <div
                              className="text-gray-700 leading-relaxed text-lg prose prose-lg max-w-none"
                              dangerouslySetInnerHTML={{
                                __html: t(
                                  `news.articles.${item.id}.content`,
                                  item.content
                                ).substring(0, 500) + "...",
                              }}
                            />
                            <div className="mt-4">
                              <Link to={`/news/${item.slug}`}>
                                <Button
                                  variant="link"
                                  className="p-0 text-primary"
                                >
                                  {t(
                                    "common.readFullArticle",
                                    "Read Full Article",
                                  )}{" "}
                                  →
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
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

export default News;
