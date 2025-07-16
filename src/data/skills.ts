
import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["JavaScript", "Java", "Python", "C"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["HTML/CSS", "React", "Tailwind CSS", "Swing"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Node.js", "Express.js", "Flask", "REST APIs", "JDBC"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Firebase", ],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Git", "AWS" ],
  },
  {
    name: "Design",
    icon: Palette,
    skills: ["Figma", "Canva", "Prototyping"],
  },
];
