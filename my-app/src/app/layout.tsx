import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Homework #2",
  description: "we will have GTA 6 before 7th period stops yapping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
