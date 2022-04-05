import React from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import { SiLinkedin } from 'react-icons/si';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Home() {
  const socialBlocks = [
    {
      name: 'Descargar CV',
      icon: BsFillPersonLinesFill,
      link: `${process.env.PUBLIC_URL}CV.pdf`
    },
    {
      name: 'Linkedin',
      icon: SiLinkedin,
      link: 'https://www.linkedin.com/in/bruno-bohlmann/'
    },
    {
      name: 'Github',
      icon: VscGithubAlt,
      link: 'https://github.com/BrunoBohlmann'
    }
  ];

  return (
    <div className="home h-screen w-full grid md:grid-cols-2 text-black font-bold text-6xl md:text-7xl homeBg">
      <div className="w-full max-w-xl m-auto h-[80%] flex flex-col space-y-6 p-8 items-center md:items-start justify-end">
        {/* Titles con cambio de texto en hover */}
        <Link
          to="/about"
          className="cursor-pointer before:content-['Hola'] md:hover:before:content-['Sobre_mi'] hoverTranslateY"
        />
        <Link
          to="/projects"
          className="cursor-pointer before:content-['Soy'] md:hover:before:content-['Proyectos'] hoverTranslateY"
        />
        <Link
          to="/contact"
          className="cursor-pointer text-gold before:content-['Bruno.'] md:hover:before:content-['Contacto.'] hoverTranslateY"
        />
      </div>
      <div className="w-full max-w-xl h-[60%] flex m-auto p-8 items-end justify-center">
        {/* Aparece desde sm en adelante */}
        <div className="flex flex-col space-y-8 text-2xl text-right">
          {socialBlocks.map((e) => {
            const Icon = e.icon;
            return (
              <div className="flex items-center space-x-3 hover:text-gold font-light hoverTranslateX">
                <a href={e.link} target="_blank" rel="noreferrer">
                  {e.name}
                </a>
                <Icon />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
