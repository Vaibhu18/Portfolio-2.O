export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://itsvcode.vercel.app/sitemap.xml",
  };
}
