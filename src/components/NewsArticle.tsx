import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ArrowLeft, Calendar, User, Tag, ExternalLink } from "lucide-react";
import { getArticleBySlug } from "@/data/news-articles";

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();

  if (!slug) {
    return <Navigate to="/news" replace />;
  }

  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

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
        {/* Back Navigation */}
        <section className="py-8 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("common.backToNews", "Back to News")}
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                {article.author && (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                )}
                {article.tags && article.tags.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <div className="flex gap-2">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Article Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {article.title}
              </h1>

              {/* Article Excerpt */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {article.excerpt}
              </p>

              {/* Featured Image */}
              <div className="mb-12">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-ul:text-gray-700 prose-ul:mb-6
                  prose-li:mb-2
                  prose-strong:text-gray-900
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Action Buttons */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/news">
                    <Button variant="outline" className="w-full sm:w-auto">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      {t("common.backToNews", "Back to News")}
                    </Button>
                  </Link>

                  {article.externalLink && (
                    <Link to={article.externalLink}>
                      <Button className="w-full sm:w-auto bg-primary hover:bg-primary-700">
                        {t("common.viewRelatedPage", "View Related Page")}
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  )}
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

export default NewsArticle;
