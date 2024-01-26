import WelcomeCard from "@/components/dashboard/WelcomeCard";
import { SidebarNav } from "@/components/settings/SidebarNav";
import { Separator } from "@/components/ui/separator";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex flex-col space-y-5 max-w-7xl justify-center mx-auto py-5 lg:py-10 px-5 lg:px-0 ">
            <WelcomeCard />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <aside className="-mx-4 lg:w-1/5">sidebar</aside>
                <div className="flex-1 lg:max-w-2xl">{children}</div>
            </div>
        </main>
    );
};

export default DashboardLayout;
