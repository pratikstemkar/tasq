"use client";

import { Moon, Sun } from "lucide-react";

import {
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

const ThemeMenu = () => {
    const { setTheme } = useTheme();
    return (
        <DropdownMenuSub>
            <DropdownMenuSubTrigger className="hover:cursor-pointer">
                <Sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="mr-2 absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                Theme
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
                <DropdownMenuSubContent>
                    <DropdownMenuItem
                        onClick={() => setTheme("light")}
                        className="hover:cursor-pointer"
                    >
                        Light
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setTheme("dark")}
                        className="hover:cursor-pointer"
                    >
                        Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setTheme("system")}
                        className="hover:cursor-pointer"
                    >
                        System
                    </DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>
    );
};

export default ThemeMenu;
