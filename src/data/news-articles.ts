export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author?: string;
  tags?: string[];
  externalLink?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "revolutionary-vision-technology-breakthrough",
    title: "Revolutionary Vision Technology Breakthrough",
    date: "June 1, 2023",
    excerpt:
      "Fermi Vision announces new developments in vision technology that will revolutionize the industry with unprecedented precision and reliability.",
    content: `
      <h2>Breakthrough in Machine Vision Technology</h2>
      <p>Our latest breakthrough in machine vision technology represents a significant leap forward in precision measurement capabilities. The new algorithms we've developed can detect microscopic defects with 99.9% accuracy, setting a new industry standard.</p>
      
      <h3>Key Innovations</h3>
      <ul>
        <li>Advanced AI-powered defect detection algorithms</li>
        <li>Real-time processing capabilities with sub-millisecond response times</li>
        <li>Enhanced image resolution and clarity for microscopic analysis</li>
        <li>Seamless integration with existing manufacturing systems</li>
      </ul>
      
      <h3>Industry Impact</h3>
      <p>This advancement will particularly benefit the semiconductor and electronics manufacturing sectors, where precision is paramount. Our research team has been working on this technology for over two years, collaborating with leading universities and industry partners to ensure the highest quality standards.</p>
      
      <h3>Technical Specifications</h3>
      <p>The new system features:</p>
      <ul>
        <li>Detection accuracy: 99.9%</li>
        <li>Processing speed: Up to 1000 components per minute</li>
        <li>Resolution: Down to 0.1 micron defects</li>
        <li>Compatibility: Works with all major PCB and semiconductor manufacturing lines</li>
      </ul>
      
      <h3>Future Applications</h3>
      <p>We anticipate this technology will expand beyond traditional manufacturing into areas such as medical device inspection, automotive component verification, and aerospace quality control. The potential applications are virtually limitless.</p>
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    author: "Dr. Sarah Chen, CTO",
    tags: ["Technology", "Innovation", "AI", "Manufacturing"],
    externalLink: "/products",
  },
  {
    id: "2",
    slug: "global-expansion-asia-pacific",
    title: "Global Expansion Initiative Across Asia-Pacific",
    date: "June 2, 2023",
    excerpt:
      "Fermi Vision announces strategic expansion into new markets across Asia-Pacific with localized support and advanced vision systems.",
    content: `
      <h2>Strategic Expansion Across Asia-Pacific</h2>
      <p>We are excited to announce our expansion into new markets across Asia-Pacific. This strategic move will allow us to better serve our growing customer base and provide localized support for our advanced vision systems.</p>
      
      <h3>New Office Locations</h3>
      <p>The expansion includes new offices in:</p>
      <ul>
        <li><strong>Singapore</strong> - Regional headquarters for Southeast Asia</li>
        <li><strong>Tokyo, Japan</strong> - Technology center and customer support</li>
        <li><strong>Seoul, South Korea</strong> - Manufacturing partnership hub</li>
      </ul>
      
      <h3>Local Support Teams</h3>
      <p>Each office will be staffed with experienced engineers and support personnel to ensure our customers receive the highest level of service. Our local teams will provide:</p>
      <ul>
        <li>On-site technical support and installation</li>
        <li>Localized training programs</li>
        <li>Rapid response maintenance services</li>
        <li>Custom solution development</li>
      </ul>
      
      <h3>Market Opportunities</h3>
      <p>The Asia-Pacific region represents tremendous growth opportunities for advanced manufacturing technologies. With the increasing demand for high-precision electronics and semiconductor devices, our expansion positions us to serve this growing market effectively.</p>
      
      <h3>Timeline and Investment</h3>
      <p>The expansion will be completed in phases over the next 18 months, with a total investment of $50 million. We plan to hire over 200 local professionals across all three locations, contributing to the local economies and building strong community partnerships.</p>
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    author: "Michael Zhang, VP of Global Operations",
    tags: ["Expansion", "Asia-Pacific", "Growth", "Support"],
    externalLink: "/about",
  },
  {
    id: "3",
    slug: "semiconductor-partnership-announcement",
    title: "Partnership with Leading Semiconductor Manufacturer",
    date: "May 15, 2023",
    excerpt:
      "Fermi Vision partners with a major semiconductor company to develop next-generation inspection systems for advanced chip manufacturing processes.",
    content: `
      <h2>Strategic Partnership for Next-Generation Chip Manufacturing</h2>
      <p>This strategic partnership marks a significant milestone in our company's growth. By collaborating with one of the world's leading semiconductor manufacturers, we're able to push the boundaries of what's possible in automated inspection technology.</p>
      
      <h3>Partnership Objectives</h3>
      <p>The partnership will focus on developing specialized systems for:</p>
      <ul>
        <li>3nm and smaller process nodes</li>
        <li>Advanced packaging technologies</li>
        <li>High-volume manufacturing inspection</li>
        <li>Real-time quality control systems</li>
      </ul>
      
      <h3>Technical Challenges</h3>
      <p>Working with cutting-edge semiconductor processes presents unique challenges:</p>
      <ul>
        <li><strong>Extreme Precision</strong> - Detecting defects at the nanometer scale</li>
        <li><strong>Speed Requirements</strong> - Keeping pace with high-volume production</li>
        <li><strong>Environmental Sensitivity</strong> - Operating in cleanroom conditions</li>
        <li><strong>Data Processing</strong> - Handling massive amounts of inspection data</li>
      </ul>
      
      <h3>Innovation Focus Areas</h3>
      <p>Our joint research and development efforts will concentrate on:</p>
      <ul>
        <li>Advanced optical systems for sub-nanometer inspection</li>
        <li>AI-powered defect classification and prediction</li>
        <li>Integration with Industry 4.0 manufacturing systems</li>
        <li>Predictive maintenance and system optimization</li>
      </ul>
      
      <h3>Market Impact</h3>
      <p>This collaboration validates our technology's capabilities and positions us at the forefront of the industry's evolution. The partnership will accelerate the development of next-generation inspection solutions that will benefit the entire semiconductor ecosystem.</p>
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
    author: "Dr. James Liu, Head of R&D",
    tags: ["Partnership", "Semiconductor", "Innovation", "Manufacturing"],
  },
  {
    id: "4",
    slug: "innovation-excellence-award-2023",
    title: "Award Recognition for Innovation Excellence",
    date: "April 20, 2023",
    excerpt:
      "Fermi Vision receives prestigious industry award for outstanding innovation in machine vision technology and contribution to manufacturing excellence.",
    content: `
      <h2>Innovation Excellence Award Recognition</h2>
      <p>We are honored to receive the Innovation Excellence Award from the International Machine Vision Association. This recognition acknowledges our team's dedication to pushing the boundaries of what's possible in precision measurement and automated inspection.</p>
      
      <h3>Award Categories</h3>
      <p>The award specifically recognizes our achievements in:</p>
      <ul>
        <li><strong>Breakthrough Technology</strong> - Real-time defect detection algorithms</li>
        <li><strong>Manufacturing Impact</strong> - Improving quality across multiple industries</li>
        <li><strong>Innovation Leadership</strong> - Setting new standards for precision measurement</li>
        <li><strong>Industry Contribution</strong> - Advancing the field of machine vision</li>
      </ul>
      
      <h3>Technical Achievements</h3>
      <p>Our award-winning innovations include:</p>
      <ul>
        <li>Development of proprietary AI algorithms for defect detection</li>
        <li>Creation of ultra-high-resolution imaging systems</li>
        <li>Implementation of real-time processing capabilities</li>
        <li>Integration of machine learning for predictive quality control</li>
      </ul>
      
      <h3>Industry Recognition</h3>
      <p>The International Machine Vision Association noted our contributions to:</p>
      <ul>
        <li>Advancing manufacturing quality standards</li>
        <li>Reducing production costs through early defect detection</li>
        <li>Enabling new applications in precision manufacturing</li>
        <li>Fostering innovation through industry collaboration</li>
      </ul>
      
      <h3>Future Commitment</h3>
      <p>This achievement motivates us to continue our pursuit of technological excellence and innovation. We remain committed to developing solutions that address the evolving needs of modern manufacturing and contribute to the advancement of industry standards.</p>
      
      <h3>Team Recognition</h3>
      <p>This award is a testament to the hard work and dedication of our entire team. From our research scientists to our field engineers, everyone has contributed to this achievement. We look forward to continuing our mission of delivering cutting-edge vision technology solutions.</p>
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    author: "CEO Office",
    tags: ["Award", "Recognition", "Innovation", "Excellence"],
  },
];

export const getArticleBySlug = (slug: string): NewsArticle | undefined => {
  return newsArticles.find((article) => article.slug === slug);
};

export const getArticleById = (id: string): NewsArticle | undefined => {
  return newsArticles.find((article) => article.id === id);
};
