"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getAvatar } from "@/lib/utils";
import NavBarModelSelect from "./navbarModelSelect";

export default function NavBar() {
  const user = getAvatar("user", "chatId");

  return (
    <nav className="flex mt-10 pb-5 border-b">
      <h1 className="font-bold text-2xl">Chat GPT: Über Ritter und Drachen</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="ml-auto">
          <Button variant="outline">
            <Avatar className="rounded-xl w-6 h-6 mr-2">
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback>{user.name}</AvatarFallback>
            </Avatar>
            Mika Reich
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/settings">Settings</Link>
          </DropdownMenuItem>
          <NavBarModelSelect />
          <DropdownMenuItem>
            <Link href="/logout" className="text-destructive">
              Logout
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>

    /*
    <DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    */
  );
}
