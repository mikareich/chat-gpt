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
        image: `https://api.dicebear.com/7.x/avataaars-neutral/svg?seed=${chatId}`,
      };

    default:
      return {
        name: "Bot 🤖",
        image: `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${chatId}`,
      };
  }
};
