import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CardForm from './components/CardForm';
import FlashcardGrid from './components/FlashcardGrid';
import AddCard from './components/AddCard';
import StudyMode from './components/StudyMode';



type Topic = {
  name: string;
  color: string;
};

type Flashcard = {
  id: number;
  question: string;
  answer: string;
  topic: string;
  learned?: boolean;
};

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  const [cards, setCards] = useState<Flashcard[]>(() => {
  const stored = localStorage.getItem("flashcards");
  return stored ? JSON.parse(stored) : [];
});
  const [search, setSearch] = useState("");

  
  const [editingCard, setEditingCard] = useState<{
    id?: number;
    question: string;
    answer: string;
    topic: string;
  } | null>(null);


  const [topics, setTopics] = useState<Topic[]>([
    { name: "Math", color: "#f87171" },        // rojo
    { name: "History", color: "#60a5fa" },     // azul
    { name: "Programming", color: "#34d399" }  // verde
  ]);

  
  useEffect(() => {
    const storedCards = localStorage.getItem("flashcards");
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("flashcards", JSON.stringify(cards));
     console.log("Saved to localStorage:", cards);
  }, [cards]);

  
  const handleSave = (card: { id?: number; question: string; answer: string; topic: string }) => {
  if (card.id) {
   
    setCards(cards.map((c) => (c.id === card.id ? { ...c, ...card } : c)));
  } else {
    
    setCards([...cards, { ...card, id: Date.now(), learned: undefined }]);
 
  }
  };


const filteredCards = cards.filter((card) => {
  const matchTopic = selectedTopic === "" || card.topic === selectedTopic;
  const matchSearch =
    search.trim() === "" ||
    card.question.toLowerCase().includes(search.toLowerCase());
  return matchTopic && matchSearch;
});

  const handleDelete = (id: number) => {
    setCards(cards.filter((c) => c.id !== id));
  };

  const [studyMode, setStudyMode] = useState(false);

  const handleUpdateCard = (updatedCard: Flashcard) => {
    setCards(cards.map((c) => (c.id === updatedCard.id ? updatedCard : c)));
  }

  return (
     <>
    {studyMode ? (
      <StudyMode
        cards={cards}
        topics={topics}
        onUpdateCard={handleUpdateCard}
        onExit={() => setStudyMode(false)}
      />
    ) : (
      <>
        <Header
          title="Study App"
          topics={topics.map((t) => t.name)}
          selectedTopic={selectedTopic}
          onTopicChange={setSelectedTopic}
          searchValue={search}
          onSearchChange={setSearch}
          cardsLearned={cards.filter((card) => card.learned).length}
          totalCards={cards.length}
          onStudyMode={() => setStudyMode(true)}
        />

        <div style={{ padding: "20px" }}>
          <FlashcardGrid
            cards={filteredCards}
            topics={topics}
            onEdit={(id) => setEditingCard(cards.find((c) => c.id === id) || null)}
            onDelete={handleDelete}
            
          />

          <AddCard
            onAdd={() =>
              setEditingCard({
                question: "",
                answer: "",
                topic: "",
              })
            }
          />
        </div>

        {editingCard && (
          <CardForm
            initialData={editingCard}
            topics={topics}
            onSave={handleSave}
            onAddTopic={(newTopic) => setTopics([...topics, newTopic])}
            onDelete={handleDelete}
            onClose={() => setEditingCard(null)}
          />
        )}
      </>
    )}
  </>
);
}

export default App;
