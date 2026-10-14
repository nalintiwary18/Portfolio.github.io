import type { MetadataRoute } from "next";
import { SITE_URL } from "./portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: `${SITE_URL}/`, priority: 1 },
        { url: `${SITE_URL}/profile/`, priority: 0.8 },
    ];
}
