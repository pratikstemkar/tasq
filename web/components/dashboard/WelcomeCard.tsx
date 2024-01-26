"use client";

import { useUser } from "@clerk/nextjs";
import { Skeleton } from "../ui/skeleton";

const WelcomeCard = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return (
            <>
                <div className="flex flex-col space-y-2">
                    <Skeleton className="h-10 w-1/2" />
                    <Skeleton className="h-5 w-1/4" />
                </div>
            </>
        );
    }

    return (
        <div className="flex flex-col w-full">
            <h1 className="text-4xl font-bold tracking-tighter">
                Welcome back, {user.firstName}!
            </h1>
            <h2 className="text-md text-muted-foreground font-medium">
                Manage your tasks and updates from here.
            </h2>
        </div>
    );
};

export default WelcomeCard;
