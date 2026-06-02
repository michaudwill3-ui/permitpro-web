import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PermitPro",
  description: "Know every permit before you pull up to the job.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
