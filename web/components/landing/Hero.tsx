import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Task Mastery in Real-Time Harmony
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
                Seamlessly collaborate and conquer tasks in real-time with our
                innovative task management app. Elevate productivity with
                synchronized teamwork &mdash; where tasks meet real-time
                collaboration effortlessly
            </p>
            <Link href="/register">
                <Button className="group transition duration-300 hover:scale-105">
                    Join Now
                    <svg
                        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </Button>
            </Link>
        </div>
    );
};

export default Hero;
