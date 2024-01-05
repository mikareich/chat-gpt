import { Message } from "ai/react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { measureMemory } from "vm";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAvatar = (role: Message["role"], chatId: string) => {
  switch (role) {
    case "user":
      return {
        name: "You",
        image: `https://avatars.githubusercontent.com/u/1?v=4`,
      };

    default:
      return {
        name: "Bot 🤖",
        image: `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${chatId}`,
      };
  }
};

export const CHAT_MODELS = [
  "gpt-3.5-turbo-1106",
  "gpt-3.5-turbo-16k",
  "gpt-4-1106-preview",
];
