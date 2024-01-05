"use client";

import {
  DropdownMenuCheckboxItem,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import useChat from "@/hooks/useChat";
import { CHAT_MODELS } from "@/lib/utils";

export default function NavBarModelSelect() {
  const { model: selectedModel } = useChat();

  return (
    <DropdownMenuGroup>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Model</DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            {CHAT_MODELS.map((model) => (
              <DropdownMenuCheckboxItem
                key={model}
                checked={model === selectedModel}
                // onCheckedChange={() => setSelectedModel(model)}
              >
                {model}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    </DropdownMenuGroup>
  );
}
