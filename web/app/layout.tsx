import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} | Manage your tasks with ease`,
    description: "Real-Time Collaborative Task Management for your team.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <body
                    className={`${inter.className} flex flex-col justify-between min-h-screen`}
                >
                    <div>
                        <Navbar />
                        {children}
                    </div>
                    <Footer />
                </body>
            </ThemeProvider>
        </html>
    );
}
