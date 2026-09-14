import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: "https://www.barbeariaalmeida.com", changeFrequency: "weekly", priority: 1 }, { url: "https://www.barbeariaalmeida.com/agendar", changeFrequency: "daily", priority: 0.9 }]; }
