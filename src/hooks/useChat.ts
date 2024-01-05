"use client";

import { CHAT_MODELS } from "@/lib/utils";
import { useContext, useEffect, useMemo, useState } from "react";
import { useChat as useVercelChat } from "ai/react";
import { v4 as uuid } from "uuid";
import { Context } from "@/components/ContextProvider";

export default function useChat() {
  const { chats, setChats } = useContext(Context);
  const [model, setModel] = useState<(typeof CHAT_MODELS)[number]>(
    CHAT_MODELS[0]
  );
  const [id, setId] = useState<string>(uuid());
  const chat = useVercelChat({ id: uuid() });
  const [title, setTitle] = useState<string | null>(null);

  //   const newChat = (newMode: (typeof CHAT_MODELS)[number]) => {};

  useEffect(() => {
    const cachedMessages = chats.find((c) => c.id === id)?.messages || [];
    chat.setMessages(cachedMessages);
  }, [id, chat, chats]);

  useEffect(() => {
    setChats((prev) => {
      const index = prev.findIndex((c) => c.id === id);
      if (index === -1) {
        return [...prev, { id, title, messages: chat.messages } as any];
      } else {
        prev[index].messages = chat.messages;
        return [...prev];
      }
    });
  }, [id, title, chat, setChats]);

  return {
    title,
    model,
    appendMessage: chat.append,
    messages: chat.messages,
    isLoading: chat.isLoading,
  };
}
