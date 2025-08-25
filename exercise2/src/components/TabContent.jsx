import React from 'react';

const TabContent = ({ content }) => (
  <div
    className="p-6 border border-t-0 border-gray-200 bg-white rounded-b-lg"
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export default TabContent;
