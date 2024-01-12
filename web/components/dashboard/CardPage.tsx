"use client";

import { useAuth } from "@/lib/hooks";
import { redirect } from "next/navigation";

const CardPage = () => {
    const auth = useAuth();

    if (!auth.user) {
        redirect("/login");
    }

    return <div>CardPage</div>;
};

export default CardPage;
