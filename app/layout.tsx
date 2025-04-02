import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
    <html lang="en">
      <body cz-shortcut-listen="true">
        <div className="py-3 px-7 lg:px-20 bg-[#e5e5e5]">
          <Navbar />
        </div>
        <main className="min-h-screen bg-white text-black">{children}</main>
        <footer className="mt-auto bg-white text-black">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
