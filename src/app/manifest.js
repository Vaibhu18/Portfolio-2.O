export default function manifest() {
  return {
    name: "vcode — Vaibhav Shinde",
    short_name: "vcode",
    description: "Portfolio of Vaibhav Shinde, Full Stack Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#7048c8",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/brand/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
