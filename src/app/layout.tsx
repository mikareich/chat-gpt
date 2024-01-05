import { Inter } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/components/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
