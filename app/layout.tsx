import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const openSans = Open_Sans({
  subsets: ['latin'],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A portfolio showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="text-black" cz-shortcut-listen="true">
        <header className="py-3 px-7 lg:px-20 bg-[#e5e5e5]">
          <Navbar />
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
