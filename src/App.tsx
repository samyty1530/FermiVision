import { Suspense, useEffect } from "react";
import { useRoutes, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Industries from "./components/Industries";
import IndustryPCB from "./components/IndustryPCB";
import IndustryARVR from "./components/IndustryARVR";
import IndustryAerospace from "./components/IndustryAerospace";
import IndustryNewEnergy from "./components/IndustryNewEnergy";
import News from "./components/News";
import NewsArticle from "./components/NewsArticle";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomerRequestForm from "./components/CustomerRequestForm";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import routes from "tempo-routes";
import "./i18n/i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";

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
      <Suspense fallback={<p>Loading...</p>}>
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
