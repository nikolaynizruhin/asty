export interface Detail {
  icon: string;
  name: string;
  description: string;
}

export interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
  isLandscape: boolean;
}

export type Category = 'architecture' | 'interior' | 'commerce';
  
export interface Project {
  id: number;
  slug: string;
  name: string;
  description: string;
  concept: string;
  overview?: string;
  category: Category;
  details: Detail[];
}
