import React from 'react';
import { Link } from 'react-router-dom';

function ReturnHome() {
  return (
    <div className="hidden md:flex w-[90%] mx-auto justify-end">
      {' '}
      <Link to="/" className="text-black hover:text-gray-600 hoverTranslateY">
        bruno.home
      </Link>
    </div>
  );
}

export default ReturnHome;
