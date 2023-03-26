import { CourseCardProps } from './typings';
import intro_ux_design from '@/public/images/intro_ux_design.png';
import intro_marketing_audience from '@/public/images/intro_marketing_audience.png';
import intro_html_css from '@/public/images/intro_html_css.png';
import intro_to_javascript from '@/public/images/intro_to_javascript.png';
import intro_to_outroom from '@/public/images/intro_to_outroom.png';
import intro_to_live_marketing from '@/public/images/intro_to_live_marketing.png';
import leonard from '@/public/images/leonard.png';
import jeffrey from '@/public/images/jeffrey.png';
import claretta from '@/public/images/claretta.png';
import jessica from '@/public/images/jessica.png';
import samuel from '@/public/images/samuel.png';
import adam from '@/public/images/adam.png';

export const courseData: CourseCardProps[] = [
  {
    courseTitle: 'Introduction to user research in UX Design',
    categ: 'design',
    rating: 4.7,
    image: intro_ux_design,
    people: 32.7,
    duration: '23hrs 50mins',
    lessons: 15,
    tutor: {
      name: 'Leonard Victor',
      image: leonard,
    },
    price: 15,
  },
  {
    courseTitle: 'Introduction  to new marketing audience',
    categ: 'marketing',
    rating: 4.7,
    image: intro_marketing_audience,
    people: 8.7,
    duration: '22hrs 30mins',
    lessons: 22,
    tutor: {
      name: 'Jeffrey Williams',
      image: jeffrey,
    },
    price: 32,
  },
  {
    courseTitle: 'Introduction to HTML and CSS & Bootstrap',
    categ: 'development',
    rating: 4.7,
    image: intro_html_css,
    people: 12.7,
    duration: '45hrs 50mins',
    lessons: 55,
    tutor: {
      name: 'Claretta Mason',
      image: claretta,
    },
    price: 55,
  },
  {
    courseTitle: 'Introduction to Javascript, Git & Github',
    categ: 'development',
    rating: 4.7,
    image: intro_to_javascript,
    people: 32.7,
    duration: '30hrs 50mins',
    lessons: 22,
    tutor: {
      name: 'Jessica Duke',
      image: jessica,
    },
    price: 45,
  },
  {
    courseTitle: 'Introduction to outroom marketing analysis',
    categ: 'marketing',
    rating: 4.7,
    image: intro_to_outroom,
    people: 4.7,
    duration: '33hrs 50mins',
    lessons: 26,
    tutor: {
      name: 'Samuel Jacobs',
      image: samuel,
    },
    price: 25,
  },
  {
    courseTitle: 'Introduction to live marketing analysis',
    categ: 'marketing',
    rating: 4.7,
    image: intro_to_live_marketing,
    people: 15.7,
    duration: '10hrs 50mins',
    lessons: 32,
    tutor: {
      name: 'Adam Smith',
      image: adam,
    },
    price: 25,
  },
];
