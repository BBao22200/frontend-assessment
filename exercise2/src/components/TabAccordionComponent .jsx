import React, { useState } from 'react';

export default function TabAccordionComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const content = [
    {
      title: 'Section 1',
      content:
        '<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>',
    },
    {
      title: 'Section 2',
      content:
        '<p>Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.</p>',
    },
    {
      title: 'Section 3',
      content:
        '<p>Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>',
    },
    {
      title: 'Section 4',
      content:
        '<p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>',
    },
  ];

  return (
    <div className='container mx-auto p-4'>
      <div className='hidden md:block'>
        <div className='flex space-x-4 border-b'>
          {content.map((item, index) => (
            <button
              key={index}
              className={`py-2 px-4 ${
                activeTab === index
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div
          className='p-4 border border-t-0'
          dangerouslySetInnerHTML={{ __html: content[activeTab].content }}
        />
      </div>
      <div className='block md:hidden'>
        {content.map((item, index) => (
          <div key={index} className='mb-2'>
            <button
              className='w-full text-left py-2 px-4 bg-gray-100 border-b'
              onClick={() =>
                setActiveAccordion(activeAccordion === index ? null : index)
              }
            >
              {item.title}
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                activeAccordion === index ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              {activeAccordion === index && (
                <div
                  className='p-4 border border-t-0'
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
