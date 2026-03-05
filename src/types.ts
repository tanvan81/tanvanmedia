export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: string;
  rating: number;
  reviews: number;
  duration: string;
  level: 'Cơ bản' | 'Trung cấp' | 'Nâng cao';
  category: string[];
  image: string;
}

export interface Banner {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Bot {
  id: number;
  name: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  category: string;
}
