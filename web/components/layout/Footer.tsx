import Link from "next/link";

const Footer = () => {
    return (
        <footer className="px-5 lg:px-20 py-5 text-muted-foreground text-sm">
            {process.env.NEXT_PUBLIC_APP_NAME} &copy; {new Date().getFullYear()}{" "}
            | Developed by{" "}
            <Link
                href="https://pratikstemkar.in"
                target="_blank"
                className="underline"
            >
                Pratik
            </Link>
            {". "}| Source Code available on{" "}
            <Link
                href="https://github.com/pratikstemkar/tasq"
                target="_blank"
                className="underline"
            >
                GitHub
            </Link>
            {"."}
        </footer>
    );
};

export default Footer;
