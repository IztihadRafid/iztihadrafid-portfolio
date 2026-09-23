import veloxaImg from "../../public/assets/projectIMg/veloxa.webp";
import bloodDonation from "../../public/assets/projectIMg/emergencyBlood.png";
import skillbridgebd from "../../public/assets/projectIMg/skillbridgebd.png";
import projectLiveBistroBossRes from "../../public/assets/projectIMg/bistroBoss.png";
import eventdev from "../../public/assets/projectIMg/eventdev.png";
import projectLiveFruitBurst from "../../public/assets/projectIMg/fruitBurst.png";
import vista from "../../public/assets/projectIMg/vista.webp";
import shipnow from "../../public/assets/projectIMg/shipnow.webp";
import estatemarket from "../../public/assets/projectIMg/estatemarket.webp";
import vistaltd from "../../public/assets/projectIMg/vistaltd.png";
import devdesk from "../../public/assets/projectIMg/devdesk.webp";
import { StaticImageData } from "next/image";
export interface Project {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
  techs: string[];
  github: string;
  live: string;
}
export const projects: Project[] = [
  {
    id: "1",
    title: "Veloxa",
    image: veloxaImg,
    description:
      "Full-stack MERN application connecting admins, riders, and customers through role-based dashboards\nReal-time delivery tracking and secure Stripe payments\nBuilt with React, Node.js/Express, and MongoDB\nDeployed on Firebase and Vercel",
    github: "https://github.com/IztihadRafid/veloxa-client",
    live: "https://zapshift-a89f5.web.app",
    techs: [
      "React",
      "Tailwind",
      "ShadCN",
      "Firebase",
      "MongoDB",
      "Node.js",
      "ExpressJs",
      "ApexCharts",
    ],
  },
  {
    id: "2",
    title: "Blood Donation",
    image: bloodDonation,
    description:
      "Comprehensive MERN-based blood donation platform connecting donors with recipients\nJWT authentication and role-based dashboards\nDonor search by district and blood group, with request and hospital management\nAutomated email notifications via Nodemailer\nStripe payment integration and analytics dashboards\nFull admin panel for system management",
    github: "https://github.com/IztihadRafid/EmergenceyBloodDonation-Client",
    live: "https://emergencyblooddonation-d3909.web.app",
    techs: [
      "React",
      "Tailwind",
      "DaisyUI",
      "Firebase",
      "MongoDB",
      "Nodemailer",
    ],
  },
  {
    id: "3",
    title: "Estatemarket",
    description:
      "Full-stack real estate marketplace for browsing, searching, and filtering property listings\nAuthentication via email/password and Google OAuth using Better Auth\nAuthenticated users can list properties with image uploads via Cloudinary\nProperty inquiry emails sent through Resend using React Email templates\nBuilt with Next.js App Router, Prisma, and PostgreSQL (Neon)\nFully responsive UI with Tailwind CSS",
    image: estatemarket,
    github: "https://github.com/IztihadRafid/EstateManagment",
    live: "https://estate-managment.vercel.app/",
    techs: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Tailwind CSS",
      "Cloudinary",
      "Resend",
      "Zustand",
    ],
  },
  {
    id: "4",
    title: "DevDesk",
    description: `DevDesk is a full-stack SaaS platform unifying issue tracking, real-time team chat, and AI-assisted development tools.
Combined bug tracking and team chat into one product
AI Bug Analyzer suggests root cause, test cases, and edge cases — requires explicit approval before any changes
Server-enforced RBAC with 5 roles (Owner, Admin, Developer, Tester, Viewer).
Real-time project chat via Ably, with MongoDB as the persistent source of truth
Full issue lifecycle tracking with activity audit trail and dashboard analytics`,
    image: devdesk,
    github: "https://github.com/IztihadRafid/devdesk",
    live: "https://devdesk-woad.vercel.app",
    techs: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Authjs",
      "Ably (real-time)",
      "Groq (AI)",
    ],
  },
  {
    id: "5",
    title: "Bistro Boss",
    description:
      "Full-stack restaurant management and food ordering application built with the MERN stack\nUsers can browse menus, place online orders, and complete secure payments through Stripe\nAdmins manage menus, users, and orders via an interactive dashboard\nAnalytics and data visualization powered by Recharts",
    image: projectLiveBistroBossRes,
    github: "https://github.com/IztihadRafid/Bistro-Boss-Client",
    live: "https://bistro-boss-167af.web.app",
    techs: ["React", "Tailwind", "Firebase", "MongoDB", "DaisyUI"],
  },
  {
    id: "6",
    title: "Event Developer",
    description:
      "Modern Next.js 16 application for event management, using the App Router and Server Actions\nUses the use cache hook for optimized data fetching\nBackend powered by Mongoose and MongoDB, with TypeScript for type safety\nUsers can browse events, use booking forms, and manage events with Cloudinary-powered image uploads",
    image: eventdev,
    github: "https://github.com/IztihadRafid/EventDeveloper",
    live: "https://eventdeveloper.vercel.app",
    techs: [
      "NextJS",
      "Mongoose",
      "Cloudinary",
      "HTML",
      "CSS",
      "TailwindCSS",
      "React Bits",
      "MongoDB",
    ],
  },
  {
    id: "7",
    title: "Fruit Burst",
    description:
      "Modern e-commerce web application for browsing and purchasing fresh fruits online\nProduct categories and detailed product pages\nSecure user authentication and shopping cart functionality\nResponsive, intuitive interface for seamless online ordering",
    image: projectLiveFruitBurst,
    github: "https://github.com/IztihadRafid/Fruit-Burst",
    live: "https://iztihadrafid.github.io/Fruit-Burst",
    techs: ["HTML", "CSS", "Tailwind"],
  },
  {
    id: "8",
    title: "Vista Systech Ltd.",
    description:
      "Corporate website for Vista SysTech, delivering innovative technology solutions for client success\nBuilt on WordPress with the Crafto theme and Elementor Pro\nOptimized for SEO with RankMath and served through Cloudflare",
    image: vista,
    github: "/",
    live: "https://vistasystech.com/",
    techs: [
      "Wordpress",
      "Elementor Pro",
      "Php",
      "Crafto Theme",
      "Cloudflare",
      "RankMath SEO",
    ],
  },
  {
    id: "9",
    title: "Vista Systech",
    description:
      "Internal web application built for Vista Systech Ltd. during my internship\nDeveloped with Next.js and TypeScript for a type-safe, scalable frontend\nUses MongoDB for data storage and shadcn/ui for accessible, consistent UI components\nImage handling via Cloudinary and performance/traffic insights via Google Analytics\nDeployed and served through Cloudflare",
    image: vistaltd,
    github: "/",
    live: "https://vistasystech.eu",
    techs: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "ShadCN",
      "Cloudinary",
      "Google Analytics",
      "Cloudflare",
    ],
  },
  {
    id: "10",
    title: "ShipNow",
    description:
      "Logistics dashboard for managing shipments, tracking deliveries, and handling invoices\nBuilt from Figma design specs with pixel-accurate implementation\nFully responsive layouts across desktop, tablet, and mobile\nData visualization powered by ApexCharts",
    image: shipnow,
    github: "https://github.com/IztihadRafid/shipnow",
    live: "https://shipnow-gules.vercel.app",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "ApexCharts", "React"],
  },
  {
    id: "11",
    title: "SkillBridgeBD",
    image: skillbridgebd,
    description:
      "Modern MERN stack learning platform connecting learners with educational resources\nSecure Firebase authentication with role-based access\nDynamic course management and a responsive, intuitive interface\nBuilt with React, Tailwind CSS, and MongoDB",
    github: "https://github.com/IztihadRafid/skillbridge-bd",
    live: "https://skillbridge-bd.web.app",
    techs: ["React", "Tailwind", "Firebase", "MongoDB", "DaisyUI"],
  },
];
