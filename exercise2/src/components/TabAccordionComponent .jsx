import React, { useEffect, useState } from 'react';

export default function TabAccordionComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/data.json');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className='container mx-auto p-4'>
      <div className='hidden md:block'>
        <div className='flex space-x-4 border-b'>
          {data.map((item, index) => (
            <button
              key={index}
              className={`py-2 px-4 ${
                activeTab === index
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {item?.title}
            </button>
          ))}
        </div>
        <div
          className='p-4 border border-t-0'
          dangerouslySetInnerHTML={{ __html: data[activeTab]?.content }}
        />
      </div>
      <div className='block md:hidden'>
        {data.map((item, index) => (
          <div key={index} className='mb-2'>
            <button
              className='w-full text-left py-2 px-4 bg-gray-100 border-b'
              onClick={() =>
                setActiveAccordion(activeAccordion === index ? null : index)
              }
            >
              {item?.title}
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                activeAccordion === index ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              {activeAccordion === index && (
                <div
                  className='p-4 border border-t-0'
                  dangerouslySetInnerHTML={{ __html: item?.content }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
