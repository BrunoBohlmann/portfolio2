import React from 'react';
import ReturnHome from './ReturnHome';

function Contact() {
  return (
    <div
      name="Contacto"
      className="w-full h-screen flex flex-col justify-center items-center bg-white text-white px-4"
    >
      <ReturnHome />
      <form
        method="POST"
        action="https://getform.io/f/2061860e-188d-4069-823f-08a4bf39d6ff"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gold text-black">
            Contacto
          </p>
          <p className="text-gray-700 pt-4">
            Completa el siguiente formulario o contactame por cualquiera de las
            otras vias disponibles.
          </p>
        </div>
        <input
          className="p-2 bg-black rounded-sm"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-black rounded-sm"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-black p-2 rounded-sm"
          name="message"
          rows="6"
          placeholder="Send my a message"
        />
        <button
          className="text-black hover:text-white border-2 hover:bg-gold hover:border-gold px-4 py-3 my-6 mx-auto"
          type="submit"
        >
          Contact Me
        </button>
      </form>
    </div>
  );
}

export default Contact;
