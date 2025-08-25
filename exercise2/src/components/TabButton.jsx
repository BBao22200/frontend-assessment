import React from 'react';

const TabButton = ({ item, index, isActive, onClick }) => (
  <button
    className={`py-2 px-4 transition-colors duration-200 ${
      isActive
        ? 'border-b-2 border-blue-500 text-blue-500 font-medium'
        : 'text-gray-600 hover:text-gray-800'
    }`}
    onClick={() => onClick(index)}
    aria-selected={isActive}
    role="tab"
  >
    {item?.title}
  </button>
);

export default TabButton;
