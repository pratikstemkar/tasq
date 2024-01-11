import Hero from "@/components/landing/Hero";
import MainCarousel from "@/components/landing/MainCarousel";

export default function Home() {
    return (
        <main className="flex flex-col max-w-7xl mx-auto py-10 px-5 lg:px-0 space-y-10">
            <MainCarousel />
            <Hero />
        </main>
    );
}
