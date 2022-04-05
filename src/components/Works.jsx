import React from 'react';
import { Link } from 'react-router-dom';
import ReturnHome from './ReturnHome';

function Works({ works }) {
  return (
    <div className="h-full md:h-screen w-full pt-20 md:pt-0">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Title y about projects */}
        <ReturnHome />
        <div className="pb-2 space-y-3">
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
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {works.map((e, i) => (
            <>
              {/* Card Normal */}
              <div
                style={{ backgroundImage: `url(${e.photo})` }}
                className="hidden relative shadow-xl group container rounded-lg md:flex justify-center items-center mx-auto card_div"
              >
                {/* Div Blur */}
                <div className="absolute w-full h-full rounded-lg group-hover:backdrop-blur-sm group-hover:backdrop-brightness-50" />
                {/* Div Hover */}
                <div className="absolute opacity-0 group-hover:opacity-100 duration-500 text-center">
                  {/* Project Name */}
                  <span className="text-2xl font-bold tracking-wider text-white">
                    {e.name}
                  </span>

                  {/* Projects Buttons */}
                  <div className="pt-8 text-center">
                    <Link
                      to={`/projects/${i}`}
                      className="text-center px-4 py-3 m-2 border-t-[1px] border-l-[1px] border-white text-white font-bold text-md hover:text-gold hover:bg-white transition-all duration-300"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>

              {/*  Card Mobile */}
              <div
                style={{ backgroundImage: `url(${e.photo})` }}
                className="shadow-lg container rounded-lg md:hidden flex card_div_mobile"
              >
                {/* Projects details */}
                <div className="w-full h-full flex flex-col justify-end items-end p-4 backdrop-brightness-50">
                  <div className="text-2xl font-bold tracking-wider text-white">
                    {e.name}
                  </div>
                  <Link
                    to={`/projects/${i}`}
                    className="text-center px-4 py-3 m-2 bg-white border-white text-gold font-bold text-md hover:bg-gray-700 duration-300"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
