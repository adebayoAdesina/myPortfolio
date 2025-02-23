export interface navItem {
  label: string;
  path: string;
  onclick: () => void;
}

export interface learnedType {
  name: string;
  icon: string;
  type: string[];
}

export interface skillType {
  icon?: string;
  name: string;
}
export interface workedType {
  role: string;
  company: string;
  workDescription: string;
  skills: skillType[];
  dateFrom: string;
  dateTo: string;
}

export interface ProjectType {
  title: string;
  description: string;
  image: string[];
  links: CustomLink;
  tools: skillType[]
}

export interface CustomLink {
  github?: string;
  website?: string;
}
