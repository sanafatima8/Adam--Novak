import { useState, useEffect } from 'react';

function useTypingEffect(text, interval = 50) {
  const [textToShow, setTextToShow] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < text.length) {
        setTextToShow((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [text, index, interval]);

  return textToShow;
}

export default useTypingEffect;
