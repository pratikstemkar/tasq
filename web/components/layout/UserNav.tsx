import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { ListPlus, LogOut, Sparkles, User } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

const UserNav = () => {
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
                    <DropdownMenuItem className="cursor-pointer text-yellow-500 lg:hidden">
                        <Sparkles className="mr-2 h-4 w-4" />
                        <span>Subscribe</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                        <ListPlus className="mr-2 h-4 w-4" />
                        <span>Watchlist</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500 cursor-pointer">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Sign Out</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserNav;
