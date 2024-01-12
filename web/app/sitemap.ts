import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://tusq.vercel.app",
            lastModified: new Date(),
        },
        {
            url: "https://tusq.vercel.app/dashboard",
            lastModified: new Date(),
        },
    ];
}
