export type Root = Portfolio[];

export interface Portfolio {
  id: string;
  firstName: string;
  profession: string;
  avatar: string;
  description: string;
  projects: Project[];
  contacts: Contact[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  github: string;
  pages: string;
}

export interface Contact {
  title: string;
  description: string;
}
