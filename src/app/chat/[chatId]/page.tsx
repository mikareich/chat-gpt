"use client";

import { getAvatar } from "@/lib/utils";
import { useChat } from "ai/react";
import Message from "./message";
import { useEffect, useRef, useState } from "react";

type MessageListProps = {
  params: {
    chatId: string;
  };
};

export default function MessageList({ params }: MessageListProps) {
  const { chatId } = params;
  const { messages } = useChat({
    id: chatId,
  });
  const listRef = useRef<HTMLOListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lockScroll, setLockScroll] = useState(true);

  const handleScroll = () => {
    if (!listRef.current || !containerRef.current) return;

    const { scrollHeight } = listRef.current;
    const { scrollTop, clientHeight } = containerRef.current;
    setLockScroll(scrollHeight - scrollTop - 100 < clientHeight);
  };

  useEffect(() => {
    if (!listRef.current || !containerRef) return;

    const observer = new ResizeObserver(() => {
      if (!lockScroll) return;

      containerRef.current!.scrollTo(0, listRef.current!.scrollHeight);
    });
    observer.observe(listRef.current);

    return () => observer.disconnect();
  }, [listRef, containerRef, lockScroll]);

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto"
      onScroll={handleScroll}
    >
      <ol ref={listRef} className="flex flex-col gap-6">
        {messages.map((message) => (
          <li key={message.id}>
            <Message chatId={chatId} {...message} />
          </li>
        ))}
      </ol>
    </div>
  );
}
