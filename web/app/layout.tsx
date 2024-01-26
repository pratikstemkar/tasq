import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import StoreProvider from "@/components/layout/StoreProvider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: {
        default: `${process.env.NEXT_PUBLIC_APP_NAME} - Manage your tasks with ease`,
        template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    },

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
            <StoreProvider>
                <ClerkProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
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
                            <div>
                                <Toaster />
                                <Footer />
                            </div>
                        </body>
                    </ThemeProvider>
                </ClerkProvider>
            </StoreProvider>
        </html>
    );
}
