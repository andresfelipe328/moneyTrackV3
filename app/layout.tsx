import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { Provider } from "./sessionProvider";

const oslwald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MoneyTrack",
  description:
    "Transactional data app that helps you keep up with your spending, budgets, and subscriptions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oslwald.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
