
import React from "react";
import { useNotification } from "../hooks/useNotification";

const NotificationButton: React.FC = () => {
  const { showNotification } = useNotification();

  return (
    <button
      onClick={() => showNotification("Notificación en el MAIN", "success")}
      className="btn"
    >
      Boton de Notificacion
    </button>
  );
};

export default NotificationButton;
