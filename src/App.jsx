import React, { useState } from 'react';
import Decks from './components/Decks';
import Flashcard from './components/Flashcard';
import ProgressTracker from './components/ProgressTracker';
import Auth from './components/Auth';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [currentDeck, setCurrentDeck] = useState(null);
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      {!user ? (
        <Auth setUser={setUser} />
      ) : (
        <>
          <h1>Language Learning Flashcards</h1>
          <Decks setCurrentDeck={setCurrentDeck} />
          {currentDeck && <Flashcard deck={currentDeck} setProgress={setProgress} />}
          <ProgressTracker progress={progress} />
        </>
      )}
    </div>
  );
}

export default App;