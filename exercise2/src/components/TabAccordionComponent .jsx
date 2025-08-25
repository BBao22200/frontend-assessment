import React, { useEffect, useState, useCallback } from 'react';
import LoadingSpinner from './LoadingSpinner';
import TabButton from './TabButton';
import AccordionItem from './AccordionItem';
import TabContent from './TabContent';
import ErrorMessage from './ErrorMessage';
import EmptyState from './EmptyState';

export default function TabAccordionComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/data.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to load data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleTabClick = useCallback((index) => {
    setActiveTab(index);
  }, []);

  const handleAccordionToggle = useCallback((index) => {
    setActiveAccordion(prev => prev === index ? null : index);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error} onRetry={fetchData} />;
  }

  if (!data || data.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Desktop Tabs */}
      <div className="hidden md:block">
        <div 
          className="flex space-x-1 border-b border-gray-200 bg-gray-50 rounded-t-lg p-1"
          role="tablist"
        >
          {data.map((item, index) => (
            <TabButton
              key={index}
              item={item}
              index={index}
              isActive={activeTab === index}
              onClick={handleTabClick}
            />
          ))}
        </div>
        <TabContent content={data[activeTab]?.content} />
      </div>

      {/* Mobile Accordion */}
      <div className="block md:hidden">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            index={index}
            isOpen={activeAccordion === index}
            onToggle={handleAccordionToggle}
          />
        ))}
      </div>
    </div>
  );
}
