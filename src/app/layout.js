import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Premium Car Rental - Luxury Cars for Every Occasion",
  description:
    "Sewa mobil mewah dengan layanan terbaik. Armada premium untuk pernikahan, bisnis, dan acara spesial Anda.",
  keywords: "rental mobil, sewa mobil mewah, rental car, luxury car rental",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body
        className="font-inter antialiased bg-white text-gray-900"
        cz-shortcut-listen="true"
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
