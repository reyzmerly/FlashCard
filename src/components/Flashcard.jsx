import React, { useState } from 'react';
import './Flashcard.css';

function Flashcard({ deck, setProgress }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const cards = [
    { front: 'Hello', back: 'Hola' },
    { front: 'Thank you', back: 'Gracias' }
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % cards.length);
    setFlipped(false);
    setProgress((prev) => prev + 1);
  };

  return (
    <div className="flashcard" onClick={() => setFlipped(!flipped)}>
      <div className={`card ${flipped ? 'flipped' : ''}`}>
        <div className="front">{cards[index].front}</div>
        <div className="back">{cards[index].back}</div>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Flashcard;
