import WorkImg from './assets/Work.jpeg';
import HTML from './assets/html.png';
import CSS from './assets/css.png';
import JavaScript from './assets/javascript.png';
import ReactImg from './assets/react.png';
import Node from './assets/node.png';
import GitHub from './assets/github.png';
import Tailwind from './assets/tailwind.png';
import Mongo from './assets/mongo.png';

import ecommerce from './assets/Ecommerce.png';
import moviesApp from './assets/MoviesApp.png';
import pokeApi from './assets/PokeAPI.jpg';

export const tecnoLogos = [
  { name: 'HTML', logo: HTML },
  { name: 'CSS', logo: CSS },
  { name: 'JavaScript', logo: JavaScript },
  { name: 'React', logo: ReactImg },
  { name: 'Node', logo: Node },
  { name: 'GitHub', logo: GitHub },
  { name: 'TailwindCss', logo: Tailwind },
  { name: 'MongoDB', logo: Mongo }
];

export const works = [
  {
    name: 'PokeApi',
    tipo: 'Academico',
    details:
      'Este proyecto es una SPA (single page application) en la que se utilizaron tecnologías de Front-End como React Redux CSS HTML y de Back-End como Express Node Sequelize para mostrar un listado de pokemones provenientes de la API: pokeapi.co (una API bastante enredada 😅) y también poder crear los nuestros guardándolos en una base de datos de PostgreSQL Estos pokemones se pueden filtrar por distintas características buscar por su nombre y hasta acceder a los detalles de cada uno',
    photo: pokeApi,
    link: 'https://github.com/BrunoBohlmann/PI-BrunoBohlmann',
    description: 'SPA Front-End y Back-End que muestra pokemones'
  },
  {
    name: 'E-commerce',
    tipo: 'Academico',
    details:
      'Desarrollo en equipo de una tienda virtual de prendas de ropa. La página fue creada con las siguientes tecnologías: React, Redux, Bootstrap, Node, Express, Sequelize, PostgreSQL, Javascript . El usuario puede iniciar sesión usando su correo electrónico o Google, puede añadir, eliminar y modificar productos del carrito de compras. En adición a eso, puede comprar productos y dejar reseñas de los mismos. La página cuenta con un perfil para administradores, en el que se pueden cambiar los estados de las ordenes, eliminar usuarios o bloquearlos; también puede añadir nuevas prendas, editar o eliminar las que ya existen.',
    photo: ecommerce,
    link: 'https://e-commerce-g7-1.vercel.app/',
    description: 'Ecommerce Full-Stack en grupo'
  },
  {
    name: 'MoviesApp',
    tipo: 'Academico',
    details:
      'Esta es una pagina básica realizada para una entrevista en Powtoon, en la que se utilizaron unicamente tecnologías de Front-End para generar una App capaz de mostrar, filtrar, buscar y detallar movies provenientes de la API: omdbapi.com',
    photo: moviesApp,
    link: 'https://github.com/BrunoBohlmann/movies-1',
    description: 'SPA Front-End. Datos de TMDB API'
  }
];
