import Prompt from "./prompt";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container pt-24 pb-10 flex flex-col gap-5 h-full">
      {children}
      <Prompt />
    </main>
  );
}
