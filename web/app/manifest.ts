import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "TusQ",
        short_name: "TusQ",
        description: "Real-Time Collaborative Task Management for your team.",
        start_url: "/",
        display: "standalone",
        background_color: "#000",
        theme_color: "#fff",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
