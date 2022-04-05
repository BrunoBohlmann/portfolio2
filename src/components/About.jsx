import React from 'react';
import ReturnHome from './ReturnHome';

function About({ tecnoLogos }) {
  return (
    <div className="h-full w-full md:h-screen text-black pt-20 md:pt-0">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <ReturnHome />
        {/* Grid 1 */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-5 pl-4">
          <div className="md:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-[2px] border-gold">
              Sobre mi
            </p>
          </div>
        </div>
        {/* Grid 2 */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-6">
          <div className="md:text-right text-4xl font-bold">
            <p className="mb-6">
              Soy Bruno Bohlmann <br /> Full Stack Developer <br />
            </p>
            <span className="text-2xl text-gold">
              Y quiero dejar mi huella en el mundo IT
            </span>
          </div>

          <div>
            <p className="text-gray-700">
              Tengo 19 años. Soy de <strong>Argentina</strong> y soy un
              apasionado de la tecnologia, ciencia y la programacion, obvio
              <br />
              Este portfolio para mi representa un avance
              <strong> gigante</strong>, ya que desde que termine de realizar mi
              primer curso de programacion, estuve <strong>mucho tiempo</strong>{' '}
              estancado y frustrado. Sentia que lo que hacia no era tan bueno
              como para subirlo o mostrarlo. Dije adios a ese miedo, y aqui esta
              la prueba de ello. Espero te guste!
              <br /> <br />
              <strong>Si sos recruiter espero un mensaje ;)</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;