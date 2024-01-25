import CardPage from "@/components/dashboard/CardPage";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Dashboard`,
    description: "Manage your tasks and updates from here.",
};

const Dashboard = () => {
    return (
        <main className="flex flex-col space-y-10 max-w-7xl justify-center mx-auto py-5 lg:py-10 px-5 lg:px-0 ">
            <WelcomeCard />
            <CardPage />
        </main>
    );
};

export default Dashboard;
