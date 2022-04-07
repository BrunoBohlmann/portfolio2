import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavBarMobile({ nav, handleNav }) {
  const sections = [
    { name: 'Home', path: '/' },
    { name: 'Sobre mi', path: '/about' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Contacto', path: '/contact' }
  ];
  return (
    <div className="fixed w-full md:hidden bg-white text-gray-700 p-8 flex justify-end items-center z-10">
      {!nav ? (
        <div
          aria-hidden
          className="cursor-pointer hover:text-gold"
          onClick={handleNav}
          onKeyUp={handleNav}
        >
          <FaBars size={30} />
        </div>
      ) : (
        <div
          aria-hidden
          className="cursor-pointer hover:text-gold z-10"
          onClick={handleNav}
          onKeyUp={handleNav}
        >
          <FaTimes size={30} />
        </div>
      )}
      <ul
        className={
          nav
            ? ' transition-transform absolute top-0 left-0 h-screen w-full flex flex-col justify-center items-center bg-white'
            : 'hidden'
        }
        aria-hidden
      >
        {sections.map((e) => (
          <li className="p-6 text-xl hover:text-Gold">
            <Link onClick={handleNav} to={e.path}>
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBarMobile;
