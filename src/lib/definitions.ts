export interface Detail {
    icon: string;
    title: string;
    description: string;
  }
  
  export interface Project {
    id: number;
    slug: string;
    name: string;
    subtitle: string;
    description: string;
    details: Detail[];
  }
  