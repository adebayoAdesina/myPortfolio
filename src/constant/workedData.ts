import { workedType } from "../type/type";
import { skillData } from "./skillData";

/**
 * workedData
 *
 * This file exports an array of objects representing various work experiences,
 * including the role, company, work description, skills, and duration for each
 * position. This data structure is used to display a list of work experiences
 * in the application.
 */
export const workedData: workedType[] = [
  {
    role: "Backend Developer",
    company: "AFT Solutions Limited",
    workDescription: ".NET intern",
    skills: [skillData.csharp, skillData.dotnet],
    dateFrom: "November  2025",
    dateTo: "Present",
    type: ["HYBRID", "INTERN"],
  },
  {
    role: "Frontend Software Developer",
    company: "CT'Lab Software Solutions",
    workDescription:
      "Collaborated on multiple projects like companies website, gbetpools, hohaministries, okpools and more",
    skills: [
      skillData.react,
      skillData.flutter,
      skillData.dart,
      skillData.typescript,
      skillData.javascript,
      skillData.tailwind,
      skillData.redux,
      skillData.git,
      {
        name: "Shadcn",
      },
    ],
    dateFrom: "April  2025",
    dateTo: "Present",
    type: ["FULL-TIME", "REMOTE"],
  },
  {
    role: "Frontend Website Developer",
    company: "Nouvells",
    workDescription:
      "Contributed to the development of MaketMasta, a marketplace platform,collaborating with other developers to integrate frontend with backend endpoints. ii.	Implemented core e-commerce features including product listing, add-to-cart functionality, order creation, and order management.",
    skills: [
      skillData.react,
      skillData.javascript,
      skillData.tailwind,
      skillData.git,
      skillData.redux,
      {
        name: "Shadcn",
      },
    ],
    dateFrom: "July 2025",
    dateTo: "August 2025",
    type: ["CONTRACT", "REMOTE"],
  },
  {
    role: "Front-end Website Developer",
    company: "Geecore Limited",
    workDescription:
      "Collaborated on multiple projects like companies website, website builder, Wivali AI, managed events. Contributed to the Vidxr Dashboard, an AI-powered video editing platform, enhancing frontend performance and user experience.",
    skills: [
      skillData.react,
      skillData.typescript,
      skillData.javascript,
      skillData.tailwind,
      skillData.git,
      {
        name: "Three JS",
      },
    ],
    dateFrom: "May 2024",
    dateTo: "April 2025",
    type: ["FULL-TIME"],
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    workDescription:
      "Collaborated with other developers to debug, optimize, and maintain software projects. Delivered solutions that improved functionality, user experience, and performance across client platforms.",
    skills: [
      skillData.flutter,
      skillData.dart,
      skillData.react,
      skillData.java,
      skillData.typescript,
      skillData.javascript,
      skillData.tailwind,
      skillData.git,
      {
        name: "Three JS",
      },
    ],
    dateFrom: "January 2024",
    dateTo: "April 2025",
    type: ["REMOTE"],
  },
  {
    role: "Frontend Website Developer",
    company: "CT’Lab Software Solutions",
    workDescription:
      "Developed frontend features for gbetpools.com, covering user, agent, and admin website.",
    skills: [
      skillData.react,
      skillData.typescript,
      skillData.tailwind,
      skillData.git,
    ],
    dateFrom: "October 2024",
    dateTo: "Jan 2025",
    type: ["REMOTE", "CONTRACT"],
  },
  {
    role: "Website and Mobile App Developer",
    company: "SQI",
    workDescription:
      "Gained hands-on experience in React.js and Flutter during industrial training. Built foundational skills in web and mobile app development, focusing on frontend user interfaces.",
    skills: [skillData.flutter, skillData.dart, skillData.react, skillData.git],
    dateFrom: "August 2021",
    dateTo: "January 2022",
    type: ["I.T (Industrial Training)"],
  },
];
