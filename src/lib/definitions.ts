export interface Detail {
    icon: string;
    title: string;
    description: string;
  }
  
  export interface Project {
    id: number;
    slug: string;
    name: string;
    description: string;
    concept: string;
    details: Detail[];
  }
  