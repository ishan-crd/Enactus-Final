import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enactus - Global Student-led Nonprofit",
  description:
    "Enactus is dedicated to creating positive change through entrepreneurial action since 1975.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
