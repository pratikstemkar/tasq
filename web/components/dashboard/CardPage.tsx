"use client";

import { useUser } from "@clerk/nextjs";

const CardPage = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return <div>CardPage</div>;
};

export default CardPage;
