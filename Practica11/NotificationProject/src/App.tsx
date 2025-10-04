import React from "react";
import Notification from "./component/Notification";
import NotificationButton from "./component/NotificationButton";
import NotificationButton2 from "./component/NotificationButton2";

const App: React.FC = () => {
  return (
    <>
      <header className="navbar">
        <h1 className="navbar__title">Notificacion</h1>
        <div className="navbar__actions">
          <NotificationButton2 />
        </div>
      </header>

      <main className="container">
        <h2>Contenido</h2>
        <p>Pulsa el boton para mostrar una notificacion.</p>
        <NotificationButton />
      </main>

      <Notification />
    </>
  );
};

export default App;
