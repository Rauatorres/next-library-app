import type { Metadata } from "next";
import "./globals.css";
import QueryWrapper from "@/src/react-query/QueryWrapper";


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
        <QueryWrapper>
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
