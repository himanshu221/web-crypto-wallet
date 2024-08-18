import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "./provider";
import { AppBar } from "@/components/AppBar";


export const metadata: Metadata = {
  title: "Notecase",
  description: "Web based crypt wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Provider>
          <AppBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
