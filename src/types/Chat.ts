import type { Message as VercelMessage } from "ai";

export type MessageRole = VercelMessage["role"];

export type Message = {
  role: MessageRole;
  content: string;
  createdAt?: Date;
  id: string;
};

export type Chat = {
  id: string;
  title: string | null;
  messages: Message[];
};
