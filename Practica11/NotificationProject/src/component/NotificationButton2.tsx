
import React from "react";
import { useNotification } from "../hooks/useNotification";


const NotificationButton2: React.FC = () => {
  const { showNotification } = useNotification();

  return (
    <button
      onClick={() => showNotification("Notificación en NAVBAR", "info")}
      className="btn btn--outline"
    >
      Notificacion (navbar)
    </button>
  );
};

export default NotificationButton2;
