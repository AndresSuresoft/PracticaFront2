
import React from "react";
import { useNotification } from "../hooks/useNotification"; 

import "../index.css";

const Notification: React.FC = () => {
  const { notifications, clearNotification } = useNotification();

  return (
    <div className="toast-container">
      {notifications.map((n) => (
        <div key={n.id} className={`toast toast--${n.type ?? "info"}`}>
          <span>{n.message}</span>
          <button onClick={() => clearNotification(n.id)} className="toast__close">
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notification;


