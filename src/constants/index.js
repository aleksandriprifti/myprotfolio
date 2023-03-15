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
  git,
  figma,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
  logo,
} from "../assets";
import Sqlserver from "../assets/tech/sqlserver.png";
import IkubInfo from "../assets/company/ikubinfo.png";
import Facilization from "../assets/company/facilization.png";
import NetCore from "../assets/tech/netcore.png";
import Intesa from "../assets/company/intesa.png";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Project Manager",
    icon: backend,
  },
  {
    title: "Scrum Master",
    icon: creator,
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: NetCore,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "sqlserver",
    icon: Sqlserver,
  },
];

const experiences = [
  {
    title: "Web Developer | React.js",
    company_name: "Freelancer",
    icon: logo,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    points: [
      "Developing web applications using tech stack: React.js, HTML5, CSS3, .Net Core, C#, Material UI, AXIOS, MobX",
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "IT Project Manager/Scrum Master",
    company_name: "IkubInfo",
    icon: IkubInfo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Coordinating and managing project teams (SLA/DEV).",
      "Project Manager for the SLA Agreement e-government platform for Social Assistance System (1. Social Assistance 2. Disability Assistance 3. Social Services).",
      "Project Manager for development of internal management systems.",
      "Responsible for managing project scope, stakeholders, time, budget, risks, change requests.",
      "Worked close with all stakeholders to understand and analyze their needs, design, and lead implementation of report packages.",
      "Responsible for producing and maintaining project documentation.",
    ],
  },
  {
    title: "IT Project Manager",
    company_name: "Facilizaton",
    icon: Facilization,
    iconBg: "#383E56",
    date: "Jul 2012 - Jul 2017",
    points: [
      "Gathering technical specifications.",
      "Customer Support on Flexcube Core banking System.",
      "Requirement Validation and Test Plan Preparation.",
      "Customer Specific Customization.",
      "Onsite support, managing “Freshdesk” support ticketing system. Developed solutions (as part of a team and alone) that automate. different activities.",
    ],
  },
  {
    title: "Assistant Branch Manager",
    company_name: "Intesa SanPaolo Bank",
    icon: Intesa,
    iconBg: "#E6DEDD",
    date: "Feb 2009 - Jul 2012",
    points: [
      "Working with Oracle Database using SQL.",
      "Working with Flexcube Core Banking System.",
      "Enforce dual control procedures at all times.",
      "Maintain monthly branch efficiency logs.",
      "Keep staff informed of pertinent changes in operational policy and procedures.",
    ],
  },
  {
    title: "IT Assistant",
    company_name: "Intesa SanPaolo Bank",
    icon: Intesa,
    iconBg: "#E6DEDD",
    date: "Feb 2009 - Jul 2012",
    points: [
      "Producing reports from Oracle DB using SQL.",
      "Bank website content editing and maintenance.",
      "Developing new marketing strategies.",
      "Promoting banking products and services.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Debitis ducimus doloribus id et velit placeat eveniet nesciunt aliquid praesentium odio!.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id temporibus corrupti quia labore voluptatem similique ut, aliquid assumenda! ",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Debitis ducimus doloribus id et velit placeat eveniet nesciunt aliquid praesentium odio!.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Event Manager",
    description:
      "Web-based platform that allows users to search, create, edit, and delete an activity/event taking place in a specific location",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: ".netcore",
        color: "pink-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, testimonials, projects };
