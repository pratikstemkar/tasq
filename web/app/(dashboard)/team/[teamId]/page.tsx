import BlockList from "@/components/dashboard/BlockList";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Real-Time Collaborative Task Management for your team.",
};

const TeamPage = () => {
    return <BlockList />;
};

export default TeamPage;
