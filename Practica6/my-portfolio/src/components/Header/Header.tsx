
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';


type HeaderProps = {
  isStudent: boolean;
  name: string; 
  title: string; 
};

const Header = ({ isStudent, name, title }: HeaderProps) => {
  return (
    <header className="header__class">
      
      <div className="header__texts typewriter">
        <p className='student__option'>{name}</p>
        <h1>{title}</h1> 
        <p className="student__option">{isStudent ? "Student Portfolio" : "Portfolio"}</p>
      </div>
      <div className="header__button">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;