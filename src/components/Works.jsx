import React from 'react';
import { Link } from 'react-router-dom';
import ReturnHome from './ReturnHome';

function Works({ works }) {
  return (
    <div className="h-full w-full pt-20">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Title y about projects */}
        <ReturnHome />
        <div className="pb-2 space-y-4">
          <p className="md:self-end justify-self-start text-4xl font-bold inline border-b-[2px] border-gold">
            Proyectos
          </p>
          <p className="py-4 text-lg text-gray-700">
            Algunos de mis proyectos. &#40;No son muy lindos&#41;
            <br />
            Decidi mantener la apariencia visual de estos para asi destacar el
            avance a traves del tiempo
          </p>
        </div>

        {/* Cards Work */}
        <div className="w-full grid md:grid-cols-3 text-black font-bold">
          {works?.map((e, i) => (
            <div className="group hoverTranslateX flex flex-col pb-4">
              <Link
                to={`/projects/${i}`}
                className={`text-xl md:text-4xl font-bold text-black cursor-pointer md:group-hover:before:content-['Details']`}
              >
                <p className="group-hover:hidden">{e.name}</p>
              </Link>
              <p className="text-md text-gold max-w-[250px]">{e.description}</p>
              <Link
                to={`/projects/${i}`}
                className="flex md:hidden border-2 font-bold px-4 py-3 my-4 mx-auto cursor-pointer"
              >
                Demo / Code
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
