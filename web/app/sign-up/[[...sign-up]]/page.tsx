import { SignUp } from "@clerk/nextjs";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: `Sign Up`,
    description: "Create a new TusQ account.",
};

export default function Page() {
    return (
        <main className="flex max-w-7xl justify-center items-center mx-auto py-10 px-5 lg:px-0">
            <div className="w-1/2 hidden lg:block">
                <Image
                    src="/register.jpg"
                    width={1000}
                    height={500}
                    alt="demo"
                    className="rounded-lg"
                />
            </div>
            <div className="lg:w-1/2 flex lg:flex-row-reverse">
                <SignUp />
            </div>
        </main>
    );
}
