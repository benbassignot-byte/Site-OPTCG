import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Créations 3D — One Piece TCG",
  description: "Créations et boîtes imprimées en 3D pour le One Piece Card Game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
