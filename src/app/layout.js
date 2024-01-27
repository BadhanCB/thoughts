import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ThemeContextProvider from "@/providers/ThemeContextProvider";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Thoughts",
    description: "A Next.js Blog Application",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <ThemeContextProvider>
                        <div className="container">
                            <div className="wrapper">
                                <Navbar />
                                {children}
                                <Footer />
                            </div>
                        </div>
                    </ThemeContextProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
