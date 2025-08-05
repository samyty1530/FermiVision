// Media file constants for centralized management
export const MEDIA = {
  // Logo
  LOGO: {
    PRIMARY: "/images/FV_logo.png",
    OLD: "/images/FV_logo_250625.png",
  },

  // News Images
  NEWS: {
    SK_HYNIX: "/images/news_SK.png",
    ENGINEERING_BREAKTHROUGH: "/images/news_engBreakthrough.webp",
    // Placeholders for missing news images
    ADAPTIVE_METROLOGY: "/images/news_adaptive_metro.png",
    MANUAL_PIN_GAUGING: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    ANTENNA_BOARD_INSPECTION: "/images/news_antenna_board.png", // placeholder - needs actual antenna board inspection image
  },

  // Home Page Products
  PRODUCTS: {
    SERIES_A: "/images/home-products-1-A8.jpg",
    SERIES_B: "/images/home-products-1-A8.jpg", // placeholder - needs actual B series image
    SERIES_C: "/images/home-products-1-F5.jpg", // placeholder - needs actual C series image
    SERIES_F: "/images/home-products-1-F5.jpg",
    SERIES_U: "/images/home-products-1-U.jpg",
    ACCESSORIES: "/images/home-products-1-U.jpg", // placeholder - needs actual accessories image
  },

  // Home Page Industries
  INDUSTRIES: {
    PCB: "/images/home_industries-1.jpg",
    ARVR: "/images/home_industries-2.jpg",
    AEROSPACE: "/images/home_industries-3.jpg",
    NEW_ENERGY: "/images/home_industries-4.jpg",
  },

  // Partner Logos
  PARTNERS: {
    DONGXUN: "/images/home_partners-dongxun.png",
    FANGZHENG: "/images/home_partners-fangzheng.png",
    FOXCONN: "/images/home_partners-foxconn.jpg",
    HUAWEI: "/images/home_partners-huawei.png",
    MULTEK: "/images/home_partners-multek.png",
    CHONGDA: "/images/home-partners-chongda.png",
    SK: "/images/home-partners-SK.png",
    UNIMICRON: "/images/home-partners-unimicron.png",
  },

  // Social Media Icons
  SOCIAL: {
    LINKEDIN: "/images/home_socials-LI.png",
    WECHAT: "/images/home_socials-wechat.png",
    WECHAT_QR: "/images/FV_Wechat_QR.png",
  },

  // Hero Backgrounds (for news articles)
  HERO: {
    ENGINEERING_BREAKTHROUGH: "/images/news_engBreakthrough.webp",
    ADAPTIVE_METROLOGY: "/images/news_adaptive_metro.png",
    SK_HYNIX: "/images/news_SK.png",
  },

  // Product Detail Images (placeholders for missing images)
  PRODUCT_DETAILS: {
    SERIES_A: "/images/home-products-1-A8.jpg", // placeholder - needs actual product detail image
    SERIES_B: "/images/home-products-1-A8.jpg", // placeholder - needs actual product detail image
    SERIES_C: "/images/home-products-1-F5.jpg", // placeholder - needs actual product detail image
    SERIES_F: "/images/home-products-1-F5.jpg", // placeholder - needs actual product detail image
    SERIES_U: "/images/home-products-1-U.jpg", // placeholder - needs actual product detail image
    ACCESSORIES: "/images/home-products-1-U.jpg", // placeholder - needs actual product detail image
  },

  // Videos (placeholders for missing videos)
  VIDEOS: {
    PRODUCT_DEMO: "/videos/product-demo.mp4", // placeholder - needs actual demo video
    COMPANY_OVERVIEW: "/videos/company-overview.mp4", // placeholder - needs actual company video
    TECHNOLOGY_EXPLAINER: "/videos/technology-explainer.mp4", // placeholder - needs actual explainer video
    CASE_STUDY_SK_HYNIX: "/videos/case-study-sk-hynix.mp4", // placeholder - needs actual case study video
    CASE_STUDY_PCB: "/videos/case-study-pcb.mp4", // placeholder - needs actual case study video
  },

  // Additional Images (placeholders for missing images)
  ADDITIONAL: {
    TEAM_PHOTO: "/images/team-photo.jpg", // placeholder - needs actual team photo
    OFFICE_PHOTO: "/images/office-photo.jpg", // placeholder - needs actual office photo
    FACTORY_PHOTO: "/images/factory-photo.jpg", // placeholder - needs actual factory photo
    PRODUCT_CLOSEUP: "/images/product-closeup.jpg", // placeholder - needs actual product closeup
    TECHNOLOGY_DIAGRAM: "/images/technology-diagram.png", // placeholder - needs actual technology diagram
  },
} as const;

// Helper function to get product image by series
export const getProductImage = (series: string): string => {
  switch (series.toUpperCase()) {
    case "A":
      return MEDIA.PRODUCTS.SERIES_A;
    case "B":
      return MEDIA.PRODUCTS.SERIES_B;
    case "C":
      return MEDIA.PRODUCTS.SERIES_C;
    case "F":
      return MEDIA.PRODUCTS.SERIES_F;
    case "U":
      return MEDIA.PRODUCTS.SERIES_U;
    case "ACCESSORIES":
      return MEDIA.PRODUCTS.ACCESSORIES;
    default:
      return MEDIA.PRODUCTS.SERIES_A; // fallback
  }
};

// Helper function to get product detail image by series
export const getProductDetailImage = (series: string): string => {
  switch (series.toUpperCase()) {
    case "A":
      return MEDIA.PRODUCT_DETAILS.SERIES_A;
    case "B":
      return MEDIA.PRODUCT_DETAILS.SERIES_B;
    case "C":
      return MEDIA.PRODUCT_DETAILS.SERIES_C;
    case "F":
      return MEDIA.PRODUCT_DETAILS.SERIES_F;
    case "U":
      return MEDIA.PRODUCT_DETAILS.SERIES_U;
    case "ACCESSORIES":
      return MEDIA.PRODUCT_DETAILS.ACCESSORIES;
    default:
      return MEDIA.PRODUCT_DETAILS.SERIES_A; // fallback
  }
};

// Helper function to get industry image by index
export const getIndustryImage = (index: number): string => {
  switch (index) {
    case 1:
      return MEDIA.INDUSTRIES.PCB;
    case 2:
      return MEDIA.INDUSTRIES.ARVR;
    case 3:
      return MEDIA.INDUSTRIES.AEROSPACE;
    case 4:
      return MEDIA.INDUSTRIES.NEW_ENERGY;
    default:
      return MEDIA.INDUSTRIES.PCB; // fallback
  }
};

// Helper function to get news image by article type
export const getNewsImage = (articleType: string): string => {
  switch (articleType.toLowerCase()) {
    case "engineering_breakthrough":
    case "engineering-breakthrough":
      return MEDIA.NEWS.ENGINEERING_BREAKTHROUGH;
    case "sk_hynix":
    case "sk-hynix":
      return MEDIA.NEWS.SK_HYNIX;
    case "adaptive_metrology":
    case "adaptive-metrology":
      return MEDIA.NEWS.ADAPTIVE_METROLOGY;
    case "manual_pin_gauging":
    case "manual-pin-gauging":
      return MEDIA.NEWS.MANUAL_PIN_GAUGING;
    case "antenna_board_inspection":
    case "antenna-board-inspection":
    case "unlocking_high_volume_antenna_board_inspection":
      return MEDIA.NEWS.ANTENNA_BOARD_INSPECTION;
    default:
      return MEDIA.NEWS.ENGINEERING_BREAKTHROUGH; // fallback
  }
};

// Helper function to get video by type
export const getVideo = (videoType: string): string => {
  switch (videoType.toLowerCase()) {
    case "product_demo":
    case "product-demo":
      return MEDIA.VIDEOS.PRODUCT_DEMO;
    case "company_overview":
    case "company-overview":
      return MEDIA.VIDEOS.COMPANY_OVERVIEW;
    case "technology_explainer":
    case "technology-explainer":
      return MEDIA.VIDEOS.TECHNOLOGY_EXPLAINER;
    case "case_study_sk_hynix":
    case "case-study-sk-hynix":
      return MEDIA.VIDEOS.CASE_STUDY_SK_HYNIX;
    case "case_study_pcb":
    case "case-study-pcb":
      return MEDIA.VIDEOS.CASE_STUDY_PCB;
    default:
      return MEDIA.VIDEOS.PRODUCT_DEMO; // fallback
  }
}; 