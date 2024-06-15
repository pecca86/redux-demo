import { ReactNode } from "react";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "@/app/_components/Header";

const josefinSans = Josefin_Sans({
  display: "swap",
  subsets: ["latin"]
})

export const metadata = {
  title: {
    template: "Pext - %s",
    default: "Home",
  },
  description: "A simple Next.js starter template", //translates to html head meta description
  keywords: ["next.js", "react", "tailwindcss"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} antialiased bg-primary-950 text-primary-50 min-h-screen flex flex-col relative`}>
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>

  );
}