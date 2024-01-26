import Sidebar from "@/components/dashboard/Sidebar";
import WelcomeCard from "@/components/dashboard/WelcomeCard";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex flex-col space-y-5 max-w-7xl justify-center mx-auto py-5 lg:py-10 px-5 lg:px-0 ">
            <WelcomeCard />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <Sidebar />
                <div className="flex  w-full">{children}</div>
            </div>
        </main>
    );
};

export default DashboardLayout;
