import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/_components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Next Crush Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased border min-h-screen max-w-7xl mx-auto flex  flex-col items-center`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
