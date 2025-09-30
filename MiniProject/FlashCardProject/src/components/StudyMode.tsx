import React, { useState } from "react";
import "./StudyMode.css";
import type { Flashcard, Topic } from "../types/types.ts";
type StudyModeProps = {
  cards: Flashcard[];
  topics: Topic[];
  onUpdateCard: (updatedCard: Flashcard) => void;
  onExit: () => void;
};

const StudyMode: React.FC<StudyModeProps> = ({ cards, topics, onUpdateCard, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffled, setShuffled] = useState(false);
  const [deck, setDeck] = useState<Flashcard[]>(cards);

  const shuffleDeck = () => {
    const shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffledDeck);
    setCurrentIndex(0);
    setShuffled(true);
  };

  const currentCard = deck[currentIndex];

  const handleMark = (learned: boolean) => {
    const updatedCard = { ...currentCard, learned };
    onUpdateCard(updatedCard);
    setDeck(
      deck.map((c) => (c.id === updatedCard.id ? updatedCard : c))
    );
  };

  const nextCard = () => {
    if (currentIndex < deck.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevCard = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

 // Cards revisadas = todas las que tienen un valor definido en "learned"
const reviewedCount = cards.filter((c) => c.learned !== undefined).length;
const percent = cards.length > 0 ? Math.round((reviewedCount / cards.length) * 100) : 0;


  return (
    <div className="study-mode">
      <div className="study-mode__header">
        <h2>Study Mode</h2>
        {!shuffled && (
          <button className="btn-shuffle" onClick={shuffleDeck}>
            Shuffle
          </button>
        )}
        <button className="btn-exit" onClick={onExit}>
          Back
        </button>
      </div>

      {/* Barra de progreso */}
      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress-bar__fill"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <p>
           {reviewedCount}/{cards.length} cards → {percent}% completado
        </p>
      </div>

      
      {currentCard && (
        <div className="study-card">
          {/* Tags de Topic y Estado */}
          <div className="study-card__tags">
            <span
              className="topic-tag"
              style={{
                backgroundColor:
                  topics.find((t) => t.name === currentCard.topic)?.color || "#e5e7eb",
              }}
            >
              {currentCard.topic}
            </span>
            {currentCard.learned  === true && (
              <span className="status-tag learned">Learned</span>
            )} {currentCard.learned === false && (
              <span className="status-tag revision">Needs Revision</span>
            )}
          </div>

         
          <p>{currentCard.question}</p>

        
          <div className="study-actions">
            <button className="btn-learned" onClick={() => handleMark(true)}>
              Learned
            </button>
            <button className="btn-revision" onClick={() => handleMark(false)}>
              Needs Revision
            </button>
          </div>

        
         
        </div>
      )}
       <div className="study-nav">
            <button onClick={prevCard} disabled={currentIndex === 0}>
              ← Prev
            </button>
            <button onClick={nextCard} disabled={currentIndex === deck.length - 1}>
              Next →
            </button>
          </div>
    </div>
  );
};

export default StudyMode;
