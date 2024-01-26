"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustifyIcon, LogIn, SparklesIcon } from "lucide-react";
import ThemeMenu from "./ThemeMenu";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";

const Navbar = () => {
    const { isLoaded, userId, sessionId, getToken } = useAuth();

    return (
        <nav className="flex justify-between items-center px-5 lg:px-20 py-2 backdrop-blur-lg bg-red-500">
            <div>
                <Link
                    href="/"
                    className="flex space-x-2 hover:cursor-pointer items-center "
                >
                    <Image
                        src="/logo.png"
                        width={50}
                        height={50}
                        alt="logo"
                        className="dark:invert"
                    />
                    <h1 className="text-4xl font-extrabold tracking-tighter hover:cursor-pointer">
                        {process.env.NEXT_PUBLIC_APP_NAME}
                    </h1>
                </Link>
            </div>
            <div className="space-x-2 flex justify-center items-center">
                {!userId ? (
                    <>
                        <Link
                            href="/sign-in"
                            className="hidden lg:inline-flex"
                        >
                            <Button variant="outline">
                                <LogIn className="mr-2 h-4 w-4" />
                                <span>Sign In</span>
                            </Button>
                        </Link>
                        <Link
                            href="/sign-up"
                            className="hidden lg:inline-flex"
                        >
                            <Button variant="default">
                                <span>Join Now</span>
                            </Button>
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="lg:hidden"
                                >
                                    <AlignJustifyIcon className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <ThemeMenu />
                                <Link href="/sign-in">
                                    <DropdownMenuItem>
                                        <LogIn className="mr-2 h-4 w-4" />
                                        <span>Sign In</span>
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>
                ) : (
                    <>
                        <OrganizationSwitcher
                            hidePersonal
                            afterCreateOrganizationUrl="/team/:id"
                            afterSelectOrganizationUrl="/team/:id"
                            afterLeaveOrganizationUrl="/select-org"
                            appearance={{
                                elements: {
                                    rootBox: {
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    },
                                },
                            }}
                        />
                        <UserButton
                            afterSignOutUrl="/"
                            appearance={{
                                elements: {
                                    avatarBox: {
                                        height: 30,
                                        width: 30,
                                    },
                                },
                            }}
                        />
                    </>
                )}
                {/* <ThemeToggle /> */}
            </div>
        </nav>
    );
};

export default Navbar;
