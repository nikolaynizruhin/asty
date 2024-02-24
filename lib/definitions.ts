export interface Detail {
  icon: string;
  name: string;
  value: string;
}

export interface Contact {
  index: number;
  name: string;
  href: string;
  text: string;
}

export interface Navigation {
  name: string;
  href: string;
}

export interface MediaObject {
  id?: number;
  name: string;
  description: string;
  icon: string;
}

export interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
  isLandscape: boolean;
}

export interface CategoryLink {
  name: string;
  image: string;
  href: string;
}

export interface Filter {
  name: string;
  href: string;
  isActive: (category?: Category) => boolean;
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
  location: string;
  area: string;
  date: string;
  style: string;
  updatedAt: string;
}
