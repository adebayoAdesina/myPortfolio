import { ProjectType } from "../type/type";
import {
  arimart1,
  arimart2,
  arimart3,
  gbetAdminProfile,
  gbetDownloadPage,
  wivali1,
  wivali2,
  wivali3,
} from "./appImage";

export const projectData: ProjectType[] = [
  {
    title: "Wivali AI-Powered Website Builder",
    description: `
        <div>
            At GeeCore Limited, I played a key role 
            in designing and developing the main page 
            and user dashboard for Wivali, an AI-powered 
            website builder. The main page showcases the platform's 
            innovative features, including AI-driven customization, 
            seamless payment integration, and advanced SEO tools. 
            The user dashboard provides an intuitive interface 
            for managing website content, tracking performance 
            metrics, and accessing various tools. I collaborated 
            closely with other developers to ensure a cohesive and 
            user-friendly experience across the platform.
        </div>
    `,
    image: [wivali1, wivali2, wivali3],
    links: {
      website: "https://www.wivali.ai/",
    },
    tools: [
      {
        icon: "devicon:react",
        name: "React",
      },
      { icon: "devicon:typescript", name: "TypeScript" },
      {
        icon: "devicon:tailwindcss",
        name: "Tailwind",
      },
      {
        icon: "devicon:redux",
        name: "Redux",
      },
    ],
  },
  {
    title: "Gbetpools",
    description: `
        <div>
            <p class="description">
            As a freelance frontend developer, I took on a side gig to design and develop the user dashboard, admin dashboard, and the Aviator game for an innovative betting website. My contributions included:
            </p>
            <ul class="description">
            <li><strong>User Dashboard:</strong> Created a user-friendly interface for staking games, tracking games, funding and withdrawing game funds.</li>
                <li><strong>Admin Dashboard:</strong> Developed a robust admin panel for managing users, settings, and overall platform administration.</li>
                <li><strong>Aviator Game:</strong> Implemented an engaging and interactive Aviator game, enhancing the entertainment value of the platform.</li>
            </ul>
            <p class="description">
                My role involved collaborating closely with the backend developer to ensure a cohesive and seamless user experience across all components. This project demonstrates my expertise in frontend development, user interface design, and creating engaging web applications.
                </p>
        </div>
    `,
    image: [gbetAdminProfile, gbetDownloadPage],
    links: {
      website: "https://gbetpools.com/",
    },
    tools: [
      {
        icon: "devicon:react",
        name: "React",
      },
      {
        icon: "devicon:typescript",
        name: "TypeScript",
      },
      {
        icon: "devicon:tailwindcss",
        name: "Tailwind",
      },
      {
        icon: "devicon:redux",
        name: "Redux",
      },
    ],
  },
  {
    title: "Arimart",
    description: `
    <div>
            <p class="description">
               As a freelance frontend developer, I contributed to the design and development of Arimart, an online marketplace dedicated to bringing authentic African ingredients to users' kitchens. My contributions included:
            </p>
            <ul class="description">
                <li><strong>User Dashboard:</strong> Developed an intuitive user interface for managing orders, tracking deliveries, and accessing account information.</li>
                <li><strong>Admin Dashboard:</strong> Created a robust admin panel for managing products, categories, users, and orders, ensuring smooth operations for the marketplace.</li>
               </ul>
            <p class="description">
                My role involved collaborating closely with the backend developer to ensure a cohesive and seamless user experience across all components. This project demonstrates my expertise in frontend development, user interface design, and creating engaging web applications.
                </p>
        </div>
    `,
    image: [arimart1, arimart2, arimart3],
    links: {
      website: "https://iterlen.netlify.app/",
    },
    tools: [
      {
        icon: "devicon:react",
        name: "React",
      },
      {
        icon: "devicon:typescript",
        name: "TypeScript",
      },
      {
        icon: "devicon:tailwindcss",
        name: "Tailwind",
      },
      {
        icon: "devicon:redux",
        name: "Redux",
      },
    ],
  },
];
