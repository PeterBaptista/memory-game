import type { Metadata } from "next";
import { MenuBar } from "@/modules/home/app-layout";

import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Memory Game",
  description: "A memory game created using nextjs with shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MenuBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
