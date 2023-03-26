import { StaticImageData } from "next/image";

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