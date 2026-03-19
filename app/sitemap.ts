import type { MetadataRoute } from "next"

const baseUrl = "https://discoverromaniawithcorina.com"

const tourIds = [
  "belle-epoque-elegance",
  "communist-shadows",
  "new-wave-kitchen",
  "transylvania-castles",
  "slanic-salt-mine",
  "danube-delta",
  "constanta-black-sea",
  "mogosoaia-snagov",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/tours`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/book`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/reviews`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
  ]

  const tourRoutes: MetadataRoute.Sitemap = tourIds.map((id) => ({
    url: `${baseUrl}/tours/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticRoutes, ...tourRoutes]
}
