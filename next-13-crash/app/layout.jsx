import Header from "./components/Header";
import { Poppins } from "next/font/google";
import "./globals.css";
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Protech - Workshops",
  description:
    "A Website Shoowcasing All The Workshops Done In The Protech Association",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
