import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://photo.binodlab.tech";

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 1,
		},
	];
}
