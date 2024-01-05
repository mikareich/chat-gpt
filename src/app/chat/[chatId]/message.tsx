import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAvatar } from "@/lib/utils";
import { Message } from "ai";

type MessageProps = {
  chatId: string;
} & Message;

export default function Message({
  role,
  createdAt,
  content,
  chatId,
}: MessageProps) {
  const avatar = getAvatar(role, chatId);

  const timestamp = createdAt || new Date();

  return (
    <div>
      <header className="flex items-center gap-2 mb-2">
        <Avatar className="rounded-xl">
          <AvatarImage src={avatar.image} alt={role} />
          <AvatarFallback>{avatar.name}</AvatarFallback>
        </Avatar>
        <span className="font-bold">{avatar.name}</span>
        <time
          className="ml-auto text-muted-foreground text-sm"
          dateTime={timestamp.toDateString()}
        >
          {new Intl.DateTimeFormat("en-UK", {
            dateStyle: "medium",
            timeStyle: "short",
          }).format(timestamp)}
        </time>
      </header>
      <p>{content}</p>
    </div>
  );
}
