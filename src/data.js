//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  CgWebsite
} from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faDesktop } from '@fortawesome/free-solid-svg-icons';

import Sitelogo from './assets/img/services/logosite.png';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/variedades2.png';
import Project2 from './assets/img/projects/moda.jpg';
import Project3 from './assets/img/projects/playtime.png';
import Project4 from './assets/img/projects/p5.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg9 from './assets/img/skills/php4.png';
import SkillImg5 from './assets/img/skills/word2.png';
import SkillImg6 from './assets/img/skills/shopify.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },

  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'serviços',
    href: 'serviços',
  },
  {
    name: 'contato',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Fitness Variedades',
    category: 'loja virtual',
  },
  {
    id: '2',
    image: Project2,
    name: 'Moda Tendência',
    category: 'loja virtual',
  },
  {
    id: '3',
    image: Project3,
    name: 'Playtime',
    category: 'loja virtual',
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'branding',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'todos',
  },
  {
    name: 'loja virtual',
  },
  {
    name: 'landing page',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {image: SkillImg9},
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg8,
  },
  
  
];

// services
export const serviços = [
  {
    icon: <faDesktop/>,
    name: 'Criação de sites',
    description:
      'Criação de sites profissionais,otimizados e gerenciáveis, ideal para divulgar sua empresa ou serviço ',
  },
  {
    icon: <FiSettings />,
    name: 'Criação de lojas',
    description:
    'Lojas virtuais completas prontas para  você começar a vender seus produtos pela internet de forma simples e rápida'
  },
  {
    icon: <FiPenTool />,
    name: 'Manutenção e otimização',
    description:
      'Sites rápidos e otimizados garantem mais cliques e conversões no site e são melhores posicionados pelo google',
  },
  {
    icon: <FiTag />,
    name: 'Sites responsivos',
    description:
      'Usamos as melhores tecnologias para que seu site seja acessível por todos os dispositivos',
  },
  {
    icon: <FiTag />,
    name: 'Tecnologias de ponta',
    description:
      'Trabalhamos com as melhores opções para o desenvolvimento web, soluções altamente usadas e testadas em todo mundo',
  },
  {
    icon: <FiTag />,
    name: 'Personalização e design',
    description:
      'Desenvolvemos seu site de acordo com seu publico alvo, criamos sua logo, banners e identidade visual',
  },

];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];
