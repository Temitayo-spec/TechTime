import { StaticImageData } from 'next/image';

export interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

export interface CardProps {
  text: string;
  image: StaticImageData;
  bigText?: string;
}

export interface CourseCardProps {
  image: StaticImageData;
  categ: string;
  rating: number;
  people: number;
  courseTitle: string;
  duration: string;
  lessons: number;
  tutor: {
    name: string;
    image: StaticImageData;
  };
  price: number;
}

export interface TabButtonProps {
  title: string;
  tag: string;
}

export interface TestimonialProps {
  name: string;
  image: StaticImageData;
  testimonial: string;
  role: string;
}
