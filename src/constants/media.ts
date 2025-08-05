// Media file constants for centralized management
export const MEDIA = {
  // Logo
  LOGO: {
    PRIMARY: "/images/FV_logo.png",
    OLD: "/images/FV_logo_250625.png",
  },

   // Home Page - Hero Backgrounds (for news articles)
   HERO: {
    ENGINEERING_BREAKTHROUGH: "/images/news_engBreakthrough.webp",
    ADAPTIVE_METROLOGY: "/images/news_adaptive_metro.png",
    SK_HYNIX: "/images/news_SK.png",
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

// Products - Home page carousel images
    PRODUCTS: {
    SERIES_A: "/images/product_A8.jpg",
    SERIES_B: "/images/xx.jpg", // placeholder - needs actual B series image
    SERIES_C: "/images/xx.jpg", // placeholder - needs actual C series image
    SERIES_F: "/images/product_F8.jpg",
    SERIES_U: "/images/product_U.jpg",
    ACCESSORIES: "/images/xx.jpg", // placeholder - needs actual accessories image
    },

    // Industries - Home page carousel images
    INDUSTRIES: {
    PCB: "/images/industries_pcb.jpg",
    ARVR: "/images/industries_arvr.jpg",
    AEROSPACE: "/images/industries_aero.jpg",
    NEW_ENERGY: "/images/industries_auto.jpg",
    },

  // Industry Detail Page Images
  INDUSTRY_DETAILS: {
    PCB: "/images/industries_pcb.jpg",
    ARVR: "/images/industries_arvr.jpg",
    AEROSPACE: "/images/industries_aero.jpg",
    NEW_ENERGY: "/images/industries_auto.jpg",
  },

  // News Images
  NEWS: {
    SK_HYNIX: "/images/news_SK.png",
    ENGINEERING_BREAKTHROUGH: "/images/news_engBreakthrough.webp",
    // Placeholders for missing news images
    ADAPTIVE_METROLOGY: "/images/news_adaptive_metro.png",
    MANUAL_PIN_GAUGING: "/images/news_pin_gauge.jpg",
    ANTENNA_BOARD_INSPECTION: "/images/news_8000.jpg", // placeholder - needs actual antenna board inspection image
  },

  // Social Media Icons
  SOCIAL: {
    LINKEDIN: "/images/home_socials-LI.png",
    WECHAT: "/images/home_socials-wechat.png",
    WECHAT_QR: "/images/FV_Wechat_QR.png",
  },

  // Vision Series A - Product Detail Page Images
  VISION_SERIES_A: {
    HERO: "/images/product_A8.jpg",
    IMAGE_1: "/images/product_A_1.jpg",
    IMAGE_2: "/images/product_A_2.jpg", 
    IMAGE_3: "/images/product_A_3.jpg",
    VIDEO: "/videos/vision-series-a-demo.mp4", // placeholder - needs actual demo video
  },

  // Vision Series B - Product Detail Page Images
  VISION_SERIES_B: {
    HERO: "/images/product_.jpg", // placeholder - needs actual B series hero image
    IMAGE_1: "/images/product_xx.jpg", // placeholder - needs actual B series image 1
    IMAGE_2: "/images/product_xx.jpg", // placeholder - needs actual B series image 2
    IMAGE_3: "/images/product_xx.jpg", // placeholder - needs actual B series image 3
    VIDEO: "/videos/vision-series-b-demo.mp4", // placeholder - needs actual demo video
  },

  // Vision Series C - Product Detail Page Images
  VISION_SERIES_C: {
    HERO: "/images/product_F5.jpg", // placeholder - needs actual C series hero image
    IMAGE_1: "/images/product_F_3.jpg",
    IMAGE_2: "/images/xx.jpg",
    IMAGE_3: "/images/xx", // placeholder - needs actual C series image 3
    VIDEO: "/videos/vision-series-c-demo.mp4", // placeholder - needs actual demo video
  },

  // Vision Series F - Product Detail Page Images
  VISION_SERIES_F: {
    HERO: "/images/product_F8.JPG",
    IMAGE_1: "/images/product_F5_1.jpg",
    IMAGE_2: "/images/product_F5_2.jpg",
    IMAGE_3: "/images/product_F_3.jpg",
    VIDEO: "/videos/vision-series-f-demo.mp4", // placeholder - needs actual demo video
  },

  // Vision Series U - Product Detail Page Images
  VISION_SERIES_U: {
    HERO: "/images/product_U.jpg",
    IMAGE_1: "/images/product_A_1.jpg", // placeholder - needs actual U series image 1
    IMAGE_2: "/images/product_A_2.jpg", // placeholder - needs actual U series image 2
    IMAGE_3: "/images/product_A_3.jpg", // placeholder - needs actual U series image 3
    VIDEO: "/videos/vision-series-u-demo.mp4", // placeholder - needs actual demo video
  },

  // Accessories & Components - Product Detail Page Images
  ACCESSORIES: {
    HERO: "/images/product_U.jpg", // placeholder - needs actual accessories hero image
    IMAGE_1: "/images/product_A_1.jpg", // placeholder - needs actual accessories image 1
    IMAGE_2: "/images/product_A_2.jpg", // placeholder - needs actual accessories image 2
    IMAGE_3: "/images/product_A_3.jpg", // placeholder - needs actual accessories image 3
    VIDEO: "/videos/accessories-demo.mp4", // placeholder - needs actual demo video
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

// Helper function to get product detail hero image by series
export const getProductDetailHero = (series: string): string => {
  switch (series.toUpperCase()) {
    case "A":
      return MEDIA.VISION_SERIES_A.HERO;
    case "B":
      return MEDIA.VISION_SERIES_B.HERO;
    case "C":
      return MEDIA.VISION_SERIES_C.HERO;
    case "F":
      return MEDIA.VISION_SERIES_F.HERO;
    case "U":
      return MEDIA.VISION_SERIES_U.HERO;
    case "ACCESSORIES":
      return MEDIA.ACCESSORIES.HERO;
    default:
      return MEDIA.VISION_SERIES_A.HERO; // fallback
  }
};

// Helper function to get product detail images by series
export const getProductDetailImages = (series: string): { IMAGE_1: string; IMAGE_2: string; IMAGE_3: string } => {
  switch (series.toUpperCase()) {
    case "A":
      return {
        IMAGE_1: MEDIA.VISION_SERIES_A.IMAGE_1,
        IMAGE_2: MEDIA.VISION_SERIES_A.IMAGE_2,
        IMAGE_3: MEDIA.VISION_SERIES_A.IMAGE_3,
      };
    case "B":
      return {
        IMAGE_1: MEDIA.VISION_SERIES_B.IMAGE_1,
        IMAGE_2: MEDIA.VISION_SERIES_B.IMAGE_2,
        IMAGE_3: MEDIA.VISION_SERIES_B.IMAGE_3,
      };
    case "C":
      return {
        IMAGE_1: MEDIA.VISION_SERIES_C.IMAGE_1,
        IMAGE_2: MEDIA.VISION_SERIES_C.IMAGE_2,
        IMAGE_3: MEDIA.VISION_SERIES_C.IMAGE_3,
      };
    case "F":
      return {
        IMAGE_1: MEDIA.VISION_SERIES_F.IMAGE_1,
        IMAGE_2: MEDIA.VISION_SERIES_F.IMAGE_2,
        IMAGE_3: MEDIA.VISION_SERIES_F.IMAGE_3,
      };
    case "U":
      return {
        IMAGE_1: MEDIA.VISION_SERIES_U.IMAGE_1,
        IMAGE_2: MEDIA.VISION_SERIES_U.IMAGE_2,
        IMAGE_3: MEDIA.VISION_SERIES_U.IMAGE_3,
      };
    case "ACCESSORIES":
      return {
        IMAGE_1: MEDIA.ACCESSORIES.IMAGE_1,
        IMAGE_2: MEDIA.ACCESSORIES.IMAGE_2,
        IMAGE_3: MEDIA.ACCESSORIES.IMAGE_3,
      };
    default:
      return {
        IMAGE_1: MEDIA.VISION_SERIES_A.IMAGE_1,
        IMAGE_2: MEDIA.VISION_SERIES_A.IMAGE_2,
        IMAGE_3: MEDIA.VISION_SERIES_A.IMAGE_3,
      }; // fallback
  }
};

// Helper function to get product detail video by series
export const getProductDetailVideo = (series: string): string => {
  switch (series.toUpperCase()) {
    case "A":
      return MEDIA.VISION_SERIES_A.VIDEO;
    case "B":
      return MEDIA.VISION_SERIES_B.VIDEO;
    case "C":
      return MEDIA.VISION_SERIES_C.VIDEO;
    case "F":
      return MEDIA.VISION_SERIES_F.VIDEO;
    case "U":
      return MEDIA.VISION_SERIES_U.VIDEO;
    case "ACCESSORIES":
      return MEDIA.ACCESSORIES.VIDEO;
    default:
      return MEDIA.VISION_SERIES_A.VIDEO; // fallback
  }
};

// Helper function to get industry image by index (for home page carousel)
export const getIndustryImage = (index: number): string => {
  switch (index) {
    case 0:
      return MEDIA.INDUSTRIES.PCB;
    case 1:
      return MEDIA.INDUSTRIES.ARVR;
    case 2:
      return MEDIA.INDUSTRIES.AEROSPACE;
    case 3:
      return MEDIA.INDUSTRIES.NEW_ENERGY;
    default:
      return MEDIA.INDUSTRIES.PCB; // fallback
  }
};

// Helper function to get industry detail image by industry type
export const getIndustryDetailImage = (industry: string): string => {
  switch (industry.toUpperCase()) {
    case "PCB":
      return MEDIA.INDUSTRY_DETAILS.PCB;
    case "ARVR":
      return MEDIA.INDUSTRY_DETAILS.ARVR;
    case "AEROSPACE":
      return MEDIA.INDUSTRY_DETAILS.AEROSPACE;
    case "NEW_ENERGY":
      return MEDIA.INDUSTRY_DETAILS.NEW_ENERGY;
    default:
      return MEDIA.INDUSTRY_DETAILS.PCB; // fallback
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