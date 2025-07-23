import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "Django Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "API Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: html,
  },
  {
    name: "Django",
    icon: css,
  },
  {
    name: "Flask",
    icon: javascript,
  },
  {
    name: "PostgreSQL",
    icon: typescript,
  },
  {
    name: "REST APIs",
    icon: reactjs,
  },
  {
    name: "Scikit-learn",
    icon: redux,
  },
  {
    name: "Pandas",
    icon: tailwind,
  },
  {
    name: "Power BI",
    icon: nodejs,
  },
  {
    name: "NLTK",
    icon: mongodb,
  },
  {
    name: "HTML/CSS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Heroku",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development Attaché",
    company_name: "KRA (Kenya Revenue Authority)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2025 - Present",
    points: [
      "Integrated analytics into HR reporting tools, enhancing data mapping and visualization capabilities.",
      "Enabled evidence-based decision-making, improving reporting efficiency by 30% and stakeholder insight accessibility.",
      "Debugged and optimized dynamic logic in the HR survey chatbot, improving conditional flows based on user inputs.",
      "Increased response accuracy by 25% and reduced logic errors by 40%, leading to more reliable HR data collection.",
      "Designed and launched a public-access survey feature, removing login barriers for external stakeholders.",
      "Executed system performance testing under varied load conditions, achieving a 40% improvement in response time."
    ],
  },
  {
    title: "Founder & Python Developer",
    company_name: "Floating Arrow",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "January 2023 - Present",
    points: [
      "Founded and lead a freelance development studio focused on backend systems, APIs, and automation tools using Python.",
      "Built and maintained 6+ web applications using Django and Flask for local businesses and student projects.",
      "Developed RESTful APIs, integrated third-party services, and designed PostgreSQL schemas for scalable performance.",
      "Improved legacy system efficiency by 30% through backend optimization and code refactoring.",
      "Delivered fully deployed client systems, including hosting, deployment automation, and user documentation."
    ],
  },
  {
    title: "Data Science Projects",
    company_name: "Arthur dynamics",
    icon: shopify,
    iconBg: "#383E56",
    date: "September 2024 - April 2025",
    points: [
      "Churn Prediction Model (Python, Scikit-learn): Built a logistic regression model with 82% accuracy using customer transactional data to predict churn.",
      "Interactive Sales Dashboard (Power BI): Developed a dashboard for a retail dataset integrating filters for regions, product categories, and sales reps.",
      "Sentiment Analysis Tool (Python, NLTK): Created a tool to extract customer sentiment from reviews. Integrated into a feedback analytics platform."
    ],
  },
  {
    title: "Founder & Lead Django Developer",
    company_name: "Avey Unlimited",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "January 2024 - March 2024",
    points: [
      "Operated a solo development studio delivering Django-based applications to early-stage businesses.",
      "Designed and deployed 3 full-stack web apps with Django and PostgreSQL, supporting dashboards and admin panels.",
      "Created and tested backend APIs; collaborated with clients on functional specifications and feature design.",
      "Achieved 99.9% uptime post-deployment with Heroku-based continuous deployment setup.",
      "Provided ongoing support, bug fixes, and feature updates to clients for a period of 2–3 months post-launch."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Victor's Python expertise and attention to detail helped us implement a data analysis system that transformed our decision-making process.",
    designation: "Project Manager"
  },
  {
    testimonial:
      "The Django application Victor built for our startup exceeded our expectations. His technical skills and business understanding are exceptional.",
    designation: "Founder"
  },
  {
    testimonial:
      "Victor's sentiment analysis tool helped us understand customer feedback at scale, leading to significant improvements in our service delivery.",
    designation: "Customer Experience Lead"
  },
];

const projects = [
  {
    name: "Churn Prediction Model",
    description:
      "Machine learning model with 82% accuracy that predicts customer churn using transactional data. Implemented feature engineering and class balancing techniques to improve model performance.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "HR Analytics Dashboard",
    description:
      "Interactive dashboard for HR data visualization that improved reporting efficiency by 30%. Includes filters for departments, performance metrics, and employee engagement scores.",
    tags: [
      {
        name: "power bi",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "data analysis",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sentiment Analysis Tool",
    description:
      "NLP-based tool that extracts customer sentiment from reviews and feedback. Integrated into a feedback analytics platform to provide actionable insights for business improvement.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "nltk",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
