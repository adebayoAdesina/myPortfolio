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
export interface workedTyepe {
  role: string;
  company: string;
  workDescription: string;
  skills: skillType[];
  dateFrom: string;
  dateTo: string;
}
