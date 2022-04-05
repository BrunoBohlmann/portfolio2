import React from 'react';
import { useParams } from 'react-router-dom';
import ReturnHome from './ReturnHome';

function WorkDetail({ works }) {
  const { id } = useParams();
  const work = works[id];

  return (
    <div className="h-screen flex items-center justify-center pt-10">
      <div className="relative h-full w-full">
        {/* Background Image */}
        <img
          alt="workImg"
          src={work.photo}
          className="object-cover w-full h-full"
        />

        {/* Content */}
        <div className="absolute w-full h-full text-black px-20 bottom-0 bg-gradient-to-b from-white/95 to-white/95 flex flex-col items-center justify-center text-center">
          <ReturnHome />
          {/* Title */}
          <p className="font-bold px-4 md:px-14 mt-3 text-sm md:text-4xl">
            {work.name}
          </p>
          {/* Quotes */}
          <p className="text-sm md:text-lg px-4 md:px-14 mt-10">
            {work.details}
          </p>
          {work.link ? (
            <a
              href={work.link}
              target="_blank"
              rel="noreferrer"
              className="border-2 hover:bg-gold hover:border-gold px-8 py-3 my-6 mx-auto cursor-pointer"
            >
              Demo / Code
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default WorkDetail;
