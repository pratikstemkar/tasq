"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

const loginFormSchema = z.object({
    identity: z.string().min(2).max(50),
    password: z.string().min(8).max(18),
});

const LoginForm = () => {
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            identity: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof loginFormSchema>) {
        console.log(values);
    }

    return (
        <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">
                    Sign In to your account
                </CardTitle>
                <CardDescription>
                    Enter your email/username below to login to your account.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 lg:min-w-[400px]">
                <div className="grid grid-cols-2 gap-6">
                    <Button variant="outline">
                        <Icons.gitHub className="mr-2 h-4 w-4" />
                        Github
                    </Button>
                    <Button variant="outline">
                        <Icons.google className="mr-2 h-4 w-4" />
                        Google
                    </Button>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-2"
                    >
                        <FormField
                            control={form.control}
                            name="identity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email/Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="email@example.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        We do not share your email with anyone.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                        />
                                    </FormControl>
                                    {/* <FormDescription>Password is saved in hash.</FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                        >
                            Sign In
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="text-sm ">
                Don&apos;t have an account?{" "}
                <Link
                    href="/register"
                    className="text-blue-500 ml-2 hover:underline"
                >
                    Sign Up
                </Link>
            </CardFooter>
        </Card>
    );
};

export default LoginForm;
