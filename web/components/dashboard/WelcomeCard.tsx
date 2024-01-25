"use client";

import { useUser } from "@clerk/nextjs";

const WelcomeCard = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
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
