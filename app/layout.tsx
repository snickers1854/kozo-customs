import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KŌZŌ CUSTOMS",
  description: "Handcrafted custom clothing. Wear your identity.",
  openGraph: {
    title: "KŌZŌ CUSTOMS",
    description: "Handcrafted custom clothing. Wear your identity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
