import React, { useState, useRef, useEffect } from 'react';

const accordionData = [
  {
    title: 'What is Material Tailwind?',
    content: 'Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.',
  },
  {
    title: 'How to use Material Tailwind?',
    content: 'You can use Material Tailwind by importing its components into your Tailwind CSS project.',
  },
  {
    title: 'What can I do with Material Tailwind?',
    content: 'Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.',
  },
];

const AccordionItem = ({ index, title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight + 'px');
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  const PlusIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
    </svg>
  );

  const MinusIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
    </svg>
  );

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => onClick(index)}
        className="w-full flex justify-between items-center py-5 text-slate-800"
      >
        <span>{title}</span>
        <span className="text-slate-800 transition-transform duration-300">
          {isOpen ? MinusIcon : PlusIcon}
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: height }}
      >
        <div className="pb-5 text-sm text-slate-500">{content}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={handleToggle}
        />
      ))}
    </div>
  );
};

export default FAQ;
