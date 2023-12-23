export interface Detail {
  icon: string;
  name: string;
  description: string;
}

export type Category = 'architecture' | 'interior' | 'commerce';
  
export interface Project {
  id: number;
  slug: string;
  name: string;
  description: string;
  concept: string;
  category: Category;
  details: Detail[];
}
