import { learnedType } from "../type/type";
import { skillData } from "./skillData";

/**
 * learnedData
 *
 * This file exports an array of objects representing various programming languages
 * and tools, each with an associated icon, name, and type. This data structure
 * is used to display a list of skills or technologies in the application.
 */
export const learnedData: learnedType[] = [
  {
    ...skillData.csharp,
    type: ["All", "Language", "Backend-end", "Front-end"],
  },
  {
    ...skillData.dotnet,
    type: ["All", "Language", "Backend-end", "Front-end"],
  },
  {
    ...skillData.java,
    type: ["All", "Language", "Backend-end", "Front-end"],
  },
  {
    ...skillData.flutter,
    type: ["All", "Language", "Front-end"],
  },
  {
    ...skillData.dart,
    type: ["All", "Language", "Front-end"],
  },
  {
    ...skillData.react,
    type: ["All", "Language", "Front-end"],
  },
  {
    ...skillData.javascript,

    type: ["All", "Language", "Front-end"],
  },
  {
    ...skillData.typescript,

    type: ["All", "Language", "Front-end"],
  },
  {
    ...skillData.git,

    type: ["All", "Others"],
  },
  {
    ...skillData.springboot,
    type: ["All", "Language", "Backend-end"],
  },
  {
    ...skillData.postgresql,
    type: ["All", "Language", "Backend-end"],
  },
  {
    ...skillData.mysql,

    type: ["All", "Language", "Backend-end"],
  },
  {
    ...skillData.firebase,
    type: ["All", "Language", "Backend-end"],
  },
  {
    ...skillData.html,
    type: ["All", "Language", "Front-end"],
  },
  {
    ...skillData.css,
    type: ["All", "Language", "Front-end"],
  },
  {
    ...skillData.framer_motion,
    type: ["All", "Front-end"],
  },
  {
    ...skillData.tailwind,
    type: ["All", "Front-end"],
  },
  {
    ...skillData.bootstrap,
    type: ["All", "Front-end"],
  },
  {
    ...skillData.redux,
    type: ["All", "Front-end"],
  },
  {
    ...skillData.figma,
    type: ["All", "Front-end", "Others"],
  },
  {
    ...skillData.wordpress,
    type: ["All", "Front-end", "Others"],
  },
  {
    ...skillData.sass,
    type: ["All", "Front-end", "Others"],
  },
  {
    ...skillData.corel_draw,
    type: ["All", "Others"],
  },
];
