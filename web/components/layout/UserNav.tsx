"use client";

import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import {
    LayoutDashboardIcon,
    LogOut,
    SettingsIcon,
    SparklesIcon,
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { logout } from "@/lib/features/authSlice";

const UserNav = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-8 w-8 lg:h-10 lg:w-10 rounded-full shadow"
                >
                    <Avatar className="h-8 w-8 lg:h-10 lg:w-10">
                        <AvatarImage
                            src="https://github.com/pratikstemkar.png"
                            alt="profile image"
                        />
                        <AvatarFallback>SI</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        className="cursor-pointer lg:hidden"
                        onClick={() => router.push("/upgrade")}
                    >
                        <SparklesIcon className="mr-2 h-4 w-4" />
                        <span>Upgrade</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => router.push("/dashboard")}
                    >
                        <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => router.push("/settings")}
                    >
                        <SettingsIcon className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="text-red-500 cursor-pointer"
                        onClick={() => dispatch(logout())}
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Sign Out</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserNav;
