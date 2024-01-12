import { Metadata } from "next";

export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} | Dashboard`,
    description: "Manage your tasks and updates from here.",
};

const Dashboard = () => {
    return (
        <main className="flex flex-col space-y-10 max-w-7xl justify-center mx-auto py-5 lg:py-10 px-5 lg:px-0 ">
            <div className="flex flex-col w-full">
                <h1 className="text-4xl font-bold tracking-tighter">
                    Welcome back, Pratik!
                </h1>
                <h2 className="text-md text-muted-foreground font-medium">
                    Manage your tasks and updates from here.
                </h2>
            </div>
            <div>Cards</div>
        </main>
    );
};

export default Dashboard;
