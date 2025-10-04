import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";


export const useNotification = () => {
  const cntx = useContext(NotificationContext);
  if (!cntx) throw new Error("useNotification debe usarse dentro de <NotificationProvider>");
  return cntx;
};
