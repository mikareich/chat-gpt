import NavBar from "./navbar";
import Prompt from "./prompt";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container pb-10 flex flex-col h-full">
      <NavBar />
      {children}
      <Prompt />
    </main>
  );
}
