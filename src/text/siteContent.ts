export type Photo = [path: string, title: string, collection: string];

export const photos: Photo[] = Array.from({ length: 23 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  const pngImages = new Set(["15", "18"]);
  return [
    `images/canvas/my-canvas-${number}.${pngImages.has(number) ? "png" : "jpg"}`,
    `Canvas ${number}`,
    "My Canvas",
  ];
});

export const work = [
  {
    period: "2026, Now",
    company: "Meta",
    role: "Data Scientist",
    logo: "images/companies/meta-logo.jpg",
    summary: "Turning product behavior into predictive and AI-powered decisions.",
    bullets: [
      "Build predictive models and LLM-powered analytical workflows with Python and SQL.",
      "Translate behavioral signals into measurable product recommendations.",
      "Partner across product, engineering and business teams to operationalize insights.",
    ],
  },
  {
    period: "2024, 2026",
    company: "Pharmavite",
    role: "Lead Data Scientist",
    logo: "images/companies/pharmavite-logo.png",
    summary: "Led forecasting and decision-intelligence initiatives across commercial teams.",
    bullets: [
      "Led a cross-functional team of five on forecasting and analytical products.",
      "Built weekly forecasting systems reaching 97% model accuracy.",
      "Centralized Fabric workflows and Power BI reporting, contributing about $500K in savings.",
    ],
  },
  {
    period: "2023, 2024",
    company: "Isazi",
    role: "Data Scientist",
    logo: "images/companies/isazi-logo.png",
    summary: "Applied computer vision and transformers to retail shelf intelligence.",
    bullets: [
      "Prepared 35K+ grocery images for product-specific training datasets.",
      "Fine-tuned Pix2Struct models for shelf, price and product identification.",
      "Balanced model precision with practical mobile inference constraints.",
    ],
  },
  {
    period: "2021, 2023",
    company: "Merkle",
    role: "Data Scientist, Marketing",
    logo: "images/companies/merkle-logo.png",
    summary: "Connected experimentation and customer modeling to marketing outcomes.",
    bullets: [
      "Built segmentation and A/B analyses that improved click-to-open rate by 20%.",
      "Developed XGBoost propensity models that increased return on ad spend by 40%.",
      "Used SQL, Snowflake, R and SAS to score audiences and optimize campaigns.",
    ],
  },
  {
    period: "Early career",
    company: "Pergo",
    role: "Data Analyst",
    logo: "images/companies/pergo-logo.png",
    summary: "Built the reporting and analytical foundation for data-informed business decisions.",
    bullets: [
      "Prepared and analyzed commercial and operational datasets.",
      "Built recurring KPI reports and dashboards for business stakeholders.",
      "Surfaced customer and product trends to support planning decisions.",
    ],
  },
];

export const projects = [
  { name: "Agentic AI Learning Lab", repo: "AgenticAI", href: "https://github.com/Codewithtej/AgenticAI", description: "A notebook-driven exploration of agentic workflows built from NLP and transformer foundations.", stack: ["LangGraph", "NLP", "Jupyter"] },
  { name: "Continual-Learning RAG", repo: "Wikipedia-Continual-Learning-RAG", href: "https://github.com/Codewithtej/Wikipedia-Continual-Learning-RAG", description: "A modular Python RAG pipeline with preprocessing, memory and continual knowledge ingestion.", stack: ["Python", "RAG", "LLMs"] },
  { name: "Retail Pix2Struct", repo: "isazi_pix2struct", href: "https://github.com/Codewithtej/isazi_pix2struct", description: "Vision-transformer experiments for extracting structured product information from retail imagery.", stack: ["Pix2Struct", "PyTorch", "OCR"] },
  { name: "Wind Power Forecasting", repo: "Time-Series--prophet-Sarimax", href: "https://github.com/Codewithtej/Time-Series--prophet-Sarimax", description: "Forecasting active wind power with SARIMAX and ETS using exogenous weather and turbine signals.", stack: ["SARIMAX", "ETS", "Statsmodels"] },
  { name: "ML Algorithms from NumPy", repo: "ML-algortithms-using-only-numpy", href: "https://github.com/Codewithtej/ML-algortithms-using-only-numpy", description: "From-scratch implementations of regression, trees, random forests, boosting and Naive Bayes.", stack: ["NumPy", "Optimization", "ML internals"] },
  { name: "Neural Lane Detection", repo: "Lane-Detection-Algorithm", href: "https://github.com/Codewithtej/Lane-Detection-Algorithm", description: "SegNet and CNN-LSTM lane segmentation with geometric curvature and vehicle-offset estimation.", stack: ["Keras", "OpenCV", "CNN-LSTM"] },
];

export const recommendations = [
  { quote: "Tej, has strong technical data science skills and helped to transform our data forecasting process to improve business efficiency, he has a great attitude and desire to solve business problems and works well with other team members to achieve objectives that will improve outcomes.", name: "Bryan Donaldson", role: "EVP / Chief Sales Officer" },
  { quote: "I have the honor of working with Tej on launching our forecasting model and building analytic tools to improve our processes. Tej brings in a solution based mindset. He also thinks very creatively. He has the unique ability to see the business need and the technical solution simultaneously.", name: "Kara Siak", role: "DVP, Customer Marketing, Sales Strategy & Operations" },
  { quote: "I had the privilege of managing Tej at Pharmavite as he helped us develop and build a custom Commercial Forecasting tool that considers various business drivers with distinct models for each. Despite complexity, Tej delivered a solution that is automated and accurate, allowing us to more efficiently and accurately plan our business. In addition to his strong technical skills in Data Science and Data Engineering, Tej is a collaborative partner across the organization. He is curious, excited to learn, and eager to solve business problems with custom solutions. He will be an asset to any team with the good fortune of hiring him!", name: "Janae Metzer", role: "Supply Chain Leader, Demand Planning & IBP" },
  { quote: "His ability to ask the right questions and his background research, not only helped to facilitate enriching discussions in the class but also reflected his potential for research.", name: "Dr. Goutham Simha G D", role: "Department of Electronics & Communication Engineering" },
  { quote: "Within the first few months of joining the team, he was able to establish himself as a crucial team member by analyzing and creating the most challenging business needs. His willingness to work long hours and make extra efforts to complete his tasks showed that he genuinely loved what he did.", name: "Pravanjan Patra", role: "Senior Manager" },
  { quote: "I witnessed him coordinating well with the group and delegating work to ensure that the team moved forward on schedule demonstrating his leadership and excellent communication skills.", name: "Dr. Shobha M E", role: "Assistant Professor, Department of Mathematics" },
];

export const contact = {
  linkedin: "https://www.linkedin.com/in/tejdavuluri",
  email: "tejdavuluri.12@gmail.com",
  phoneDisplay: "415-967-9463",
  phoneHref: "+14159679463",
};
