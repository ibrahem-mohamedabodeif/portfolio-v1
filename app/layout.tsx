import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A portfolio showcasing my projects and skills.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "portfolio",
    "projects",
    "web development",
    "software engineering",
    "frontend development",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "tailwindcss",
    "supabase",
    "github",
    "web design",
    "web applications",
    "responsive design",
    "software development",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-black">
        <header className="py-3 px-7 lg:px-20 bg-[#e5e5e5]">
          <Navbar/>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="mt-auto">
          <Footer/>
        </footer>
      </body>
    </html>
  );
}