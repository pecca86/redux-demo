import Navigation from "./components/Navigation";
import { ReactNode } from "react";

export const metadata = {
  title: "Pext",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <h1>Hello, pext!</h1>
        <main>
          {children}
        </main>
      </body>
    </html>

  );
}