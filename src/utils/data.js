import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

// Import Images

export const skills_category = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "React", level: 95, color: "bg-red-500" },
      { name: "React", level: 95, color: "bg-yellow-500" },
      { name: "React", level: 95, color: "bg-green-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Node.js", level: 95, color: "bg-blue-500" },
      { name: "React", level: 95, color: "bg-red-500" },
      { name: "React", level: 95, color: "bg-yellow-500" },
      { name: "React", level: 95, color: "bg-green-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "Node.js", level: 95, color: "bg-blue-500" },
      { name: "MongoDB", level: 95, color: "bg-red-500" },
      { name: "React", level: 95, color: "bg-yellow-500" },
      { name: "React", level: 95, color: "bg-green-500" },
    ],
  },
];

export const tech_stack = ["JavaScript", "HTML5", "CSS3", "Vite"];

export const stats = [
  {
    number: "10+",
    label: "Projects Completed",
  },
  {
    number: "3+",
    label: "Years Experience",
  },
  {
    number: "15+",
    label: "Technologies",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
  },
];

export const projects = [
  {
    id: 1,
    title: "Something",
    description: "ABCDEF",
    image: "",
    tags: ["React", "NextJS"],
    liveUrl: "#",
    gitUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Something",
    description: "ABCDEF",
    image: "",
    tags: ["React", "NextJS"],
    liveUrl: "#",
    gitUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Something",
    description: "ABCDEF",
    image: "",
    tags: ["React", "NextJS"],
    liveUrl: "#",
    gitUrl: "#",
    featured: false,
    category: "Web App",
  },
  {
    id: 4,
    title: "Something",
    description: "ABCDEF",
    image: "",
    tags: ["React", "NextJS"],
    liveUrl: "#",
    gitUrl: "#",
    featured: false,
    category: "Web App",
  },
];

export const journey_steps = [
  {
    year: "2020",
    title: "ABC",
    company: "SDF",
    description: "adsagjh",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2020",
    title: "ABC",
    company: "SDF",
    description: "adsagjh",
    icon: Briefcase,
    color: "bg-blue-500",
  },
  {
    year: "2020",
    title: "ABC",
    company: "SDF",
    description: "adsagjh",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
  {
    year: "2020",
    title: "ABC",
    company: "SDF",
    description: "adsagjh",
    icon: Award,
    color: "bg-blue-500",
  },
];

export const passions = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continous Learning",
    description: "Always exploring new technologies and best practices",
  },
];

export const social_links = [
  {
    name: "Github",
    icon: FiGithub,
    url: "",
    color: "hover:text-gray-400",
    bgColor: "hover:text-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "",
    color: "hover:text-blue-400",
    bgColor: "hover:text-blue-500/10",
  },
  {
    name: "Instagram",
    icon: FiInstagram,
    url: "",
    color: "hover:text-red-400",
    bgColor: "hover:text-red-500/10",
  },
];

export const contact_info = [
  {
    icon: MapPin,
    label: "Location",
    value: "Kolkata, West Bengal",
  },
  {
    icon: Mail,
    label: "Email",
    value: "nilanjan.s.1920@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9007050971",
  },
];
