import React, { createContext, useState, useCallback, useEffect } from "react";
import type { Notification, NotificationType } from "../types/notification";


// objeto que se guarda en Context
type NotificationContextValue = {
  notifications: Notification[];
  showNotification: (message: string, type?: NotificationType) => void;
  clearNotification: (id: number) => void;
};

// se crea context
export const NotificationContext = createContext<NotificationContextValue | undefined>(undefined);

type ProviderProps = { children: React.ReactNode };

// provider del contexto
export const NotificationProvider: React.FC<ProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // elimina por  id
  const clearNotification = useCallback((id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  // arega una notificacion
  const showNotification = useCallback((message: string, type: NotificationType = "info") => {
    const id = Date.now() + Math.random();
    const newNotification: Notification = { id, message, type };

    //acumula
    setNotifications((prev) => [...prev, newNotification]);
  }, []);

  // 🔹borra despues de 3s
  useEffect(() => {
    //si está vacio no hace nada
    if (notifications.length === 0) return;

    // la ultima notificacion que se agrega
    const lastNotification = notifications[notifications.length - 1];

    const timer = setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== lastNotification.id));
    }, 3000);

   //lumpia
    return () => clearTimeout(timer);
  }, [notifications]);

  return (
    <NotificationContext.Provider value={{ notifications, showNotification, clearNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
