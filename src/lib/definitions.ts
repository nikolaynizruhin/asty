export interface Detail {
  icon: string;
  name: string;
  description: string;
}
  
export interface Project {
  id: number;
  slug: string;
  name: string;
  description: string;
  concept: string;
  category: string;
  details: Detail[];
}
