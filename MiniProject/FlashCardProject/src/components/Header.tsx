import './Header.css'
import ProgressBar from './ProgressBar';
import SearchBar from './SearchBar';
import TopicSelect from './TopicSelect';

type HeaderProps = {
  title: string;
  topics: string[];
  selectedTopic: string;
  onTopicChange: (newTopic: string) => void;
  searchValue: string;                          
  onSearchChange: (newValue: string) => void;
  cardsLearned: number;                        
  totalCards: number;   
   onStudyMode: () => void;                        
}

const Header : React.FC<HeaderProps> = ({ title, topics, selectedTopic, onTopicChange,
     searchValue, onSearchChange, cardsLearned, totalCards,  onStudyMode }) => {
    return (
        <header className="app-header">
    
      <h1 className="app-header__title">{title}</h1>

      <div className="app-header__controls">
        <TopicSelect topics={topics} value={selectedTopic} onChange={onTopicChange} />
        <SearchBar value={searchValue} onChange={onSearchChange} />

        <div className="app-header__progress-group">
          <div className="app-header__progress">
            <span>{cardsLearned} cards learned</span>
            <ProgressBar learned={cardsLearned} total={totalCards} />
          </div>

          <button className="btn-study" onClick={onStudyMode}>
            Study Mode
          </button>
        </div>
      </div>
    </header>
    )
}

export default Header;