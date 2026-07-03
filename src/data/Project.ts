import veloxaImg from "../../public/assets/projectIMg/veloxa.webp";
import bloodDonation from "../../public/assets/projectIMg/emergencyBlood.png";
import skillbridgebd from "../../public/assets/projectIMg/skillbridgebd.png";
import projectLiveBistroBossRes from "../../public/assets/projectIMg/bistroBoss.png";
import eventdev from "../../public/assets/projectIMg/eventdev.png";
import projectLiveFruitBurst from "../../public/assets/projectIMg/fruitBurst.png";
import { StaticImageData } from "next/image";
export interface Project {
  id?: string;
  image?: StaticImageData | string;
  title?: string | undefined;
  description?: string | undefined;
  techs?: string[] | (string | undefined)[];
  github?: string | undefined;
  live?: string | undefined;

}
export const projects :Project[]= [
    {
        id: "1",
        title: "Veloxa",
        image: veloxaImg,
        description: "A full-stack MERN application that connects admins, riders, and customers through role-based dashboards, real-time delivery tracking, and secure Stripe payments. Built with React, Node.js/Express, and MongoDB, and deployed on Firebase and Vercel.",
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
        description: "A comprehensive MERN-based blood donation management platform that efficiently connects blood donors with recipients. The system includes JWT authentication, role-based dashboards, automated email notifications, donor search by district and blood group, request management, hospital tracking, Stripe payment integration, analytics dashboards, and an admin panel for complete system management.",
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
        title: "SkillBridgeBD",
        image: skillbridgebd,
        description: "SkillBridgeBD is a modern MERN stack learning platform that connects learners with educational resources through a responsive and intuitive interface. The application features secure Firebase authentication, dynamic course management, role-based access, and a seamless user experience built with React, Tailwind CSS, and MongoDB.",
        github: "https://github.com/IztihadRafid/skillbridge-bd",
        live: "https://skillbridge-bd.web.app",
        techs: ["React", "Tailwind", "Firebase", "MongoDB", "DaisyUI"],
    },
    {
        id: "4",
        title: "Bistro Boss",
        description: "A full-stack restaurant management and food ordering application built with the MERN stack. Users can browse menus, place online orders, and complete secure payments through Stripe, while administrators manage menus, users, and orders via an interactive dashboard featuring analytics and data visualization using Recharts.",
        image: projectLiveBistroBossRes,
        github: "https://github.com/IztihadRafid/Bistro-Boss-Client",
        live: "https://bistro-boss-167af.web.app",
        techs: ["React", "Tailwind", "Firebase", "MongoDB", "DaisyUI"],
    },
    {
        id: "5",
        title: "Event Developer",
        description:"Its a Modern Nextjs applicaion for Event Management, built with Nextjs 16 featured with App routing, server actions, hooks like use cache, for backend mongoose, mongodb.for handling typing error -Typescript is used. User can browse, see the Events booking forms, and manage Events with Cloudinary-powered image uploads.",
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
        id: "6",
        title: "Fruit Burst",
        description: "ruitBurst is a modern e-commerce web application for browsing and purchasing fresh fruits online. The platform offers a responsive shopping experience with product categories, detailed product pages, secure user authentication, shopping cart functionality, and an intuitive interface for seamless online ordering.",
        image: projectLiveFruitBurst,
        github: "https://github.com/IztihadRafid/Fruit-Burst",
        live: "https://iztihadrafid.github.io/Fruit-Burst",
        techs: ["HTML", "CSS", "Tailwind"],
    },
];