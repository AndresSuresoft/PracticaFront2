import './SearchBar.css';

type SearchBarProps = {
    value: string;        
    onChange: (newValue: string) => void;  
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search flashcards..."
      value={value}
      onChange={(e) => onChange(e.target.value)}  />
  );
};

export default SearchBar;