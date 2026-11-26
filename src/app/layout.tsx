import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noemi Sbaffo | Beauty Visual Creator",
  description: "Portfolio di concept visual beauty e product photography creativa di Noemi Sbaffo.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}

