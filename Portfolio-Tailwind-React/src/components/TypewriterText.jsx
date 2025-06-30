import React, { useEffect, useState } from 'react';

const TypewriterLoop = ({ texts = [], speed = 100, pause = 1500, className = '' }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingInterval;

    const currentText = texts[textIndex % texts.length];

    if (!isDeleting) {
      typingInterval = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      }, speed);
    } else {
      typingInterval = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, speed / 2);
    }

    return () => clearTimeout(typingInterval);
  }, [displayedText, isDeleting, textIndex, texts, speed, pause]);

  return (
    <span className={`font-mono text-white ${className}`}>
      {displayedText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterLoop;
