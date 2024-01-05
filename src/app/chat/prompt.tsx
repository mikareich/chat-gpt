"use client";

import { useChat } from "ai/react";
import { SendIcon, StopCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuid } from "uuid";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  prompt: z.string().min(1, "Prompt is required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Prompt() {
  const router = useRouter();
  const pathname = usePathname();
  const [chatId, setChatId] = useState(uuid());
  const { isLoading, append, stop } = useChat({
    id: chatId,
  });
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const isChatReady = useMemo(
    () => new RegExp("^/chat/.+").test(pathname),
    [pathname]
  );

  useEffect(() => {
    if (isChatReady) {
      const id = pathname.split("/")[2];
      setChatId(id);
      return;
    }

    setChatId(uuid());
  }, [pathname, isChatReady]);

  const handleSubmit = ({ prompt }: FormValues) => {
    if (!isChatReady) router.push(`/chat/${chatId}`);

    append({
      role: "user",
      content: prompt,
    });

    form.reset();
  };

  return (
    <Form {...form}>
      <form
        className="flex gap-4 items-end mt-5"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name={isLoading ? ("stop" as any) : "prompt"}
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Your prompt</FormLabel>
              <FormControl>
                <Input
                  placeholder="What is the difference between a democracy and a republic..."
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute bottom-0 -translate-y-full max-w-full truncate" />
            </FormItem>
          )}
        />

        <Button
          type="reset"
          onClick={stop}
          className={isLoading ? "visible" : "hidden"}
        >
          Stop <StopCircle size={16} className="ml-1" />
        </Button>

        <Button type="submit" className={isLoading ? "hidden" : "visible"}>
          Send <SendIcon size={16} className="ml-1" />
        </Button>
      </form>
    </Form>
  );
}
