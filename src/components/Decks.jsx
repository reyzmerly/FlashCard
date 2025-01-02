import React from 'react';

function Decks({ setCurrentDeck }) {
  const decks = ['Spanish Basics', 'German A1', 'French Verbs'];
  return (
    <div>
      <h2>Choose a Deck</h2>
      {decks.map(deck => (
        <button key={deck} onClick={() => setCurrentDeck(deck)}>{deck}</button>
      ))}
    </div>
  );
}

export default Decks;