import { Button } from "@/components/ui/button";
import { SparklesIcon } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: `Upgrade`,
    description: "Upgrade your account to unlock exclusive privileges.",
};

const Upgrade = () => {
    return (
        <main className="flex flex-col-reverse lg:flex-row max-w-7xl justify-center items-center mx-auto py-5 lg:py-10 px-5 lg:px-0">
            <div className="lg:w-1/2 space-y-5 mt-5 lg:mt-0">
                <h1 className="font-extrabold text-7xl tracking-tighter">
                    Be part of the exclusive club!
                </h1>
                <p className="text-md text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae blanditiis voluptatum, perspiciatis corporis iusto
                    delectus deserunt earum illo laborum consequatur ipsam
                    laudantium facilis ullam iste iure cumque totam fugit
                    voluptatibus.
                </p>
                <Link href={`${process.env.STRIPE_PAYMENT_LINK}`}>
                    <Button
                        variant="outline"
                        className="rounded-full mt-5"
                    >
                        <SparklesIcon className="mr-2 h-4 w-4" />
                        <span>Upgrade</span>
                    </Button>
                </Link>
            </div>
            <div className="lg:w-1/2">
                <Image
                    src="/upgrade.jpg"
                    width={1024}
                    height={720}
                    alt="upgrade"
                    className="rounded-lg"
                />
            </div>
        </main>
    );
};

export default Upgrade;
