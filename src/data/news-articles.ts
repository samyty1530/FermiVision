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
    slug: "engineering-breakthrough-pcb-programming-efficiency",
    title:
      "Engineering Breakthrough: Cutting PCB Programming Time from Hours to Minutes",
    date: "June 1, 2023",
    excerpt:
      "How a leading multilayer PCB factory in Shenzhen streamlined full-panel inspections with Fermi Vision, reducing programming time from hours to minutes.",
    content: `
      <div class="white-paper-header">
        <h2>Engineering Breakthrough in PCB Inspection Efficiency</h2>
        <p class="subtitle">How a leading multilayer PCB factory in Shenzhen streamlined full-panel inspections with Fermi Vision</p>
      </div>
      
      <h3>Executive Summary</h3>
      <p>A major multilayer PCB manufacturer in Shenzhen faced increasing complexity and demand for rapid, high-volume inspections across hundreds of board types. Traditional optical metrology systems required extensive manual programming and lacked flexibility.</p>
      
      <p>Fermi Vision addressed this bottleneck by integrating CAD auto-programming and distributed offline workflow capabilities. Programming time dropped from hours to minutes, delivering significant gains in:</p>
      
      <ul>
        <li>Throughput - Faster inspection cycles</li>
        <li>Equipment utilization - More productive machine time</li>
        <li>Inspection consistency - Reduced human error</li>
      </ul>
      
      <p>This case underscores how Fermi Vision's intelligent software and hardware integration redefine performance standards in optical metrology.</p>
      
      <h3>Background: The Legacy Limitations of Optical Metrology</h3>
      <p>Optical metrology has long been essential for quality assurance in PCB and semiconductor production. While vision systems replaced slower, manual tools, they brought their own challenges:</p>
      
      <h4>Manual Programming Overhead</h4>
      <p>Legacy systems often require manual selection of features, alignment points, and measurement logic. For high-mix production environments, this means programming hundreds of unique jobs—a time-consuming, error-prone process.</p>
      
      <h4>Lack of CAD Integration</h4>
      <p>Many vision tools still operate independently of CAD environments, limiting automation and increasing rework.</p>
      
      <h4>Offline Limitations</h4>
      <p>Traditional systems often tie programming to the inspection station itself, reducing equipment availability and operator flexibility.</p>
      
      <p><em>These limitations bottleneck yield, delay production, and strain inspection teams.</em></p>
      
      <h3>The Challenge</h3>
      <p>The customer in this case—a high-output multilayer PCB factory—needed a solution that could handle a wide array of board designs and sizes.</p>
      
      <p>Key pain points included:</p>
      <ul>
        <li>30 minutes of manual programming time per new board inspection</li>
        <li>Valuable engineer hours consumed by programming tasks</li>
        <li>Delayed new product introduction (NPI) cycles</li>
        <li>Main inspection systems tied up with programming instead of production</li>
      </ul>
      
      <p>Additionally, the customer wanted to avoid dedicating their main inspection systems solely to programming, as that further reduced operational efficiency.</p>
      
      <h3>Fermi Vision's Solution</h3>
      <p>Fermi Vision deployed an advanced system with two key innovations:</p>
      
      <h4>1. CAD Auto-Programming Engine</h4>
      <p>Working directly with the customer's design department, Fermi Vision developed a workflow where:</p>
      <ul>
        <li>CAD data could be directly ingested</li>
        <li>Complete inspection programs were automatically generated</li>
        <li>Manual setup was nearly eliminated</li>
      </ul>
      
      <h4>2. Distributed Offline Programming</h4>
      <p>Fermi Vision provided an offline programming module compatible with local network environments. This enabled:</p>
      <ul>
        <li>Engineers to write, review, and optimize inspection programs from any PC in the factory</li>
        <li>Inspection machines to focus on production use only</li>
        <li>Greater flexibility in workflow management</li>
      </ul>
      
      <h3>Results</h3>
      <p>The implementation delivered dramatic improvements across multiple metrics:</p>
      
      <ul>
        <li>Programming Time Reduction: Programming time fell from ~30 minutes per board to under 5 minutes in most cases</li>
        <li>Higher Equipment Utilization: With offline capabilities, inspection machines could focus on measurement, not setup</li>
        <li>Scalability and Consistency: New board types could be onboarded faster, with less training and lower risk of inconsistency</li>
      </ul>
      
      <h3>Industry Impact: Raising the Bar</h3>
      <p>While many vision systems still rely on static programming models and disconnected workflows, Fermi Vision's approach demonstrates what's possible when modern software engineering meets precision hardware.</p>
      
      <p>In this case, the transformation included:</p>
      
      <ul>
        <li>Integration with upstream design tools eliminated redundancies</li>
        <li>Software automation empowered operators and engineers alike</li>
        <li>Flexibility unlocked full equipment ROI, even in high-mix environments</li>
      </ul>
      
      <p><em>This is not merely an upgrade to traditional metrology—it's a transformation of how factories approach dimensional inspection.</em></p>
      
      <h3>Conclusion</h3>
      <p>As demand for speed, flexibility, and traceability grows in electronics manufacturing, Fermi Vision continues to lead with solutions that redefine expectations.</p>
      
      <p>In this Shenzhen facility, what once took hours now takes minutes—without sacrificing accuracy. For manufacturers dealing with growing complexity, Fermi Vision delivers the next generation of scalable, intelligent inspection.</p>
      
      <div class="contact-info">
        <p>Learn more at: <a href="https://www.fermivision.com">www.fermivision.com</a> or contact <a href="mailto:sales@fermivision.com">sales@fermivision.com</a> for a demo.</p>
      </div>
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    author: "Fermi Vision Engineering Team",
    tags: ["PCB Manufacturing", "Computer Vision", "Optical Metrology"],
    externalLink: "/products",
  },
  {
    id: "2",
    slug: "adaptive-metrology-export-grade-pcb-compliance",
    title: "Adaptive Metrology for Export-Grade PCB Compliance",
    date: "April 6, 2023",
    excerpt:
      "A Zhuhai PCB factory adopts Fermi Vision to ensure compliance across new and legacy U.S. standards with unmatched speed.",
    content: `
      <div class="white-paper-header">
        <h2>Adaptive Metrology for Export-Grade PCB Compliance</h2>
        <p class="subtitle">A Zhuhai PCB factory adopts Fermi Vision to ensure compliance across new and legacy U.S. standards</p>
      </div>
      
      <h3>Executive Summary</h3>
      <p>As global PCB suppliers face increasingly diverse compliance requirements, the ability to adapt inspection protocols quickly is essential. In this case, a Zhuhai-based PCB factory was tasked with dimensionally verifying export-bound boards under both old and new U.S. standards for curvature and positioning. Competing systems required separate modules or entirely new equipment to support different benchmarks—slowing throughput and inflating operational costs.</p>
      
      <p>Fermi Vision delivered a system that supported multi-standard inspection out of the box and provided custom point-cloud fitting logic within 10 days. Inspection cycle times dropped from 30 minutes to 5 minutes per board. The result: a fast, standards-compliant, future-ready solution.</p>
      
      <h3>Challenge: Fragmented Standards, Slow Systems</h3>
      <p>The customer's legacy systems—ranging from OGP to regional brands—could not reconcile curvature definitions or reference fitments across multiple versions of U.S. standards. Engineers were manually inspecting each board in 30-minute cycles, using outdated software that lacked advanced alignment logic.</p>
      
      <p>Some vendors proposed new software modules at extra cost; others lacked support for anything beyond one specific standard.</p>
      
      <h3>Solution: Universal Compliance with Fast Customization</h3>
      <p>Fermi Vision's platform shipped with native support for both old and new curvature and positional benchmarks. Within days, the engineering team added custom algorithms for 6-point reference fitting based on point-cloud data, providing a robust benchmark for evaluation. No external plugins were needed.</p>
      
      <h3>Results</h3>
      <ul>
        <li>Measurement Time: Reduced from 30 minutes to just 5 minutes per board</li>
        <li>Compliance: Passed all dimensional and positional tests across multiple U.S. standard versions</li>
        <li>Adaptability: Delivered custom logic in under 10 days, without requiring additional hardware or licensing</li>
      </ul>
      
      <p>Fermi Vision proved not only faster but dramatically more versatile than legacy systems—delivering compliance without compromise.</p>
      
      <div class="contact-info">
        <p>Learn more at: <a href="https://www.fermivision.com">www.fermivision.com</a> or contact <a href="mailto:sales@fermivision.com">sales@fermivision.com</a> for a demo.</p>
      </div>
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    tags: ["PCB Manufacturing", "Compliance", "Standards", "Metrology"],
    externalLink: "/products",
  },
  {
    id: "3",
    slug: "unlocking-high-volume-antenna-board-inspection",
    title: "8000 Dimensions, 3 Minutes, One Machine",
    date: "April 11, 2024",
    excerpt:
      "How an international PCB trader hit telecom-grade inspection standards without scaling floor space",
    content: `
      <div class="white-paper-header">
        <h2>Unlocking High-Volume Antenna Board Inspection</h2>
        <p class="subtitle">How an international PCB trader hit telecom-grade inspection standards without scaling floor space</p>
      </div>
      
      <h3>Executive Summary</h3>
      <p>An international PCB trader specializing in antenna boards faced an ambitious challenge: inspect over 8000 dimensions per board—across 200 transmitting units—while holding inspection time under 10 minutes. Traditional systems took over 40 minutes and required multiple machines running in parallel. Fermi Vision delivered a purpose-built workflow using a dual-phase pre-scan and high-speed fly-capture process that completed inspection in under 3 minutes—on a single machine.</p>
      
      <p>This case exemplifies the intersection of speed, precision, and intelligent sequencing—delivering factory-level throughput with minimal footprint.</p>
      
      <h3>Background: Scaling Inspection Throughput</h3>
      <p>High-volume antenna boards feature hundreds of densely packed circuits, each with strict line width and spacing requirements. Accurate inspection typically requires:</p>
      
      <ul>
        <li>High magnification without sacrificing field of view</li>
        <li>Fast image acquisition across large surface areas</li>
        <li>Efficient sequencing across thousands of measurements</li>
      </ul>
      
      <p>Traditional methods struggle to balance these needs without scaling up equipment and manpower.</p>
      
      <h3>Fermi Vision's Innovation</h3>
      <p>Instead of treating each transmitting unit as a separate measurement loop, Fermi Vision designed a hybrid strategy:</p>
      
      <ul>
        <li>Pre-Scan Optimization: Scanned the full board at low resolution to establish a coarse map</li>
        <li>Fly-Capture Pass: Executed rapid, high-res measurements only on identified targets using dynamic path planning</li>
      </ul>
      
      <p>This minimized movement, eliminated redundant passes, and kept cycle time under 3 minutes.</p>
      
      <h3>Results</h3>
      <ul>
        <li>Time Saved: Cut total inspection time from 40 minutes to <3 minutes</li>
        <li>Equipment Consolidation: From 6+ machines to just one</li>
        <li>Accuracy Maintained: No compromise in dimensional precision</li>
      </ul>
      
      <p>With Fermi Vision's help, the trader met aggressive SLAs for high-volume telecom customers while simplifying floor layout and reducing operator demand.</p>
      
      <p>This level of intelligent process engineering is a hallmark of Fermi Vision's commitment to scale without trade-offs.</p>
      
      <div class="contact-info">
        <p>Learn more at: <a href="https://www.fermivision.com">www.fermivision.com</a> or contact <a href="mailto:sales@fermivision.com">sales@fermivision.com</a> for a demo.</p>
      </div>
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
    tags: ["PCB Manufacturing", "Computer Vision", "Optical Metrology"],
    externalLink: "/products",
  },
  {
    id: "4",
    slug: "sk-hynix-semiconductor-efficiency-leap",
    title: "Fermi Vision Powers Semiconductor Efficiency Leap at SK Hynix",
    date: "September 9, 2024",
    excerpt:
      "Precision algorithms and ultra-fast imaging reduce inspection time from 50+ minutes to under 3",
    content: `
      <div class="white-paper-header">
        <h2>Fermi Vision Powers Semiconductor Efficiency Leap at SK Hynix</h2>
        <p class="subtitle">Precision algorithms and ultra-fast imaging reduce inspection time from 50+ minutes to under 3</p>
      </div>
      
      <p><em>Seoul, South Korea — September 9, 2024</em></p>
      
      <p>In a major advancement for semiconductor inspection technology, SK Hynix has adopted Fermi Vision's advanced vision system for full-panel inspection of gold-powder terminal diameters and positions across high-density IC substrates.</p>
      
      <p>With more than 300,000 inspection targets per board and irregular, noise-prone surface materials, SK Hynix's traditional systems were overwhelmed — taking over 50 minutes per board and requiring significant human oversight.</p>
      
      <p>Fermi Vision's team responded with a highly customized configuration featuring high-magnification global shutter imaging and predictive alignment algorithms that slashed inspection time to 160 seconds while improving data fidelity.</p>
      
      <h3>Key Innovations</h3>
      
      <ul>
        <li><strong>Predictive Targeting:</strong> Only 5% of points required alignment due to intelligent prediction logic, with 3% minor rechecks.</li>
        <li><strong>Compressed Sampling:</strong> Fly-capture with high magnification enabled full-resolution scans without sacrificing cycle time.</li>
        <li><strong>High Noise Tolerance:</strong> Advanced denoising and edge detection handled complex gold-powder contours with ease.</li>
      </ul>
      
      <p>As a result of this performance, Fermi Vision's solution passed SK Hynix's internal benchmarks and secured additional orders from both SKC and ISC.</p>
      
      <p>Fermi Vision continues to expand its presence in the semiconductor supply chain, redefining how the world's most advanced substrates are measured and validated.</p>
      
      <div class="contact-info">
        <p>Learn more at: <a href="https://www.fermivision.com">www.fermivision.com</a> or contact <a href="mailto:sales@fermivision.com">sales@fermivision.com</a> for a demo.</p>
      </div>
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    tags: ["Semiconductor", "SK Hynix", "Computer Vision", "Optical Metrology"],
    externalLink: "/products",
  },
  {
    id: "5",
    slug: "fermi-vision-replaces-manual-pin-gauging-cad-driven-optical-inspection",
    title:
      "Fermi Vision Replaces Manual Pin Gauging with CAD-Driven Optical Inspection",
    date: "February 1, 2025",
    excerpt:
      "Thousands of press-fit holes measured in seconds with a physically simulated contact algorithm (PGA)",
    content: `
      <div class="white-paper-header">
        <h2>Auto-Through-Hole Inspection Revolutionizes PCB QA at Leading Shenzhen Factory</h2>
        <p class="subtitle">Thousands of press-fit holes measured in seconds with a physically simulated contact algorithm (PGA)</p>
      </div>
      
      <p><em>Shenzhen, China — February 1, 2025</em></p>
      
      <p>A major PCB manufacturing facility has retired its legacy pin gauges in favor of a Fermi Vision-powered inspection system that measures thousands of press-fit holes in seconds — all without human intervention.</p>
      
      <p>Previously, QA teams relied on manual pin tools to validate hole diameters — a labor-intensive process prone to variability and fatigue. While vision systems existed, most failed to simulate the true mechanical interface of a press-fit pin.</p>
      
      <p>Fermi Vision solved this problem through a new proprietary algorithm that physically simulates contact behavior using enhanced optical modeling and high-pass filtering. CAD data is imported directly, enabling full-board, multi-thousand hole inspection at the click of a button.</p>
      
      <h3>Breakthrough Highlights:</h3>
      
      <ul>
        <li><strong>Auto-Hole Detection:</strong> Holes are measured in bulk with CAD alignment; no individual setup required</li>
        <li><strong>Physical Simulation Engine:</strong> Mimics real-world press-fit insertion to produce results equivalent to manual gauge fitting</li>
        <li><strong>Consistent Results:</strong> Measurements matched experienced human inspectors with higher repeatability and traceability</li>
      </ul>
      
      <p>A company spokesperson noted: &quot;We had a long-standing challenge — even the best software couldn't replicate how a pin would behave in the hole. Fermi Vision nailed it.&quot;</p>
      
      <p>This deployment further underscores Fermi Vision's unique position in the industry — providing not just optical measurements, but opto-mechanical insight with unmatched efficiency.</p>
      
      <div class="contact-info">
        <p>Learn more at: <a href="https://www.fermivision.com">www.fermivision.com</a> or contact <a href="mailto:sales@fermivision.com">sales@fermivision.com</a> for a demo.</p>
      </div>
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    tags: [
      "PCB Manufacturing",
      "Computer Vision",
      "Optical Metrology",
      "Quality Assurance",
    ],
    externalLink: "/products",
  },
];

export const getArticleBySlug = (slug: string): NewsArticle | undefined => {
  return newsArticles.find((article) => article.slug === slug);
};

export const getArticleById = (id: string): NewsArticle | undefined => {
  return newsArticles.find((article) => article.id === id);
};
