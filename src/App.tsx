import { Suspense, useEffect, lazy } from "react";
import { useRoutes, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import "./i18n/i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";

// Lazy load heavy components
const Products = lazy(() => import("./components/Products"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Industries = lazy(() => import("./components/Industries"));
const IndustryPCB = lazy(() => import("./components/IndustryPCB"));
const IndustryARVR = lazy(() => import("./components/IndustryARVR"));
const IndustryAerospace = lazy(() => import("./components/IndustryAerospace"));
const IndustryNewEnergy = lazy(() => import("./components/IndustryNewEnergy"));
const News = lazy(() => import("./components/News"));
const NewsArticle = lazy(() => import("./components/NewsArticle"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const CustomerRequestForm = lazy(() => import("./components/CustomerRequestForm"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./components/TermsOfService"));

function App() {
  const location = useLocation();

  // Initialize i18n
  useEffect(() => {
    // This ensures i18n is initialized when the app loads
    // The actual initialization happens in i18n.ts
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen bg-background">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      }>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:series" element={<ProductDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route
              path="/industries/pcb-manufacturing"
              element={<IndustryPCB />}
            />
            <Route
              path="/industries/arvr-personal-devices"
              element={<IndustryARVR />}
            />
            <Route
              path="/industries/aerospace"
              element={<IndustryAerospace />}
            />
            <Route
              path="/industries/new-energy-automotives"
              element={<IndustryNewEnergy />}
            />

            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/customer-request" element={<CustomerRequestForm />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
