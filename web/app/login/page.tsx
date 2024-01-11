import LoginForm from "@/components/login/LoginForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} | Sign In`,
    description: "Sign In to your TasQ account.",
};

const Login = () => {
    return (
        <main className="flex max-w-7xl justify-center items-center mx-auto py-10 px-5 lg:px-0">
            <div className="lg:w-1/2 flex">
                <LoginForm />
            </div>
            <div className="w-1/2 hidden lg:block lg:flex-row-reverse">
                <Image
                    src="/login.jpg"
                    width={1000}
                    height={500}
                    alt="demo"
                    className="rounded-lg"
                />
            </div>
        </main>
    );
};

export default Login;
