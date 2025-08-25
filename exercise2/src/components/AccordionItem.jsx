import React from 'react';

const AccordionItem = ({ item, index, isOpen, onToggle }) => (
  <div className="mb-2 border border-gray-200 rounded-lg overflow-hidden">
    <button
      className="w-full text-left py-3 px-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
      onClick={() => onToggle(index)}
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${index}`}
    >
      <span className="font-medium">{item?.title}</span>
      <svg
        className={`w-5 h-5 transition-transform duration-200 ${
          isOpen ? 'transform rotate-180' : ''
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      id={`accordion-content-${index}`}
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      {isOpen && (
        <div
          className="p-4 bg-white border-t border-gray-200"
          dangerouslySetInnerHTML={{ __html: item?.content }}
        />
      )}
    </div>
  </div>
);

export default AccordionItem;
