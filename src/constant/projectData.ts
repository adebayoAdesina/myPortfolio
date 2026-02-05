import { ProjectType } from "../type/type";
import {
  arimart1,
  arimart2,
  arimart3,
  gbetAdminProfile,
  gbetDownloadPage,
  getLinked1,
  getLinked2,
  maketmasta,
  maketmasta2,
  okpools1,
  okpools2,
  spaceWebsite1,
  spaceWebsite2,
  spaceWebsite3,
  ticTacToe1,
  ticTacToe2,
  wivali1,
  wivali2,
  wivali3,
} from "./appImage";
import { skillData } from "./skillData";

/**
 * projectData
 *
 * This file exports an array of objects representing various projects,
 * including details such as the title, description, images, links,
 * and tools used for each project. This data structure is used to
 * display a list of projects in the application.
 */
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
      skillData.react,
      skillData.typescript,
      skillData.tailwind,
      skillData.redux,
      skillData.framer_motion,
      skillData.git,
    ],
  },
  {
    title: "Gbetpools",
    description: `
        <div>
            <p class="description">
            As a freelance frontend developer, I took on a side gig to design and develop the user dashboard, admin dashboard, and the Aviator game for an innovative betting website. My contributions included:
            </p>
            </br>
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
      skillData.flutter,
      skillData.dart,
      skillData.react,
      skillData.typescript,
      skillData.tailwind,
      skillData.redux,
      skillData.git,
      skillData.firebase,
    ],
  },
  {
    title: "Okpools",
    description: `
        <div>
            <p class="description">
            I contributed significantly to the frontend development of OKPoolsBet, building responsive user interfaces, optimizing performance, and ensuring a seamless user experience across devices.
            </p>
            
            <p class="description">
                My role involved collaborating closely with the backend developer to ensure a cohesive and seamless user experience across all components. This project demonstrates my expertise in frontend development, user interface design, and creating engaging web applications.
                </p>
        </div>
    `,
    image: [okpools1, okpools2],
    links: {
      website: "https://okpoolsbet.com/",
    },
    tools: [
      skillData.react,
      skillData.typescript,
      skillData.tailwind,
      skillData.redux,
      skillData.git,
    ],
  },
  {
    title: "MaketMasta",
    description: `
        <div>
            <p class="description">
            I contributed significantly to the frontend development of OKPoolsBet, building responsive user interfaces, optimizing performance, and ensuring a seamless user experience across devices.
            </p>
            
            <p class="description">
                My role involved collaborating closely with the backend developer to ensure a cohesive and seamless user experience across all components. This project demonstrates my expertise in frontend development, user interface design, and creating engaging web applications.
                </p>
        </div>
    `,
    image: [maketmasta, maketmasta2],
    links: {
      website: "https://maketmasta.com/",
    },
    tools: [
      skillData.react,
      skillData.typescript,
      skillData.tailwind,
      skillData.zod,
      skillData.git,
    ],
  },
  {
    title: "Arimart",
    description: `
    <div>
            <p class="description">
               As a freelance frontend developer, I contributed to the design and development of Arimart, an online marketplace dedicated to bringing authentic African ingredients to users' kitchens. My contributions included:
            </p>
            </br>
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
      skillData.react,
      skillData.typescript,
      skillData.tailwind,
      skillData.redux,
      skillData.git,
    ],
  },
  {
    title: "GetLinked Challenge",
    description: `
    <div>
            <p class="description">
               This project presented several challenges, including integrating complex features, optimizing the site for performance, and ensuring a responsive design across various devices. Overcoming these obstacles has not only enhanced my technical skills but also reinforced my problem-solving abilities.
            </p>
            
        </div>
    `,
    image: [getLinked1, getLinked2],
    links: {
      website: "https://getlinkedchallenge.netlify.app/",
      github: "https://github.com/adebayoAdesina/GetlinkedChallenge",
    },
    tools: [
      skillData.react,
      skillData.javascript,
      skillData.css,
      skillData.git,
      skillData.redux,
    ],
  },
  {
    title: "Space Tourism Website",
    description: `
    <div>
            <p class="description">
               I designed and developed an engaging and visually stunning space tourism website, focusing solely on front-end code and user interface design. This project highlights my expertise in creating responsive, user-friendly, and aesthetically pleasing web pages.
            </p>
            
        </div>
    `,
    image: [spaceWebsite1, spaceWebsite2, spaceWebsite3],
    links: {
      website: "https://awesome-shockley-cc701e.netlify.app/",
      github: "https://github.com/adebayoAdesina/space-tourism-website",
    },
    tools: [
      skillData.react,
      skillData.javascript,
      skillData.css,
      skillData.redux,
    ],
  },
  {
    title: "Tic Tac Toe",
    description: `
    <div>
           <p class="description">
               I designed and developed a fully functional Tic Tac Toe game, showcasing my skills in front-end development and user interface design. This project demonstrates my ability to create interactive and engaging web applications.
            </p>
            </br>
            <ul class="description">
                <li><strong>User-Friendly Interface:</strong> The game features a clean and intuitive interface, allowing users to easily enter their information, select their symbols, and start playing.</li>
                <li><strong>Responsive Design:</strong> Ensured the game is responsive and works seamlessly across various devices, from desktops to mobile phones.</li>
                <li><strong>Interactive Elements:</strong> Incorporated interactive elements, such as score tracking, restart, and end game options, to enhance the user experience.</li>
                <li><strong>HTML/CSS/JavaScript:</strong> Utilized HTML for structure, CSS for styling, and JavaScript for game logic and interactivity.</li>
               </ul>
            <p class="description">
                My role involved collaborating closely with the backend developer to ensure a cohesive and seamless user experience across all components. This project demonstrates my expertise in frontend development, user interface design, and creating engaging web applications.
                </p>
        </div>
    `,
    image: [ticTacToe1, ticTacToe2],
    links: {
      website: "https://tic-tac-toe789.netlify.app/",
      github: "https://github.com/adebayoAdesina/Draw-Game-Tic-Tac-Toe",
    },
    tools: [skillData.javascript, skillData.css, skillData.git, skillData.html],
  },
];
