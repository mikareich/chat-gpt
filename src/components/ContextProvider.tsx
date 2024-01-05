"use client";

import { Chat } from "@/types/Chat";
import { createContext, useState } from "react";

type ContextType = {
  chats: Chat[];
  setChats: React.Dispatch<React.SetStateAction<Chat[]>>;
};

export const Context = createContext({} as ContextType);

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [chats, setChats] = useState<Chat[]>([]);

  return (
    <Context.Provider value={{ chats, setChats }}>{children}</Context.Provider>
  );
}
