import { Suspense, useEffect } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/Products";
import Industries from "./components/Industries";
import Downloads from "./components/Downloads";
import News from "./components/News";
import NewsArticle from "./components/NewsArticle";
import About from "./components/About";
import Contact from "./components/Contact";
import routes from "tempo-routes";
import "./i18n/i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";

function App() {
  // Initialize i18n
  useEffect(() => {
    // This ensures i18n is initialized when the app loads
    // The actual initialization happens in i18n.ts
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
