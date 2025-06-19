import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <a href={item.href} className="text-gray-500 hover:text-blue-600 mr-2">
            {item.label}
          </a>
          {index < items.length - 1 && <span className="text-gray-400">/</span>}
        </div>
      ))}
    </nav>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Breadcrumbs;