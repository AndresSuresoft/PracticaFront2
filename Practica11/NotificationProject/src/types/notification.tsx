// src/types/notification.ts
export type NotificationType = "success" | "error" | "info";

export type Notification = {
  id: number;
  message: string;
  type?: NotificationType;
};
