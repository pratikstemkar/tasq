import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex flex-col space-y-5 max-w-7xl justify-center items-center mx-auto py-5 lg:py-10 px-5 lg:px-0">
            <h2 className="text-4xl lg:text-6xl text-red-500 font-extrabold tracking-tighter">
                404: Page Not Found
            </h2>
            <p className="text-lg">Could not find requested resource.</p>
            <Link
                href="/"
                className="text-blue-500 hover:underline"
            >
                Return Home
            </Link>
        </main>
    );
}
