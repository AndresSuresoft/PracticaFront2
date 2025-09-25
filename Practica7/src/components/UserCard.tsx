import React, { useState } from 'react';
import '../index.css';

type UserCardProps = {
  name: string;
  age: number;
  onClick: (name: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, onClick }) => {
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  const handleClick = () => {
    console.log(`¡Hola, ${name}`);
    onClick(name);
    setHasClicked(true);
  };

  const message = hasClicked 
    ? `¡Hola, ${name}!` 
    : 'Haz click para saludar';

  return (
    <div className="user-card" onClick={handleClick}>
      <h3 className="user-name">{name}</h3>
      <p className="user-age">Edad: {age}</p>
      <small className={`user-message ${hasClicked ? 'clicked' : ''}`}>
        {message}
      </small>
    </div>
  );
};

export default UserCard;
