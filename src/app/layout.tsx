import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Projeto Biblioteca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptb">
      <body className="bg-(--main-bg-color)">
        {children}
      </body>
    </html>
  );
}
