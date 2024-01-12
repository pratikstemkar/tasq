import { Loader2 } from "lucide-react";

const Loading = () => {
    return (
        <main className="flex w-full justify-center items-center">
            <Loader2 className="animate-spin h-10 w-10" />
        </main>
    );
};

export default Loading;
