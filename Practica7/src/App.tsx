import './App.css'
import ControlledUncontrolledForm from './components/ControlledUncontrolledForm'
import KeyboardControlledCounter from './components/KeyboardControlledCounter';
import UserCard from './components/UserCard'
import UserList from './components/UserList';


function App() {
  const handleCardClick = (userName: string) => {

    console.log(`Tarjeta de ${userName} clickeada.`); 
    alert(`Has saludado a ${userName}`);
  };
  return (
    <>
      <ControlledUncontrolledForm />
      <UserCard name='Maria' age={18} onClick={handleCardClick}/>
      <UserList />
      <KeyboardControlledCounter />
    </>
  )
}

export default App
