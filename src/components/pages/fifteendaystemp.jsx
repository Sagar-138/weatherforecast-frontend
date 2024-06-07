import React, { useState } from 'react';
import '../styles/fifteendays.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'Why shouldn\'t we trust atoms?',
      answer: 'They make up everything',
    },
    {
      question: 'What do you call someone with no body and no nose?',
      answer: 'Nobody knows.',
    },
    {
      question: "What's the object-oriented way to become wealthy?",
      answer: 'Inheritance.',
    },
    {
      question: 'How many tickles does it take to tickle an octopus?',
      answer: 'Ten-tickles!',
    },
    {
      question: 'What is: 1 + 1?',
      answer: "Depends on who are you asking.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div className={`faq ${index === activeIndex ? 'active' : ''}`} key={index}>
          <h3 className="faq-title">{faq.question}</h3>
          <p className="faq-text">{faq.answer}</p>
          <button className="faq-toggle" onClick={() => handleClick(index)}>
            <FontAwesomeIcon icon={index === activeIndex ? faTimes : faChevronDown} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FAQ;